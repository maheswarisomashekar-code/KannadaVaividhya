import React, { useState } from 'react';
import { getRandomQuizSet, BADGES, MATCH_PAIRS } from '../data/quizData';
import { soundEffects, speakKannada } from '../utils/audioHelper';
import { 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  Volume2, 
  RefreshCw, 
  ArrowRight, 
  Shuffle, 
  Award, 
  Download, 
  Gamepad2, 
  Sparkles,
  Trophy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UI_STRINGS } from '../data/translations';

const QUESTIONS_PER_ROUND = 5;

export default function DialectQuiz({ lang = 'kn' }) {
  // Game Mode: 'quiz' | 'match'
  const [activeGame, setActiveGame] = useState('quiz');

  // --- Quiz Mode States ---
  const [questions, setQuestions] = useState(() => getRandomQuizSet(QUESTIONS_PER_ROUND));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [historyIds, setHistoryIds] = useState([]);

  // --- Matchmaker Game States ---
  const [matchSet, setMatchSet] = useState(() => {
    const shuffled = [...MATCH_PAIRS].sort(() => Math.random() - 0.5).slice(0, 4);
    return shuffled;
  });
  const [shuffledRegions, setShuffledRegions] = useState(() => {
    const list = [...MATCH_PAIRS].slice(0, 4).map(p => p.region);
    return list.sort(() => Math.random() - 0.5);
  });
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]); // array of word ids
  const [matchScore, setMatchScore] = useState(0);
  const [matchStreak, setMatchStreak] = useState(0);

  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  // --- Quiz Logic ---
  const question = questions[currentIdx] || questions[0];

  const handleSelectOption = (option) => {
    if (isAnswered) return;
    setSelectedOption(option.id);
    setIsAnswered(true);

    if (option.isCorrect) {
      setScore((prev) => prev + 1);
      soundEffects.playSuccess();
    } else {
      soundEffects.playIncorrect();
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      if (score >= 3) {
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch (e) {
          console.warn('Confetti error', e);
        }
      }
    }
  };

  const startNewQuiz = () => {
    const updatedHistory = [...historyIds, ...questions.map((q) => q.id)];
    setHistoryIds(updatedHistory);
    setQuestions(getRandomQuizSet(QUESTIONS_PER_ROUND, updatedHistory));
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setRoundNumber((prev) => prev + 1);
    soundEffects.playClick();
  };

  const earnedBadge = [...BADGES].reverse().find((b) => score >= b.threshold) || BADGES[0];

  // --- Certificate Download Handler ---
  const downloadCertificate = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 700;
    const ctx = canvas.getContext('2d');

    // Gradient Slate Canvas Background
    const gradient = ctx.createLinearGradient(0, 0, 1200, 700);
    gradient.addColorStop(0, '#0a0e17');
    gradient.addColorStop(1, '#111726');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 700);

    // Double Gold Frame Borders
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, 1140, 640);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, 1110, 610);

    // Radial Seal Watermark
    ctx.fillStyle = 'rgba(212, 175, 55, 0.05)';
    ctx.beginPath();
    ctx.arc(600, 350, 220, 0, Math.PI * 2);
    ctx.fill();

    // Top Platform Subtitles
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 24px serif';
    ctx.textAlign = 'center';
    ctx.fillText('ಕರ್ನಾಟಕ ಪ್ರಾದೇಶಿಕ ಭಾಷಾ & ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ ವೇದಿಕೆ', 600, 110);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px sans-serif';
    ctx.fillText('KANNADAVAIVIDHYA • REGIONAL DIALECT ARCHIVE', 600, 140);

    // Certificate Title
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 44px serif';
    ctx.fillText('ಕನ್ನಡ ಪ್ರಾದೇಶಿಕ ರಾಯಭಾರಿ', 600, 220);

    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('CERTIFIED REGIONAL DIALECT AMBASSADOR', 600, 260);

    // Award Body
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '20px sans-serif';
    ctx.fillText('This is to certify that the explorer has mastered the linguistic nuances of Karnataka’s dialect families:', 600, 320);

    // Earned Badge
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 36px serif';
    ctx.fillText(`${earnedBadge.title}`, 600, 390);

    ctx.fillStyle = '#f8fafc';
    ctx.font = '20px sans-serif';
    ctx.fillText(`Score: ${score} / ${questions.length} • Round #${roundNumber}`, 600, 435);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 18px sans-serif';
    ctx.fillText(`“${earnedBadge.desc}”`, 600, 480);

    // Kannada Cultural Motto
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 24px serif';
    ctx.fillText('“ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ!”', 600, 560);

    // Footer Metadata
    ctx.fillStyle = '#64748b';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`Issue Date: ${new Date().toLocaleDateString('en-IN')}`, 80, 620);
    ctx.textAlign = 'right';
    ctx.fillText('Verified: KannadaVaividhya Registry', 1120, 620);

    const link = document.createElement('a');
    link.download = `Kannada_Rayabhari_${earnedBadge.title.split(' ')[0]}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    soundEffects.playSuccess();
  };

  // --- Matchmaker Game Logic ---
  const handleWordClick = (item) => {
    if (matchedPairs.includes(item.id)) return;
    soundEffects.playClick();
    setSelectedWord(item);

    if (selectedRegion) {
      checkMatch(item, selectedRegion);
    }
  };

  const handleRegionClick = (regionName) => {
    soundEffects.playClick();
    setSelectedRegion(regionName);

    if (selectedWord) {
      checkMatch(selectedWord, regionName);
    }
  };

  const checkMatch = (wordItem, regionName) => {
    if (wordItem.region === regionName) {
      // Correct Match!
      soundEffects.playSuccess();
      const nextMatched = [...matchedPairs, wordItem.id];
      setMatchedPairs(nextMatched);
      setMatchScore(prev => prev + 10);
      setMatchStreak(prev => prev + 1);
      setSelectedWord(null);
      setSelectedRegion(null);

      if (nextMatched.length === matchSet.length) {
        try {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        } catch {}
      }
    } else {
      // Incorrect Match
      soundEffects.playIncorrect();
      setMatchStreak(0);
      setSelectedWord(null);
      setSelectedRegion(null);
    }
  };

  const resetMatchGame = () => {
    soundEffects.playClick();
    const shuffled = [...MATCH_PAIRS].sort(() => Math.random() - 0.5).slice(0, 4);
    setMatchSet(shuffled);
    setShuffledRegions(shuffled.map(p => p.region).sort(() => Math.random() - 0.5));
    setMatchedPairs([]);
    setSelectedWord(null);
    setSelectedRegion(null);
  };

  return (
    <section 
      id="quiz" 
      aria-labelledby="quiz-heading"
      className="py-14 sm:py-18 bg-[#0b0f17] relative border-b border-[#1e293b]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-xs font-semibold mb-3 border border-[#d4af37]/40 shadow-sm">
            <Trophy className="w-3.5 h-3.5" />
            <span>{isKn ? 'ರೋಮಾಂಚಕ ಜ್ಞಾನ ಕ್ರೀಡೆಗಳು' : 'Gamified Dialect Arcade & Certified Badges'}</span>
          </div>
          <h2 id="quiz-heading" className="text-2xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight font-serif">
            {isKn ? 'ಯಾವ ಕನ್ನಡ? ರಸಪ್ರಶ್ನೆ & ನುಡಿ ಮ್ಯಾಚಿಂಗ್' : 'Dialect Detective & Matchmaker Arcade'}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#cbd5e1]">
            {isKn 
              ? 'ಪ್ರಾದೇಶಿಕ ಶಬ್ದಗಳು, ಗಾದೆಗಳು ಮತ್ತು ಧ್ವನಿ ಸುಳಿವುಗಳ ಮೂಲಕ ನಿಮ್ಮ ಭಾಷಾ ಜ್ಞಾನ ಪರೀಕ್ಷಿಸಿ, ರಾಯಭಾರಿ ಪ್ರಮಾಣಪತ್ರ ಗಳಿಸಿ!' 
              : 'Test your regional Kannada ear, match signature slangs with districts, and claim your official Dialect Ambassador badge!'}
          </p>

          {/* Mode Switcher Tabs */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex p-1 bg-[#111726] border border-[#1e293b] rounded-xl shadow-lg">
              <button
                type="button"
                onClick={() => setActiveGame('quiz')}
                className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeGame === 'quiz'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#E5A93C] text-[#0b0f17] shadow-md font-bold'
                    : 'text-[#cbd5e1] hover:text-[#f8fafc]'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>{isKn ? '೧. ರಸಪ್ರಶ್ನೆ (Detective Quiz)' : '1. Detective Quiz'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveGame('match')}
                className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeGame === 'match'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#E5A93C] text-[#0b0f17] shadow-md font-bold'
                    : 'text-[#cbd5e1] hover:text-[#f8fafc]'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>{isKn ? '೨. ನುಡಿ ಮ್ಯಾಚಿಂಗ್ (Matchmaker)' : '2. Dialect Matchmaker'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* GAME MODE 1: TRIVIA QUIZ */}
        {activeGame === 'quiz' && (
          <div className="max-w-3xl mx-auto bg-[#111726] border border-[#1e293b] rounded-3xl p-5 sm:p-8 shadow-xl relative">
            
            {!quizFinished ? (
              <div>
                {/* Progress Bar & Score header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1e293b] text-xs text-[#94a3b8]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#d4af37]">
                      {isKn ? `ಪ್ರಶ್ನೆ ${currentIdx + 1} / ${questions.length}` : `Question ${currentIdx + 1} of ${questions.length}`}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#0b0f17] text-[#94a3b8] text-[10px] border border-[#1e293b]">
                      {isKn ? `ಸುತ್ತು #${roundNumber}` : `Round #${roundNumber}`}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="bg-[#0b0f17] px-3 py-1 rounded-full text-[#f8fafc] font-bold border border-[#1e293b]">
                      {isKn ? 'ಅಂಕ: ' : 'Score: '}{score}
                    </span>
                    <button
                      type="button"
                      onClick={startNewQuiz}
                      className="p-1 px-2 rounded bg-[#0b0f17] hover:bg-[#1e293b] text-[#94a3b8] hover:text-[#d4af37] border border-[#1e293b] transition-colors text-xs flex items-center gap-1"
                      title="Shuffle & Load New Random Questions"
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{t.btnShuffle}</span>
                    </button>
                  </div>
                </div>

                {/* Progress line */}
                <div className="w-full bg-[#0b0f17] h-1.5 rounded-full my-4 overflow-hidden border border-[#1e293b]">
                  <div
                    className="bg-[#d4af37] h-full transition-all duration-300"
                    style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                  />
                </div>

                {/* Question & Quote Prompt */}
                <div className="my-5">
                  <h3 className="text-base sm:text-lg font-bold text-[#f8fafc] mb-1 font-serif">
                    {isKn ? question.promptKannada : question.promptEnglish}
                  </h3>
                  <p className="text-xs text-[#94a3b8] mb-5">
                    {isKn ? question.promptEnglish : question.promptKannada}
                  </p>

                  {/* Dialect Quote Display Box */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#0b0f17] border border-[#d4af37]/30 text-center relative mb-5">
                    <p className="text-xl sm:text-3xl font-extrabold text-[#d4af37] font-serif mb-2">
                      {question.quoteKannada}
                    </p>
                    <p className="text-xs sm:text-sm text-[#cbd5e1] italic mb-3">
                      /{question.quotePhonetic}/
                    </p>

                    <button
                      type="button"
                      onClick={() => speakKannada(question.quoteKannada)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111726] hover:bg-[#d4af37] hover:text-[#0b0f17] text-[#d4af37] text-xs font-semibold border border-[#d4af37]/40 transition-all shadow-sm"
                      aria-label="Listen to dialect clue"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{t.btnListenClue}</span>
                    </button>
                  </div>

                  {/* Detective Linguistic Clue Pill */}
                  <div className="p-3 rounded-xl bg-[#0b0f17] border border-[#1e293b] text-xs text-[#cbd5e1] flex items-center gap-2 mb-6">
                    <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span><strong>{isKn ? 'ಸುಳಿವು: ' : 'Clue: '}</strong>{question.clue}</span>
                  </div>
                </div>

                {/* Multiple Choice Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {question.options.map((option) => {
                    const isSelected = selectedOption === option.id;
                    let btnStyle = 'bg-[#0b0f17] border-[#1e293b] text-[#f8fafc] hover:border-[#d4af37]/50 hover:bg-[#151e2e]';

                    if (isAnswered) {
                      if (option.isCorrect) {
                        btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-300 font-bold';
                      } else if (isSelected && !option.isCorrect) {
                        btnStyle = 'bg-red-950/40 border-red-500 text-red-300 font-bold';
                      } else {
                        btnStyle = 'bg-[#0b0f17]/50 border-[#1e293b] text-[#94a3b8] opacity-50';
                      }
                    }

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleSelectOption(option)}
                        disabled={isAnswered}
                        className={`p-3.5 sm:p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                      >
                        <span>{option.label}</span>
                        {isAnswered && option.isCorrect && (
                          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 shrink-0" />
                        )}
                        {isAnswered && isSelected && !option.isCorrect && (
                          <XCircle className="w-4 sm:w-5 h-4 sm:h-5 text-red-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Answer Explanation & Next Button */}
                {isAnswered && (
                  <div className="p-4 rounded-xl bg-[#0b0f17] border border-[#1e293b] flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
                    <div className="text-xs text-[#cbd5e1]">
                      <strong className="text-[#d4af37] block mb-1">
                        {isKn ? 'ಭಾಷಾ ಸುಳಿವು & ಹಿನ್ನೆಲೆ:' : 'Linguistic Detective Insight:'}
                      </strong>
                      {question.explanation}
                    </div>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#E5A93C] text-[#0b0f17] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shrink-0 shadow-md hover:brightness-110 active:scale-95"
                    >
                      <span>{currentIdx + 1 === questions.length ? t.btnViewResults : t.btnNext}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

              </div>
            ) : (
              /* Results & Celebration Card with Certificate Download */
              <div className="text-center py-5 animate-fade-in">
                <div className="text-5xl mb-2">{earnedBadge.icon}</div>
                <h3 className="text-xl sm:text-3xl font-black text-[#f8fafc] font-serif mb-1">
                  {isKn ? 'ಅಭಿನಂದನೆಗಳು!' : 'Congratulations!'}
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1] mb-5">
                  {isKn 
                    ? `ನೀವು #${roundNumber} ಸುತ್ತಿನಲ್ಲಿ ${questions.length} ಪ್ರಶ್ನೆಗಳಲ್ಲಿ ${score} ಅಂಕ ಗಳಿಸಿದ್ದೀರಿ!` 
                    : `You scored ${score} out of ${questions.length} in Round #${roundNumber}!`}
                </p>

                {/* Badge Certificate Card */}
                <div className="p-6 rounded-2xl bg-[#0b0f17] border border-[#d4af37]/40 max-w-md mx-auto mb-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d4af37]/15 to-transparent pointer-events-none" />
                  
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] block mb-1">
                    {isKn ? 'ಗಳಿಸಿದ ಅಧಿಕೃತ ರಾಯಭಾರಿ ಬಿರುದು' : 'OFFICIAL CERTIFIED BADGE'}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-[#d4af37] font-serif">
                    {earnedBadge.title}
                  </h4>
                  <p className="text-xs text-[#cbd5e1] mt-1.5 font-medium leading-relaxed">
                    {earnedBadge.desc}
                  </p>
                </div>

                {/* Action Buttons: Download Certificate & Play Again */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={downloadCertificate}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#E5A93C] text-[#0b0f17] font-bold text-xs sm:text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isKn ? 'ಪ್ರಮಾಣಪತ್ರ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ (PNG)' : 'Download Certified Badge (PNG)'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={startNewQuiz}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e293b] hover:bg-[#283548] border border-[#334155] text-slate-200 font-semibold text-xs sm:text-sm active:scale-95 transition-all"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>{t.btnPlayAgain}</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* GAME MODE 2: DIALECT MATCHMAKER */}
        {activeGame === 'match' && (
          <div className="max-w-4xl mx-auto bg-[#111726] border border-[#1e293b] rounded-3xl p-5 sm:p-8 shadow-xl animate-fade-in">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1e293b] gap-2 mb-6 text-xs text-[#94a3b8]">
              <div>
                <span className="font-bold text-[#d4af37] text-sm block">
                  {isKn ? 'ನುಡಿ & ಪ್ರಾಂತ್ಯ ಮ್ಯಾಚ್ ಮಾಡಿ' : 'Match the Dialect Term to its Region'}
                </span>
                <span className="text-[11px] text-[#cbd5e1]">
                  {isKn ? 'ಎಡಭಾಗದ ಶಬ್ದವನ್ನು ಆಯ್ಕೆಮಾಡಿ, ಬಲಭಾಗದ ಸರಿಯಾದ ಪ್ರಾಂತ್ಯದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ!' : 'Select a dialect term on the left, then click its matching region on the right!'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-[#0b0f17] px-3 py-1 rounded-full text-[#f8fafc] font-bold border border-[#1e293b]">
                  {isKn ? 'ಅಂಕ: ' : 'Points: '}{matchScore}
                </span>
                <span className="bg-[#0b0f17] px-3 py-1 rounded-full text-[#d4af37] font-bold border border-[#1e293b]">
                  🔥 {isKn ? 'ಸ್ಟ್ರೀಕ್: ' : 'Streak: '}{matchStreak}
                </span>
                <button
                  type="button"
                  onClick={resetMatchGame}
                  className="p-1.5 rounded-lg bg-[#0b0f17] hover:bg-[#1e293b] text-[#94a3b8] hover:text-[#d4af37] border border-[#1e293b]"
                  title="New Match Set"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {matchedPairs.length === matchSet.length ? (
              /* Round Complete Celebration */
              <div className="text-center py-8">
                <Trophy className="w-16 h-16 text-[#d4af37] mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-[#f8fafc] font-serif mb-1">
                  {isKn ? 'ಅದ್ಭುತ! ಎಲ್ಲ ನುಡಿಗಳು ಸರಿಹೊಂದಿವೆ!' : 'Flawless! All Dialects Matched!'}
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1] mb-6">
                  {isKn ? `ನೀವು ಒಟ್ಟು ${matchScore} ಅಂಕ ಗಳಿಸಿದ್ದೀರಿ!` : `You achieved a perfect score of ${matchScore} points!`}
                </p>
                <button
                  type="button"
                  onClick={resetMatchGame}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#E5A93C] text-[#0b0f17] font-bold text-xs sm:text-sm shadow-lg hover:brightness-110 active:scale-95"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>{isKn ? 'ಮುಂದಿನ ಸುತ್ತು ಆಡಿ' : 'Play Next Round'}</span>
                </button>
              </div>
            ) : (
              /* Two Column Match Arena */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Left Column: Dialect Terms */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2">
                    {isKn ? '೧. ಪ್ರಾದೇಶಿಕ ನುಡಿ / ತಿನಿಸು' : '1. Regional Expression / Delicacy'}
                  </h4>
                  {matchSet.map((item) => {
                    const isMatched = matchedPairs.includes(item.id);
                    const isSelected = selectedWord?.id === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleWordClick(item)}
                        disabled={isMatched}
                        className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                          isMatched
                            ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300 opacity-60 cursor-default'
                            : isSelected
                            ? 'bg-[#151e2e] border-[#d4af37] text-[#d4af37] ring-1 ring-[#d4af37]'
                            : 'bg-[#0b0f17] border-[#1e293b] text-[#f8fafc] hover:border-[#d4af37]/40 hover:bg-[#151e2e]'
                        }`}
                      >
                        <div>
                          <span>{item.word}</span>
                          <span className="block text-[11px] text-[#94a3b8] font-normal mt-0.5">{item.note}</span>
                        </div>
                        {isMatched && <Check className="w-4 h-4 text-emerald-400" />}
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Dialect Regions */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2">
                    {isKn ? '೨. ಸೂಕ್ತ ಪ್ರಾಂತ್ಯ / ಉಪಭಾಷಾ ವಲಯ' : '2. Matching Dialect Zone'}
                  </h4>
                  {shuffledRegions.map((regionName, idx) => {
                    const isMatched = matchSet.some(m => m.region === regionName && matchedPairs.includes(m.id));
                    const isSelected = selectedRegion === regionName;

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleRegionClick(regionName)}
                        disabled={isMatched}
                        className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                          isMatched
                            ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300 opacity-60 cursor-default'
                            : isSelected
                            ? 'bg-[#151e2e] border-[#d4af37] text-[#d4af37] ring-1 ring-[#d4af37]'
                            : 'bg-[#0b0f17] border-[#1e293b] text-[#f8fafc] hover:border-[#d4af37]/40 hover:bg-[#151e2e]'
                        }`}
                      >
                        <span>{regionName}</span>
                        {isMatched && <Check className="w-4 h-4 text-emerald-400" />}
                      </button>
                    );
                  })}
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
