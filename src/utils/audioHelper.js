// Web Audio API and Speech Synthesis Helpers for KannadaVaividhya

let activeAudioElement = null;

// Clean text for speech synthesis
function sanitizeKannadaText(text) {
  if (!text) return '';
  return text
    .replace(/["“”'()]/g, '')
    .replace(/[–—]/g, ' ')
    .trim();
}

// Speak Kannada using multi-tier strategy (Native Audio Stream -> Web Speech Synthesis fallback)
export const speakKannada = (text, dialectId = 'mysuru') => {
  if (!text) return;
  const clean = sanitizeKannadaText(text);

  // Play subtle UI click feedback so user knows the button was clicked
  soundEffects.playClick();

  // Rate & pitch adjustments per dialect
  let speedRate = 1.0;
  switch (dialectId) {
    case 'mysuru': speedRate = 0.92; break;
    case 'north_karnataka': speedRate = 1.08; break;
    case 'karavali': speedRate = 1.0; break;
    case 'kalyana_karnataka': speedRate = 0.95; break;
    case 'bengaluru': speedRate = 1.1; break;
    default: speedRate = 1.0;
  }

  // Tier 1: Try Native High-Definition Kannada Speech Stream (Google TTS Endpoint)
  // This produces genuine native Kannada pronunciation on any OS (even if Windows lacks Kannada voice)
  try {
    if (activeAudioElement) {
      activeAudioElement.pause();
      activeAudioElement.currentTime = 0;
      activeAudioElement = null;
    }

    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(clean)}&tl=kn&client=tw-ob`;
    const audio = new Audio(ttsUrl);
    audio.playbackRate = speedRate;
    activeAudioElement = audio;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Playing successfully
        })
        .catch((err) => {
          console.warn('HTML5 Audio play was blocked or failed, falling back to Web Speech Synthesis:', err);
          fallbackToSpeechSynthesis(clean, dialectId);
        });
      return;
    }
  } catch (e) {
    console.warn('HTML5 Audio exception, trying SpeechSynthesis fallback:', e);
  }

  // Tier 2: Fallback to Browser SpeechSynthesis
  fallbackToSpeechSynthesis(clean, dialectId);
};

// Fallback: Browser Web Speech API
function fallbackToSpeechSynthesis(cleanText, dialectId) {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  try {
    window.speechSynthesis.resume();
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);

    switch (dialectId) {
      case 'mysuru':
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        break;
      case 'north_karnataka':
        utterance.rate = 1.05;
        utterance.pitch = 0.95;
        break;
      case 'karavali':
        utterance.rate = 1.0;
        utterance.pitch = 1.1;
        break;
      case 'kalyana_karnataka':
        utterance.rate = 0.95;
        utterance.pitch = 0.9;
        break;
      case 'bengaluru':
        utterance.rate = 1.1;
        utterance.pitch = 1.05;
        break;
      default:
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
    }

    const voices = window.speechSynthesis.getVoices();
    const kannadaVoice = voices.find(
      v => v.lang.startsWith('kn') || v.lang.toLowerCase().includes('kannada')
    );
    const indianVoice = voices.find(
      v => v.lang.includes('IN') || v.lang.includes('hi')
    );

    if (kannadaVoice) {
      utterance.voice = kannadaVoice;
      utterance.lang = 'kn-IN';
    } else if (indianVoice) {
      utterance.voice = indianVoice;
      utterance.lang = indianVoice.lang;
    } else {
      utterance.lang = 'kn-IN';
    }

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('SpeechSynthesis error:', err);
  }
}

// Pure Web Audio API Sound Generator for Interactive UI feedback
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio tone error:', e);
    }
  }

  playSuccess() {
    this.playTone(523.25, 'sine', 0.1); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.1), 100); // E5
    setTimeout(() => this.playTone(783.99, 'sine', 0.25), 200); // G5
  }

  playIncorrect() {
    this.playTone(330, 'triangle', 0.15);
    setTimeout(() => this.playTone(260, 'sawtooth', 0.2), 120);
  }

  playClick() {
    this.playTone(600, 'sine', 0.05);
  }
}

export const soundEffects = new SoundFX();
