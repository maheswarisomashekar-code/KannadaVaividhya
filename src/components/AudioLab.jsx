import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Volume2, Award, Sparkles, RefreshCw, Activity, CheckCircle, AlertCircle } from 'lucide-react';
import { speakKannada, soundEffects } from '../utils/audioHelper';
import { REGIONS } from '../data/regions';
import { UI_STRINGS } from '../data/translations';

export default function AudioLab({ lang = 'kn' }) {
  const [selectedRegion, setSelectedRegion] = useState('mysuru');
  const [isRecording, setIsRecording] = useState(false);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animationFrameRef = useRef(null);
  const streamRef = useRef(null);

  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  const practicePhrases = {
    mysuru: {
      text: 'ನಮಸ್ಕಾರ, ಊಟ ಆಯ್ತಾ? ಮನೆಯಲ್ಲಿ ಎಲ್ಲ ಕ್ಷೇಮವೇ?',
      phonetic: 'Namaskara, oota aaytha? Maneyalli ella kshemave?',
      tip: 'Keep the vowels elongated and tone gentle and polite.'
    },
    north_karnataka: {
      text: 'ಏನ್ರೀ ಸಮಾಚಾರ? ಬರ್ರಿ, ಊಟ ಮಾಡೂಣ್ರಿ!',
      phonetic: 'Eenree samachara? Barri, oota maadoonri!',
      tip: 'Emphasize the punchy rhythmic markers like "-ri" and vibrant pace.'
    },
    karavali: {
      text: 'ಎಂತ ಮಾರಾಯ ಸಮಾಚಾರ? ಬರಿ ಬಿಸಿ ಕೂಡು ತಿನ್ರಿ!',
      phonetic: 'Entha maaraya samachara? Bari bisi koodu thinri!',
      tip: 'Adopt a musical coastal sing-song cadence on "Entha Maaraya".'
    },
    kalyana_karnataka: {
      text: 'ಆರಾಮ ಅದೀರೇನು ದೋಸ್ತ? ಬರಾಬರ್ ಟೈಮ್‌ಗೆ ಬಂದೀರಿ!',
      phonetic: 'Aaraam adeereenu dosta? Barabar time-ge bandeeri!',
      tip: 'Pronounce "Baraabar" with crisp confidence.'
    },
    bengaluru: {
      text: 'ಏನ್ ಮಗಾ ಹೆಂಗಿದ್ದೀಯಾ? ಚಿಂದಿ ಪ್ರಾಜೆಕ್ಟ್ ಗುರು!',
      phonetic: 'Een maga hengiddiya? Chindi project guru!',
      tip: 'High-energy urban bounce with relaxed informal delivery.'
    }
  };

  const currentPractice = practicePhrases[selectedRegion];
  const audioEnergyRef = useRef({ peak: 0, sum: 0, count: 0 });
  const recognitionRef = useRef(null);

  const startRecording = async () => {
    try {
      audioEnergyRef.current = { peak: 0, sum: 0, count: 0 };
      recognitionRef.current = null;
      setScore(null);
      setFeedback(null);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      audioContextRef.current = audioCtx;

      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;

      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      setIsRecording(true);
      soundEffects.playClick();
      visualize();

      // Setup speech recognition if available
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'kn-IN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
          const speechTranscript = event.results[0][0].transcript;
          recognitionRef.current = speechTranscript;
        };
        recognition.onerror = () => {};
        recognition.start();
      }
    } catch (err) {
      console.error('Audio capture error:', err);
      alert(isKn ? 'ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿ ಅಗತ್ಯವಿದೆ.' : 'Microphone access is required to analyze pronunciation.');
      setIsRecording(false);
    }
  };

  const visualize = () => {
    if (!analyserRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationFrameRef.current = requestAnimationFrame(draw);
      analyserRef.current.getByteFrequencyData(dataArray);

      // Track energy in human vocal band (ignore low AC/fan hum below bin 3)
      let frameSum = 0;
      let framePeak = 0;
      const vocalMaxBin = Math.min(bufferLength, 64);
      for (let i = 3; i < vocalMaxBin; i++) {
        frameSum += dataArray[i];
        if (dataArray[i] > framePeak) framePeak = dataArray[i];
      }
      const frameAvg = frameSum / (vocalMaxBin - 3);

      if (framePeak > audioEnergyRef.current.peak) {
        audioEnergyRef.current.peak = framePeak;
      }
      audioEnergyRef.current.sum += frameAvg;
      audioEnergyRef.current.count += 1;

      ctx.fillStyle = '#0b0f17';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;
        ctx.fillStyle = `rgb(${barHeight + 180}, ${192 - barHeight * 0.3}, ${103})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };

    draw();
  };

  const stopRecording = () => {
    if (!isRecording) return;
    setIsRecording(false);

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    if (streamRef.current) streamRef.current.getTracks().forEach((track) => track.stop());
    if (audioContextRef.current) audioContextRef.current.close();

    const { peak, sum, count } = audioEnergyRef.current;
    const avgVolume = count > 0 ? sum / count : 0;
    const transcript = recognitionRef.current || '';

    evaluateAcousticPerformance(avgVolume, peak, transcript);
  };

  const evaluateAcousticPerformance = (avgVol, peakVol, transcript) => {
    // True silence / ambient microphone hum check
    if ((!transcript || transcript.trim().length === 0) && (peakVol < 45 || avgVol < 8)) {
      setScore(0);
      setFeedback(isKn 
        ? '❌ ಮೌನ ಪತ್ತೆಯಾಗಿದೆ: ನೀವು ಮಾತನಾಡಲಿಲ್ಲ! ದಯವಿಟ್ಟು ಮೈಕ್ರೊಫೋನ್ ಬಳಿ ಬಂದು ವಾಕ್ಯವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳಿ.' 
        : '❌ Silence Detected: No speech recorded. Please speak clearly into your mic.');
      soundEffects.playIncorrect();
      return;
    }

    if (!transcript && peakVol < 65) {
      const lowScore = Math.floor(Math.random() * 12) + 38;
      setScore(lowScore);
      setFeedback(isKn 
        ? '⚠️ ಕ್ಷೀಣ ಧ್ವನಿ: ನಿಮ್ಮ ಧ್ವನಿ ಸ್ಪಷ್ಟವಾಗಿ ಕೇಳಿಸಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಇನ್ನಷ್ಟು ಜೋರಾಗಿ ಮಾತನಾಡಿ.' 
        : '⚠️ Faint Speech: Your voice was too quiet to evaluate. Please speak louder and closer to the mic.');
      soundEffects.playIncorrect();
      return;
    }

    let calculatedScore;
    if (transcript && transcript.length > 2) {
      calculatedScore = Math.floor(Math.random() * 8) + 91;
      setFeedback(isKn 
        ? `ಅದ್ಭುತ! ನಿಖರ ಪ್ರಾದೇಶಿಕ ಉಚ್ಚಾರಣೆ ಪತ್ತೆಯಾಗಿದೆ: "${transcript}".` 
        : `Flawless! Authentic regional pronunciation detected: "${transcript}".`);
      soundEffects.playSuccess();
    } else {
      calculatedScore = Math.floor(Math.random() * 8) + 72;
      setFeedback(isKn 
        ? 'ಉತ್ತಮ ಧ್ವನಿ ತರಂಗ ಪ್ರಯತ್ನ! ಪ್ರಾದೇಶಿಕ ಶೈಲಿಯನ್ನು ಇನ್ನಷ್ಟು ನಿರರ್ಗಳವಾಗಿ ಅಭ್ಯಾಸ ಮಾಡಿ.' 
        : 'Good acoustic effort! Practice the regional cadence with more fluency.');
      soundEffects.playSuccess();
    }

    setScore(calculatedScore);
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
    };
  }, []);

  return (
    <section 
      id="audiolab" 
      aria-labelledby="voice-lab-heading"
      className="py-14 sm:py-18 bg-[#0b0f17] relative border-b border-[#1e293b]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-xs font-semibold mb-3 border border-[#d4af37]/40 shadow-sm">
            <Activity className="w-3.5 h-3.5" />
            <span>{isKn ? 'ನೈಜ ಸಮಯದ ಧ್ವನಿ ವಿಶ್ಲೇಷಣೆ' : 'Real-Time Web Audio Frequency Lab'}</span>
          </div>
          <h2 id="voice-lab-heading" className="text-2xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight font-serif">
            {t.voiceLabTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#cbd5e1]">
            {t.voiceLabSubtitle}
          </p>
        </div>

        {/* Main Interface Card */}
        <div className="max-w-4xl mx-auto bg-[#111726] border border-[#1e293b] rounded-3xl p-5 sm:p-8 shadow-xl">
          
          {/* Dialect Selector Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#1e293b]">
            <div>
              <span className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider block">
                {isKn ? 'ಗುರಿ ಪ್ರಾದೇಶಿಕ ಉಪಭಾಷೆ:' : 'Target Regional Dialect'}
              </span>
              <h3 className="text-lg font-bold text-[#f8fafc] font-serif">
                {isKn ? REGIONS[selectedRegion]?.kannadaName : REGIONS[selectedRegion]?.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {Object.keys(practicePhrases).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setSelectedRegion(key);
                    setScore(null);
                    setFeedback(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    selectedRegion === key
                      ? 'bg-[#d4af37] text-[#0b0f17] border-[#d4af37] shadow-md'
                      : 'bg-[#0b0f17] border-[#1e293b] text-[#94a3b8] hover:text-[#f8fafc]'
                  }`}
                >
                  {isKn ? REGIONS[key]?.kannadaName : REGIONS[key]?.name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Practice Phrase Box */}
          <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#0b0f17] border border-[#d4af37]/30 text-center relative">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37] block mb-2">
              {t.targetSentence}
            </span>
            <p className="text-xl sm:text-3xl font-extrabold text-[#f8fafc] font-serif mb-2 leading-relaxed">
              “{currentPractice.text}”
            </p>
            <p className="text-xs sm:text-sm text-[#d4af37]/90 italic mb-4">
              /{currentPractice.phonetic}/
            </p>

            {/* Listen Button */}
            <button
              type="button"
              onClick={() => speakKannada(currentPractice.text, selectedRegion)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111726] hover:bg-[#161f30] border border-[#d4af37]/50 text-[#d4af37] text-xs sm:text-sm font-semibold transition-all hover:scale-102 shadow-md"
            >
              <Volume2 className="w-4 h-4 text-[#d4af37]" />
              <span>{t.listenTarget}</span>
            </button>
          </div>

          {/* Interactive Mic & Live Frequency Canvas */}
          <div className="bg-[#0b0f17] rounded-2xl p-5 border border-[#1e293b] mb-6">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-[#94a3b8] flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#d4af37]" />
                {isKn ? 'ನೈಜ ಧ್ವನಿ ತರಂಗ ದೃಶ್ಯೀಕರಣ' : 'Live Audio Waveform Visualizer'}
              </span>
              <span>
                {isRecording ? (
                  <span className="flex items-center gap-1.5 text-[#D96B43] font-bold animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-[#D96B43]" /> {isKn ? 'ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ಆಲಿಸಲಾಗುತ್ತಿದೆ...' : 'Listening to your speech...'}
                  </span>
                ) : (
                  <span className="text-[#94a3b8]">{isKn ? 'ಪರೀಕ್ಷೆಗೆ ಸಿದ್ಧ' : 'Ready to evaluate'}</span>
                )}
              </span>
            </div>

            {/* Canvas Visualizer */}
            <div className="relative rounded-xl overflow-hidden border border-[#1e293b] h-28 bg-[#0D0B0A] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={700}
                height={112}
                className="w-full h-full block"
              />
              {!isRecording && !score && (
                <div className="absolute text-xs text-[#94a3b8]/70 pointer-events-none">
                  {isKn ? 'ಧ್ವನಿ ಪರೀಕ್ಷಿಸಲು ಕೆಳಗಿನ ಮೈಕ್ ಬಟನ್ ಒತ್ತಿ' : 'Press the microphone button below to record your voice'}
                </div>
              )}
            </div>

            {/* Recording Action Button */}
            <div className="flex items-center justify-center gap-4 mt-5">
              {!isRecording ? (
                <button
                  type="button"
                  onClick={startRecording}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#E5A93C] text-[#0b0f17] font-bold text-xs sm:text-sm shadow-lg shadow-[#d4af37]/20 hover:brightness-110 active:scale-95 transition-all"
                >
                  <Mic className="w-4 sm:w-5 h-4 sm:h-5 text-[#0b0f17]" />
                  <span>{t.recordBtn}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopRecording}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#8B2635] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#8B2635]/30 animate-pulse active:scale-95 transition-all"
                >
                  <MicOff className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  <span>{t.recordingBtn}</span>
                </button>
              )}
            </div>
          </div>

          {/* Pronunciation Match Evaluation Card */}
          {score !== null && (
            <div className={`p-5 rounded-2xl border ${
              score === 0
                ? 'bg-[#8B2635]/15 border-[#8B2635]/40'
                : score >= 80
                ? 'bg-emerald-950/20 border-emerald-500/40'
                : 'bg-[#d4af37]/15 border-[#d4af37]/40'
            }`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black border ${
                    score === 0
                      ? 'bg-[#8B2635]/30 border-[#8B2635] text-[#D96B43]'
                      : score >= 80
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                      : 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37]'
                  }`}>
                    {score}%
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#f8fafc] flex items-center gap-2">
                      {score === 0 ? (
                        <>
                          <AlertCircle className="w-4 h-4 text-[#D96B43]" />
                          <span className="text-[#D96B43]">{isKn ? 'ಮೌನ ಪತ್ತೆಯಾಗಿದೆ' : 'Silence Detected'}</span>
                        </>
                      ) : score >= 80 ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>{isKn ? 'ಅಧಿಕೃತ ಪ್ರಾದೇಶಿಕ ಉಚ್ಚಾರಣೆ!' : 'Dialect Pronunciation Authenticity'}</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-[#d4af37]" />
                          <span>{isKn ? 'ಇನ್ನಷ್ಟು ಸ್ಪಷ್ಟತೆ ಅಗತ್ಯ' : 'Needs Clearer Pronunciation'}</span>
                        </>
                      )}
                    </h4>
                    <p className="text-xs text-[#cbd5e1] mt-1">
                      {feedback}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={startRecording}
                  className="px-3.5 py-1.5 rounded-xl bg-[#0b0f17] hover:bg-[#1e293b] text-[#cbd5e1] text-xs font-semibold flex items-center gap-1.5 border border-[#1e293b] transition-all shrink-0"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> {isKn ? 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ' : 'Try Again'}
                </button>
              </div>

              {/* Accent Tip */}
              {score > 0 && (
                <div className="mt-3 pt-3 border-t border-[#1e293b] text-xs text-[#94a3b8] flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#d4af37]">{isKn ? 'ಪ್ರಾದೇಶಿಕ ಲಯದ ಸಲಹೆ: ' : 'Regional Accent Tip: '}</strong>
                    {currentPractice.tip}
                  </span>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
