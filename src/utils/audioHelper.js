// Web Audio API and Speech Synthesis Helpers for KannadaVaividhya

// Synthesize Kannada Speech with Dialect-Tuned Cadence
export const speakKannada = (text, dialectId = 'mysuru') => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  // Dialect specific audio tuning
  switch (dialectId) {
    case 'mysuru':
      utterance.rate = 0.9;  // Gentle, courteous, melodic
      utterance.pitch = 1.0;
      break;
    case 'north_karnataka':
      utterance.rate = 1.05; // Energetic, rhythmic, fast-cadence
      utterance.pitch = 0.95;
      break;
    case 'karavali':
      utterance.rate = 1.0;  // Musical coastal sing-song lilt
      utterance.pitch = 1.15;
      break;
    case 'kalyana_karnataka':
      utterance.rate = 0.95; // Earthy, expressive
      utterance.pitch = 0.9;
      break;
    case 'bengaluru':
      utterance.rate = 1.1;  // Fast urban tempo
      utterance.pitch = 1.05;
      break;
    default:
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
  }

  // Look for Kannada voice or regional Indian voice
  const voices = window.speechSynthesis.getVoices();
  const kannadaVoice = voices.find(v => v.lang.startsWith('kn') || v.lang.includes('IN') && (v.name.toLowerCase().includes('kannada') || v.name.toLowerCase().includes('india')));
  if (kannadaVoice) {
    utterance.voice = kannadaVoice;
  }
  utterance.lang = 'kn-IN';

  window.speechSynthesis.speak(utterance);
};

// Pure Web Audio API Sound Generator for Interactive UI feedback (Zero external asset dependencies)
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
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
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
