import React, { useState, useRef } from 'react';
import {
  Gamepad2,
  Sparkles,
  Trophy,
  Utensils,
  Drama,
  Volume2,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Award,
  Download,
  Share2,
  ArrowRight,
  Flame,
  Star,
  Check
} from 'lucide-react';
import { speakKannada, soundEffects } from '../utils/audioHelper';
import confetti from 'canvas-confetti';

const triggerConfetti = () => {
  try {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  } catch {}
};

// Helper: Shuffle array in place
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 1. Folk Riddles (ಒಗಟುಗಳು / Ogatugalu) - 12+ Expanded authentic riddles
const FOLK_RIDDLES_DATA = [
  {
    id: 1,
    riddleKn: 'ಮೇಲೆ ಹಸಿರು, ಒಳಗೆ ಕೆಂಪು, ತಿಂದರೆ ಸಿಹಿ, ಉಗುಳಿದರೆ ಬೀಜ — ಇದು ಏನು?',
    riddleEn: 'Green outside, red inside, sweet to eat, seeds to spit — what is it?',
    correctAnswer: 'ಕಲ್ಲಂಗಡಿ (Watermelon)',
    wrongOptions: ['ದಾಳಿಂಬೆ (Pomegranate)', 'ಸೇಬು (Apple)', 'ಮಾವಿನ ಹಣ್ಣು (Mango)'],
    hint: 'ಬೇಸಿಗೆ ಕಾಲದಲ್ಲಿ ಸಿಗುವ ತಂಪಾದ ಹಣ್ಣು!',
    region: 'ಕರಾವಳಿ & ಉತ್ತರ ಕರ್ನಾಟಕ'
  },
  {
    id: 2,
    riddleKn: 'ಮನೆಗೆ ಒಂದೇ ಬಾಗಿಲು, ಒಳಗಡೆ ಸಾವಿರ ಮುತ್ತುಗಳು — ಇದು ಏನು?',
    riddleEn: 'One door to the house, but thousands of pearls inside — what is it?',
    correctAnswer: 'ದಾಳಿಂಬೆ (Pomegranate)',
    wrongOptions: ['ಕಾಯಿ (Coconut)', 'ಕಲ್ಲಂಗಡಿ (Watermelon)', 'ಹಲಸಿನ ಹಣ್ಣು (Jackfruit)'],
    hint: 'ಕೆಂಪು ಬಣ್ಣದ ಕಾಳುಗಳಿರುವ ಪೌಷ್ಟಿಕ ಹಣ್ಣು!',
    region: 'ಹಳೆ ಮೈಸೂರು'
  },
  {
    id: 3,
    riddleKn: 'ಕಾಲು ಇಲ್ಲದೆ ಓಡುತ್ತದೆ, ಕಣ್ಣು ಇಲ್ಲದೆ ಅಳುತ್ತದೆ — ಇದು ಏನು?',
    riddleEn: 'Runs without legs, cries without eyes — what is it?',
    correctAnswer: 'ಮೋಡ (Cloud / Rain)',
    wrongOptions: ['ನದಿ (River)', 'ಗಾಳಿ (Wind)', 'ರೈಲು (Train)'],
    hint: 'ಆಕಾಶದಲ್ಲಿ ಕಪ್ಪಾಗಿ ಬಂದು ಮಳೆ ಸುರಿಸುತ್ತದೆ!',
    region: 'ಮಲೆನಾಡು'
  },
  {
    id: 4,
    riddleKn: 'ಕಪ್ಪು ಕೋಟೆಗೆ ಕೆಂಪು ಬಾಗಿಲು, ಒಳಗೆ ೩೨ ಕಾವಲುಗಾರರು — ಇದು ಏನು?',
    riddleEn: 'A red door with 32 guards inside — what is it?',
    correctAnswer: 'ಬಾಯಿ ಮತ್ತು ಹಲ್ಲುಗಳು (Mouth & Teeth)',
    wrongOptions: ['ಕೋಟೆ ಬಾಗಿಲು', 'ದಾಳಿಂಬೆ ಹಣ್ಣು', 'ತೆಂಗಿನಕಾಯಿ'],
    hint: 'ಪ್ರತಿದಿನ ನಾವು ಮಾತನಾಡಲು ಮತ್ತು ತಿನ್ನಲು ಬಳಸುತ್ತೇವೆ!',
    region: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ'
  },
  {
    id: 5,
    riddleKn: 'ಬೆಳ್ಳಿ ಬಟ್ಟಲಲ್ಲಿ ಚಿನ್ನದ ನಾಣ್ಯ — ಇದು ಏನು?',
    riddleEn: 'A golden coin in a silver plate — what is it?',
    correctAnswer: 'ಆಕಾಶದಲ್ಲಿ ಚಂದ್ರ & ಸೂರ್ಯ (Sun / Moon in Sky)',
    wrongOptions: ['ದೀಪ (Lamp)', 'ಅನ್ನ & ಸಾಂಬಾರ್', 'ಬೆಟ್ಟ'],
    hint: 'ಹಗಲು ಮತ್ತು ರಾತ್ರಿ ಆಕಾಶದಲ್ಲಿ ಕಾಣಿಸುವ ನೈಸರ್ಗಿಕ ಬೆಳಕು!',
    region: 'ಸಮಸ್ತ ಕರ್ನಾಟಕ'
  },
  {
    id: 6,
    riddleKn: 'ಉದ್ದನೆಯ ಮನುಷ್ಯನಿಗೆ ಬಾಲದ ಮೇಲೆ ಬೆಂಕಿ — ಇದು ಏನು?',
    riddleEn: 'A tall man with fire on his head/tail — what is it?',
    correctAnswer: 'ಊದುಬತ್ತಿ / ಬೆಂಕಿಕಡ್ಡಿ (Incense / Matchstick)',
    wrongOptions: ['ದೀಪದ ಕಂಬ', 'ಸಿಲಿಂಡರ್', 'ಮರ'],
    hint: 'ಪೂಜೆಗೆ ಬಳಸುವ ಸುವಾಸನೆಯ ಕಡ್ಡಿ!',
    region: 'ಹಳೆ ಮೈಸೂರು'
  },
  {
    id: 7,
    riddleKn: 'ಹಸಿರು ಅಂಗಿ ತೊಟ್ಟಿದ್ದಾನೆ, ಕಲ್ಲಿನ ಹೃದಯ ಹೊತ್ತಿದ್ದಾನೆ — ಇದು ಏನು?',
    riddleEn: 'Wears a green shirt, carries a heart of stone — what is it?',
    correctAnswer: 'ಮಾವಿನ ಹಣ್ಣು (Mango)',
    wrongOptions: ['ಬಾಳೆಹಣ್ಣು', 'ತೆಂಗಿನಕಾಯಿ', 'ಸೇಬು'],
    hint: 'ಹಣ್ಣುಗಳ ರಾಜ ಎಂದು ಕರೆಯಲ್ಪಡುವ ಬೇಸಿಗೆ ಹಣ್ಣು!',
    region: 'ರಾಮನಗರ & ಕೋಲಾರ'
  },
  {
    id: 8,
    riddleKn: 'ಹಗಲು ಹೊತ್ತು ಮಲಗುತ್ತದೆ, ರಾತ್ರಿ ಹೊತ್ತು ಕಣ್ಣು ಬಿಡುತ್ತದೆ — ಇದು ಏನು?',
    riddleEn: 'Sleeps during the day, opens eyes in the dark — what is it?',
    correctAnswer: 'ಗೂಬೆ (Owl)',
    wrongOptions: ['ಬಾವಲಿ (Bat)', 'ದೀಪ (Lamp)', 'ಬೆಕ್ಕು (Cat)'],
    hint: 'ರಾತ್ರಿ ಹೊತ್ತು ಬೇಟೆಯಾಡುವ ಪಕ್ಷಿ!',
    region: 'ಮಲೆನಾಡು'
  },
  {
    id: 9,
    riddleKn: 'ನಡೆದರೆ ಜೊತೆಗೆ ಬರುತ್ತದೆ, ನಿಂತರೆ ನಿಲ್ಲುತ್ತದೆ, ಕತ್ತಲಲ್ಲಿ ಕಣ್ಮರೆಯಾಗುತ್ತದೆ — ಇದು ಏನು?',
    riddleEn: 'Walks when you walk, stops when you stop, vanishes in the dark — what is it?',
    correctAnswer: 'ನೆರಳು (Shadow)',
    wrongOptions: ['ಗಾಳಿ (Wind)', 'ಪಾದರಕ್ಷೆ', 'ನಾಯಿ'],
    hint: 'ಬೆಳಕಿನಲ್ಲಿ ಸದಾ ನಿಮ್ಮೊಂದಿಗೇ ಇರುವ ಸಂಗಾತಿ!',
    region: 'ಸಮಸ್ತ ಕರ್ನಾಟಕ'
  },
  {
    id: 10,
    riddleKn: 'ನೀರು ಕುಡಿದರೆ ಸಾಯುತ್ತದೆ, ಗಾಳಿ ತಿಂದರೆ ಬದುಕುತ್ತದೆ — ಇದು ಏನು?',
    riddleEn: 'Dies when it drinks water, thrives when it eats air — what is it?',
    correctAnswer: 'ಬೆಂಕಿ (Fire)',
    wrongOptions: ['ದೀಪ (Lamp)', 'ಮರ (Tree)', 'ಮಣ್ಣು (Soil)'],
    hint: 'ಅಡುಗೆ ಮಾಡಲು ಮತ್ತು ಶಾಖಕ್ಕೆ ಬೇಕಾದ ಜ್ವಾಲೆ!',
    region: 'ಉತ್ತರ ಕರ್ನಾಟಕ'
  },
  {
    id: 11,
    riddleKn: 'ಕೈ ಇಲ್ಲ, ಕಾಲು ಇಲ್ಲ, ಆದರೂ ಎಲ್ಲರ ತಲೆ ಮೇಲೆ ಕೂರುತ್ತದೆ — ಇದು ಏನು?',
    riddleEn: 'No hands, no legs, yet sits on everyone’s head — what is it?',
    correctAnswer: 'ಟೋಪಿ / ಮೈಸೂರು ಪೇಟ (Cap / Turban)',
    wrongOptions: ['ಹೂವು (Flower)', 'ಬಟ್ಟೆ', 'ಕನ್ನಡಿ'],
    hint: 'ತಲೆಗೆ ಗೌರವ ಮತ್ತು ರಕ್ಷಣೆ ನೀಡುವ ವಸ್ತ್ರ!',
    region: 'ಹಳೆ ಮೈಸೂರು'
  },
  {
    id: 12,
    riddleKn: 'ಒಂದು ಚಿಕ್ಕ ಗುಡಿಸಲು, ಒಳಗಡೆ ಜೋಡಿ ಕಡಲೆಕಾಳುಗಳು — ಇದು ಏನು?',
    riddleEn: 'A small hut with twins sleeping inside — what is it?',
    correctAnswer: 'ಕಡಲೆಕಾಯಿ (Groundnut)',
    wrongOptions: ['ಮೊಟ್ಟೆ', 'ತೆಂಗಿನಕಾಯಿ', 'ದಾಳಿಂಬೆ'],
    hint: 'ಕಡಲೆಕಾಯಿ ಪರಿಷೆಯಲ್ಲಿ ಸಿಗುವ ಹುರಿದ ಕಾಯಿ!',
    region: 'ಬೆಂಗಳೂರು & ಚಿತ್ರದುರ್ಗ'
  },
  {
    id: 13,
    riddleKn: 'ಮೂರು ಕಣ್ಣುಗಳುಂಟು ಆದರೆ ಶಿವನಲ್ಲ, ಒಳಗೆ ಸಿಹಿ ನೀರುಂಟು ಆದರೆ ನದಿಯಲ್ಲ — ಇದು ಏನು?',
    riddleEn: 'Has three eyes but is not Shiva, filled with sweet water but is not a river — what is it?',
    correctAnswer: 'ತೆಂಗಿನಕಾಯಿ (Coconut)',
    wrongOptions: ['ಕಲ್ಲಂಗಡಿ', 'ಮಡಕೆ', 'ಬಾವಿ'],
    hint: 'ಕರಾವಳಿಯ ಕಲ್ಪವೃಕ್ಷದ ಕಾಯಿ!',
    region: 'ಕರಾವಳಿ'
  },
  {
    id: 14,
    riddleKn: 'ಹಸಿರಾಗಿ ಇರುತ್ತದೆ, ಬಾಯಲ್ಲಿ ಮೆಲ್ಲಿದರೆ ಕೆಂಪಾಗುತ್ತದೆ — ಇದು ಏನು?',
    riddleEn: 'Green to begin with, turns bright red when chewed — what is it?',
    correctAnswer: 'ವೀಳ್ಯದೆಲೆ & ಅಡಿಕೆ (Betel Leaf & Areca nut)',
    wrongOptions: ['ಮೆಣಸಿನಕಾಯಿ', 'ಟೊಮೆಟೊ', 'ದಾಳಿಂಬೆ'],
    hint: 'ಹಬ್ಬ ಹರಿದಿನಗಳಲ್ಲಿ ತಾಂಬೂಲವಾಗಿ ನೀಡುವ ಎಲೆ!',
    region: 'ಮಲೆನಾಡು & ಹಳೆ ಮೈಸೂರು'
  },
  {
    id: 15,
    riddleKn: 'ಎಲ್ಲರಿಗೂ ಸುಂದರ ಬಟ್ಟೆ ಹೊಲಿಯುತ್ತದೆ, ಆದರೆ ತಾನು ಮಾತ್ರ ಸದಾ ಬೆತ್ತಲೆ — ಇದು ಏನು?',
    riddleEn: 'Stitches beautiful clothes for everyone, yet stays naked itself — what is it?',
    correctAnswer: 'ಸೂಜಿ (Needle)',
    wrongOptions: ['ಕತ್ತರಿ (Scissors)', 'ದಾರ (Thread)', 'ಯಂತ್ರ'],
    hint: 'ಬಟ್ಟೆ ಹೊಲಿಯಲು ಬಳಸುವ ಸಣ್ಣ ಲೋಹದ ಸಾಧನ!',
    region: 'ಸಮಸ್ತ ಕರ್ನಾಟಕ'
  },
  {
    id: 16,
    riddleKn: 'ಕಾಲಿಲ್ಲದೆ ಮರ ಏರುತ್ತದೆ, ಬಾಲವಿಲ್ಲದೆ ಇಳಿಯುತ್ತದೆ — ಇದು ಏನು?',
    riddleEn: 'Climbs the tree without legs, slides down without a tail — what is it?',
    correctAnswer: 'ಬಳ್ಳಿ / ಹಾವಿನ ಬಳ್ಳಿ (Vine / Creeper)',
    wrongOptions: ['ಕೋತಿ', 'ಹಕ್ಕಿ', 'ಅಳಿಲು'],
    hint: 'ಮರವನ್ನು ಸುತ್ತಿಕೊಂಡು ಬೆಳೆಯುವ ಹಸಿರು ಸಸ್ಯ!',
    region: 'ಉತ್ತರ ಕನ್ನಡ'
  },
  {
    id: 17,
    riddleKn: 'ಬಾಲ ಹಿಡಿದು ತಿರುಗಿಸಿದರೆ ತಂಪಾದ ನೀರು ಕೊಡುತ್ತದೆ — ಇದು ಏನು?',
    riddleEn: 'Shake its tail up and down, and it gives cool water — what is it?',
    correctAnswer: 'ಕೈಪಂಪು / ಕೊಳವೆಬಾವಿ (Handpump)',
    wrongOptions: ['ಬಕೆಟ್', 'ಹೊಳೆ', 'ಹಗ್ಗ'],
    hint: 'ಹಳ್ಳಿಗಳಲ್ಲಿ ಭೂಮಿಯ ನೀರು ಸೇದಲು ಬಳಸುವ ಯಂತ್ರ!',
    region: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ'
  },
  {
    id: 18,
    riddleKn: 'ಅಜ್ಜಿ ಕುಳಿತಿದ್ದಾಳೆ, ಮೈಯೆಲ್ಲ ಸಾವಿರ ಕಣ್ಣುಗಳು — ಇದು ಏನು?',
    riddleEn: 'Grandma sits quiet, with a thousand eyes across her body — what is it?',
    correctAnswer: 'ಹಿಟ್ಟಿನ ಜರಡಿ (Flour Sieve)',
    wrongOptions: ['ಬುಟ್ಟಿ', 'ಮಂಚ', 'ಬಲೆ'],
    hint: 'ಅಡುಗೆ ಮನೆಯಲ್ಲಿ ಹಿಟ್ಟು ಸೋಸಲು ಬಳಸುವ ಪಾತ್ರೆ!',
    region: 'ಉತ್ತರ ಕರ್ನಾಟಕ'
  }
];

// 2. Karnataka Food & Native District Matching - 16 Diverse Dishes across Karnataka
const FOOD_MATCHES_DATA = [
  { food: 'ಗಿರ್ಮಿಟ್ & ಖಾರದ ಮಿರ್ಚಿ', foodEn: 'Girmit & Spicy Mirchi', district: 'ಧಾರವಾಡ', region: 'ಉತ್ತರ ಕರ್ನಾಟಕ', icon: '🌶️', hint: 'ಮಂಡಕ್ಕಿ, ಈರುಳ್ಳಿ ಒಗ್ಗರಣೆ ಹಾಗೂ ಖಾರದ ಮೆಣಸಿನಕಾಯಿಯಿಂದ ತಯಾರಾಗುವ ಸಂಜೆಯ ತಿನಿಸು!' },
  { food: 'ಅಸಲಿ ತುಪ್ಪದ ಅರಮನೆ ಪಾಕ್', foodEn: 'Royal Ghee Sweet', district: 'ಮೈಸೂರು', region: 'ಹಳೆ ಮೈಸೂರು', icon: '🧈', hint: 'ಅರಮನೆಯ ಅಡುಗೆ ಮನೆ ಕಾಕಾಸುರ ಮಾದಪ್ಪನವರ ಅಸಲಿ ತುಪ್ಪ, ಕಡಲೆಹಿಟ್ಟಿನ ಶಾಹಿ ಸಿಹಿ!' },
  { food: 'ಖೋವಾ ಕುಂದಾ ಮಿಠಾಯಿ', foodEn: 'Khoa Kunda', district: 'ಬೆಳಗಾವಿ', region: 'ಉತ್ತರ ಕರ್ನಾಟಕ', icon: '🍯', hint: 'ಶುದ್ಧ ಕೆನೆ ಹಾಲು ಹಾಗೂ ಸಕ್ಕರೆಯನ್ನು ಕೆಂಪಾಗುವವರೆಗೆ ಕುದಿಸಿ ತಯಾರಿಸುವ ದಟ್ಟ ಸಿಹಿ!' },
  { food: 'ಗರಿಗರಿ ಓಪನ್ ಬೆಣ್ಣೆ ದೋಸೆ', foodEn: 'Crispy Butter Dosa', district: 'ದಾವಣಗೆರೆ', region: 'ಮಧ್ಯ ಕರ್ನಾಟಕ', icon: '🥞', hint: 'ಮಂಡಕ್ಕಿ ರವೆ ಹಾಗೂ ಹಳ್ಳಿಯ ತಾಜಾ ಬೆಣ್ಣೆಯೊಂದಿಗೆ ಹೆಂಚಿನಲ್ಲಿ ಬೇಯಿಸಿದ ಘಮಘಮ ದೋಸೆ!' },
  { food: 'ಗೋಲಿ ಬಜೆ & ಮೃದು ಬನ್ಸ್', foodEn: 'Goli Baje & Soft Buns', district: 'ದಕ್ಷಿಣ ಕನ್ನಡ', region: 'ಕರಾವಳಿ', icon: '🍌', hint: 'ಕರಾವಳಿಯ ಮೈದಾ ಹಾಗೂ ಏಲಕ್ಕಿ ಬಾಳೆಹಣ್ಣಿನ ರುಚಿಕರ ಸಂಜೆಯ ಉಪಹಾರ!' },
  { food: 'ಗರಿಗರಿ ಈರುಳ್ಳಿ ಚಪ್ಪಟೆ ವಡೆ', foodEn: 'Crispy Onion Flat Vade', district: 'ಮಂಡ್ಯ', region: 'ಹಳೆ ಮೈಸೂರು', icon: '🍘', hint: 'ರೈಲ್ವೆ ಪ್ರಯಾಣಿಕರ ಅಚ್ಚುಮೆಚ್ಚಿನ, ಚಿರೋಟಿ ರವೆ ಹಾಗೂ ಈರುಳ್ಳಿಯ ಗರಿಗರಿ ತಿನಿಸು!' },
  { food: 'ಸುಸಲಾ & ಮಾಲ್ಪೂರಿ', foodEn: 'Susala & Malpuri', district: 'ಕಲಬುರಗಿ', region: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ', icon: '🥣', hint: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕದ ಖಡಕ್ ಮಂಡಕ್ಕಿಯ ಒಗ್ಗರಣೆ ಉಪಹಾರ!' },
  { food: 'ಸಜ್ಜಿಗೆ-ಬಜಿ & ನೀರ್ ದೋಸೆ', foodEn: 'Sajjige-Baji & Neer Dosa', district: 'ಉಡುಪಿ', region: 'ಕರಾವಳಿ', icon: '🥥', hint: 'ಕರಾವಳಿಯ ತಿಳಿ ಅಕ್ಕಿ ದೋಸೆ ಹಾಗೂ ಉಪ್ಮಾ-ಶಿರಾ ಜೋಡಿ ಖಾದ್ಯ!' },
  { food: 'ಪಂಡಿ ಕರಿ & ಕಡಂಬು', foodEn: 'Pandi Curry & Kadambuttu', district: 'ಕೊಡಗು', region: 'ಮಲೆನಾಡು', icon: '🍲', hint: 'ಕಚ್ಚಂಪುಳಿ ಹುಳಿ ಹಾಗೂ ಕಾಳುಮೆಣಸಿನೊಂದಿಗೆ ತಯಾರಾಗುವ ಕಾಫಿನಾಡಿನ ಪಾರಂಪರಿಕ ರಸದೌತಣ!' },
  { food: 'ಬಿಸಿ ಅಗಲವಾದ ತಟ್ಟೆ ಇಡ್ಲಿ', foodEn: 'Steamy Thatte Idli', district: 'ತುಮಕೂರು', region: 'ಹಳೆ ಮೈಸೂರು', icon: '⚪', hint: 'ಕ್ಯಾತಸಂದ್ರ ಹಾಗೂ ಹೆದ್ದಾರಿಯ ಬೆಣ್ಣೆ ತೇಲುವ ಮೃದು ತಟ್ಟೆ ಇಡ್ಲಿ!' },
  { food: 'ಖಡಕ್ ಜೋಳದ ರೊಟ್ಟಿ & ಎಣ್ಣೆಗಾಯಿ', foodEn: 'Khadak Jolada Rotti', district: 'ವಿಜಯಪುರ', region: 'ಉತ್ತರ ಕರ್ನಾಟಕ', icon: '🫓', hint: 'ಗುಮ್ಮಟ ನಗರದ ಜೋಳದ ರೊಟ್ಟಿ, ಬಿಸಿ ಎಣ್ಣೆಗಾಯಿ ಬದನೆಕಾಯಿ ಹಾಗೂ ಶೇಂಗಾ ಚಟ್ನಿ!' },
  { food: 'ಕೇಸರಿಬಾತ್ & ಖಾರಾಬಾತ್ (ಚೌ-ಚೌ ಬಾತ್)', foodEn: 'Chow-Chow Bath', district: 'ಬೆಂಗಳೂರು', region: 'ಬೆಂಗಳೂರು', icon: '☕', hint: 'ದರ್ಶಿನಿ ಹೋಟೆಲ್‌ಗಳ ಬೆಳಗಿನ ಸಿಹಿ ಮತ್ತು ಖಾರದ ಐಕಾನಿಕ್ ಜೋಡಿ ತಿಂಡಿ!' },
  { food: 'ಮಲೆನಾಡು ಹಲಸಿನ ಹಣ್ಣಿನ ಕಡುಬು', foodEn: 'Jackfruit Steamed Kadubu', district: 'ಶಿವಮೊಗ್ಗ', region: 'ಮಲೆನಾಡು', icon: '🌿', hint: 'ತೇಗದ ಹಾಗೂ ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಆವಿಯಲ್ಲಿ ಬೇಯಿಸಿದ ಸುವಾಸನೆಯ ಸಿಹಿ ಕಡುಬು!' },
  { food: 'ಖಾರದ ಮಿರ್ಚಿ & ಮಂಡಕ್ಕಿ ಒಗ್ಗರಣೆ', foodEn: 'Ballari Mirchi Mandakki', district: 'ಬಳ್ಳಾರಿ', region: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ', icon: '🔥', hint: 'ಬಿಸಿಲ ನಗರಿಯ ಬಿಸಿಬಿಸಿ ಎಣ್ಣೆ ಬಜ್ಜಿ ಹಾಗೂ ಗರಿಗರಿ ಮಂಡಕ್ಕಿ ಮಿಕ್ಸ್!' },
  { food: 'ಎಳ್ಳುಂಡೆ & ರಾಗಿ ಮುದ್ದೆ ನಾಟಿಕೋಳಿ', foodEn: 'Ragi Mudde & Saaru', district: 'ಹಾಸನ', region: 'ಹಳೆ ಮೈಸೂರು', icon: '🌾', hint: 'ಹೊಯ್ಸಳ ನಾಡಿನ ರಾಗಿ ಕಣಜದ ಗಂಡುಮೆಟ್ಟಿನ ಆಹಾರ!' },
  { food: 'ಸಜ್ಜೆ ರೊಟ್ಟಿ & ಗುರೆಳ್ಳು ಚಟ್ನಿ', foodEn: 'Sajje Rotti & Chutney', district: 'ಬಾಗಲಕೋಟೆ', region: 'ಉತ್ತರ ಕರ್ನಾಟಕ', icon: '🥗', hint: 'ಬಾದಾಮಿ-ಐಹೊಳೆ ನೆಲದ ಪೌಷ್ಟಿಕ ಸಿರಿಧಾನ್ಯದ ರೊಟ್ಟಿ ಊಟ!' }
];

// 3. Dialect Roleplay Scenarios
const ROLEPLAY_SCENARIOS = [
  {
    id: 'auto_bengaluru',
    title: 'ನಮ್ಮ ಬೆಂಗಳೂರು ಆಟೋ ಸವಾರಿ',
    titleEn: 'Bengaluru Auto Ride Negotiation',
    avatar: '🛺',
    situation: 'ನೀವು ಮೆಜೆಸ್ಟಿಕ್‌ನಿಂದ ಇಂದಿರಾನಗರಕ್ಕೆ ಆಟೋ ಹತ್ತಲು ನಿಂತಿದ್ದೀರಿ. ಡ್ರೈವರ್: "ಬಾಸ್, ಒನ್-ಅಂಡ್-ಹಾಫ್ ಆಗ್ತದೆ, ಮೀಟರ್ ಇಲ್ಲ!" ಅಂತ ಹೇಳ್ತಾರೆ. ನೀವು ಏನು ಹೇಳ್ತೀರಿ?',
    situationEn: 'You are at Majestic wanting to reach Indiranagar. The driver says: "Boss, one-and-half fare, no meter!" What do you say?',
    options: [
      {
        text: '“ಸ್ವಲ್ಪ ಅಡ್ಜಸ್ಟ್ ಮಾಡಿ ಬಾಸ್! ಒನ್-ಅಂಡ್-ಹಾಫ್ ಬೇಡ, ಕರೆಕ್ಟ್ ಮೀಟರ್ ಹಾಕಿ ಗುರು, ಜಿಪೇ ಮಾಡ್ತೀನಿ!”',
        phonetic: 'Swalpa adjust maadi boss! One-and-half beda, correct meter haaki guru, GPay maadtheeni!',
        isBest: true,
        feedback: '🔥 ಅಬ್ಬಾ! ಪಕ್ಕಾ ಬೆಂಗಳೂರು ಯುವ ಶೈಲಿ! ಡ್ರೈವರ್ ಖುಷಿಯಿಂದ ಒಪ್ಪಿಕೊಂಡು ಮೀಟರ್ ಹಾಕಿದ್ರು!',
        score: 100
      },
      {
        text: '“Please sir, why extra money? Take normal meter please!”',
        phonetic: 'English argument',
        isBest: false,
        feedback: '❌ ಡ್ರೈವರ್ "ಹೋಗಿ ಬಾಸ್, ನನ್ಗೆ ಬಾಡಿಗೆ ಸಿಗುತ್ತೆ" ಅಂತ ಹೊರಟುಬಿಟ್ರು!',
        score: 20
      },
      {
        text: '“ಮಾರಾಯ, ಒಂತೆ ಕಮ್ಮಿ ಮಾಡ್ಲೆ, ಇಷ್ಟ್ ದುಡ್ಡು ಕೊಟ್ರೆ ನಂಗೆ ಹೆಂಗೆ ಬಪ್ಪ?”',
        phonetic: 'Karavali in Bangalore',
        isBest: false,
        feedback: '⚠️ ಡ್ರೈವರ್ ಅರ್ಥ ಮಾಡ್ಕೊಂಡ್ರು, ಆದ್ರೆ "ಇದು ಕರಾವಳಿ ಅಲ್ಲ ಕಣ್ರೀ" ಅಂತ ನಕ್ಕರು!',
        score: 50
      }
    ]
  },
  {
    id: 'tea_dharwad',
    title: 'ಉತ್ತರ ಕರ್ನಾಟಕ ಚಹಾ ಅಂಗಡಿ',
    titleEn: 'Dharwad Special Chahaa Ordering',
    avatar: '☕',
    situation: 'ಹುಬ್ಬಳ್ಳಿ-ಧಾರವಾಡದ ಹಳೆಯ ಬಸ್ ಸ್ಟ್ಯಾಂಡ್ ಹತ್ತಿರ ಚಹಾ ಅಂಗಡಿಗೆ ಹೋದ್ರಿ. ಅಂಗಡಿಯವರು: "ಏನ್ರೀ ಸಾಹೇಬ್ರ, ಏನ್ ತಗೋತೀರಿ?" ಅಂತ ಕೇಳ್ತಾರೆ. ನಿಮ್ಮ ಉತ್ತರ?',
    situationEn: 'At a Dharwad tea stall, the vendor asks: "Eenree saahebra, what will you have?" Your reply?',
    options: [
      {
        text: '“ಏ ಪಾ, ಒಂದು ಗ್ಲಾಸ್ ಕಡಕ್ ಸ್ಪೆಷಲ್ ಚಹಾ ಮಾಡ್ರಿಪಾ! ಜರಾ ಲಗೂನ್ ಕೊಡ್ರಿ!”',
        phonetic: 'Ee paa, ondu glass kadak special chahaa maadripaa! Jaraa lagoon kodree!',
        isBest: true,
        feedback: '🔥 ಚಿಂದಿ ಉತ್ತರ! ಅಂಗಡಿಯವರು "ತಗೋರಿಪಾ ಬಿಸಿ ಬಿಸಿ ಕಡಕ್ ಚಹಾ!" ಅಂತ ಪ್ರೀತಿಯಿಂದ ಕೊಟ್ರು!',
        score: 100
      },
      {
        text: '“ಒಂದು ಕಪ್ ಕಾಫಿ ಕೊಡಿ ಸ್ವಾಮಿ, ಸಕ್ಕರೆ ಕಡಿಮೆ ಇರಲಿ.”',
        phonetic: 'Mysore tone in Hubballi',
        isBest: false,
        feedback: '⚠️ ಉತ್ತರ ಕರ್ನಾಟಕದ ಚಹಾ ಜಾಗದಲ್ಲಿ ಮೈಸೂರು ಕಾಫಿ ಕೇಳಿದ್ರೆ ಹೆಂಗೆ? ಸ್ವಲ್ಪ ಲೋಕಲ್ ಶೈಲಿ ಬಳಸಿ!',
        score: 40
      },
      {
        text: '“Give one ginger tea fast.”',
        phonetic: 'English plain',
        isBest: false,
        feedback: '❌ ಆತ್ಮೀಯತೆ ಇಲ್ಲದೆ ಮಾತಾಡಿದ್ರೆ ಧ್ವನಿ ಸಪ್ಪೆ ಅನಿಸುತ್ತೆ!',
        score: 20
      }
    ]
  },
  {
    id: 'breakfast_udupi',
    title: 'ಕರಾವಳಿ ಹೋಟೆಲ್‌ನಲ್ಲಿ ಉಪಹಾರ',
    titleEn: 'Udupi-Kundapra Breakfast Ordering',
    avatar: '🥞',
    situation: 'ಉಡುಪಿಯ ಪಾರಂಪರಿಕ ಹೋಟೆಲ್‌ನಲ್ಲಿ ಭಟ್ರು ಬಂದು: "ಎಂತ ಮಾರಾಯ ಸಮಾಚಾರ? ಬೆಳಿಗ್ಗೆ ತಿಂಡಿಗೆ ಎಂತ ತರ್ಲಿ ಬಪ್ಪ?" ಅಂತ ಕೇಳ್ತಾರೆ. ನೀವು ಏನು ಆರ್ಡರ್ ಮಾಡ್ತೀರಿ?',
    situationEn: 'At an authentic coastal hotel, Bhatru asks: "Entha maaraya, what breakfast shall I bring?" What do you order?',
    options: [
      {
        text: '“ಮಾರಾಯ, ಒಂದು ಪ್ಲೇಟ್ ಬಿಸಿ ಸಜ್ಜಿಗೆ-ಬಜಿ ಮತ್ತು ನೀರ್ ದೋಸೆ ಕೊಡ್ಲೆ ಬಪ್ಪ! ಘಮ ಘಮ ಅಂತಿದೆ!”',
        phonetic: 'Maaraya, ondu plate bisi sajjige-baji mathu neer dosa kodle bappa! Ghama ghama anthidhe!',
        isBest: true,
        feedback: '🔥 ಅಬ್ಬಾ! ಕರಾವಳಿ ಭಾಷಾ ಪ್ರೇಮ ನೋಡಿ ಭಟ್ರು ಎಕ್ಸ್ಟ್ರಾ ಚಟ್ನಿ ಹಾಕಿ ಬಿಸಿ ಬಿಸಿ ಸಜ್ಜಿಗೆ ತಂದ್ರು!',
        score: 100
      },
      {
        text: '“ಒಂದು ಪ್ಲೇಟ್ ಜೋಳದ ರೊಟ್ಟಿ ಮತ್ತು ಎಣ್ಣೆಗಾಯಿ ಬದನೆಕಾಯಿ ಕೊಡ್ರಿ!”',
        phonetic: 'North food in Coast',
        isBest: false,
        feedback: '⚠️ ಕರಾವಳಿ ಹೋಟೆಲ್‌ನಲ್ಲಿ ಜೋಳದ ರೊಟ್ಟಿ ಇರಲ್ಲ ಮಾರಾಯ! ನೀರ್ ದೋಸೆ ಕೇಳಿ!',
        score: 40
      },
      {
        text: '“One plate idli sambar please.”',
        phonetic: 'Plain order',
        isBest: false,
        feedback: '❌ ಸ್ಥಳೀಯ ಸೊಗಡು ಇಲ್ಲದ ಸಾಮಾನ್ಯ ಆರ್ಡರ್!',
        score: 30
      }
    ]
  }
];

export default function DialectArcade({ lang = 'kn', onSelectRegion, onNavigate }) {
  const isKn = lang === 'kn';
  const [activeTab, setActiveTab] = useState('riddles'); // 'riddles' | 'foodmatch' | 'roleplay' | 'passport'

  const ALL_DISTRICTS = [
    'ಧಾರವಾಡ', 'ಮೈಸೂರು', 'ಬೆಳಗಾವಿ', 'ದಾವಣಗೆರೆ', 'ದಕ್ಷಿಣ ಕನ್ನಡ', 'ಮಂಡ್ಯ',
    'ಕಲಬುರಗಿ', 'ಉಡುಪಿ', 'ಕೊಡಗು', 'ತುಮಕೂರು', 'ವಿಜಯಪುರ', 'ಬೆಂಗಳೂರು',
    'ಶಿವಮೊಗ್ಗ', 'ಬಳ್ಳಾರಿ', 'ಹಾಸನ', 'ಬಾಗಲಕೋಟೆ'
  ];

  // Dynamic Shuffled Riddle state - Never same sequence!
  const [riddlesList, setRiddlesList] = useState(() => {
    return shuffle(FOLK_RIDDLES_DATA).map((item) => ({
      ...item,
      options: shuffle([item.correctAnswer, ...item.wrongOptions])
    }));
  });
  const [riddleIndex, setRiddleIndex] = useState(0);
  const [selectedRiddleOption, setSelectedRiddleOption] = useState(null);
  const [riddleScore, setRiddleScore] = useState(0);
  const [showRiddleHint, setShowRiddleHint] = useState(false);

  // Dynamic Shuffled Food match state - 16 diverse dishes randomized!
  const [foodList, setFoodList] = useState(() => shuffle(FOOD_MATCHES_DATA));
  const [foodCurrentIndex, setFoodCurrentIndex] = useState(0);
  const [foodScore, setFoodScore] = useState(0);
  const [foodSelectedDistrict, setFoodSelectedDistrict] = useState(null);
  const [foodFeedback, setFoodFeedback] = useState(null);

  // Roleplay state
  const [roleplayIndex, setRoleplayIndex] = useState(0);
  const [selectedRoleplayChoice, setSelectedRoleplayChoice] = useState(null);
  const [roleplayScore, setRoleplayScore] = useState(0);

  // Passport state
  const [passportName, setPassportName] = useState('ಕನ್ನಡ ಪ್ರೇಮಿ');
  const [passportDistrict, setPassportDistrict] = useState('ಮೈಸೂರು');
  const [passportDialect, setPassportDialect] = useState('ಹಳೆ ಮೈಸೂರು');
  const [passportMotto, setPassportMotto] = useState('ಎಲ್ಲಾದರೂ ಇರು, ಎಂತಾದರೂ ಇರು, ಎಂದೆಂದಿಗೂ ನೀ ಕನ್ನಡವಾಗಿರು');
  const [passportAvatar, setPassportAvatar] = useState('👑');
  const [passportDownloaded, setPassportDownloaded] = useState(false);

  // Current Active Items
  const currRiddle = riddlesList[riddleIndex] || riddlesList[0];
  const currFood = foodList[foodCurrentIndex] || foodList[0];
  const currRoleplay = ROLEPLAY_SCENARIOS[roleplayIndex];

  // Dynamically compute 8 random district options for each dish (always includes correct district in random position)
  const dynamicDistrictOptions = React.useMemo(() => {
    if (!currFood) return ALL_DISTRICTS.slice(0, 8);
    const otherDistricts = ALL_DISTRICTS.filter((d) => d !== currFood.district);
    const shuffledOthers = shuffle(otherDistricts).slice(0, 7);
    return shuffle([currFood.district, ...shuffledOthers]);
  }, [currFood]);

  // Riddle Handler
  const handleRiddleAnswer = (selectedOpt) => {
    if (selectedRiddleOption !== null) return;
    setSelectedRiddleOption(selectedOpt);
    if (selectedOpt === currRiddle.correctAnswer) {
      setRiddleScore((prev) => prev + 10);
      soundEffects.playSuccess();
      triggerConfetti();
    } else {
      soundEffects.playIncorrect();
    }
  };

  const nextRiddle = () => {
    setSelectedRiddleOption(null);
    setShowRiddleHint(false);
    if (riddleIndex + 1 >= riddlesList.length) {
      // Re-shuffle dynamically when round is finished!
      setRiddlesList(
        shuffle(FOLK_RIDDLES_DATA).map((item) => ({
          ...item,
          options: shuffle([item.correctAnswer, ...item.wrongOptions])
        }))
      );
      setRiddleIndex(0);
    } else {
      setRiddleIndex((prev) => prev + 1);
    }
  };

  // Food Match Handler
  const handleFoodDistrictPick = (districtName) => {
    if (foodSelectedDistrict !== null) return;
    setFoodSelectedDistrict(districtName);
    if (districtName === currFood.district) {
      setFoodScore((prev) => prev + 15);
      setFoodFeedback({ correct: true, text: `ಅದ್ಭುತ! ${currFood.food} — ${currFood.district}ಯ ಪಾರಂಪರಿಕ ಖಾದ್ಯ!` });
      soundEffects.playSuccess();
      triggerConfetti();
    } else {
      setFoodFeedback({ correct: false, text: `ಅಯ್ಯೋ! ${currFood.food} ಇರುವುದು ${currFood.district}ಯಲ್ಲಿ!` });
      soundEffects.playIncorrect();
    }
  };

  const nextFoodMatch = () => {
    setFoodSelectedDistrict(null);
    setFoodFeedback(null);
    if (foodCurrentIndex + 1 >= foodList.length) {
      // Re-shuffle dynamically when round is finished!
      setFoodList(shuffle(FOOD_MATCHES_DATA));
      setFoodCurrentIndex(0);
    } else {
      setFoodCurrentIndex((prev) => prev + 1);
    }
  };

  // Roleplay Handler
  const handleRoleplayChoice = (choice) => {
    setSelectedRoleplayChoice(choice);
    if (choice.isBest) {
      setRoleplayScore((prev) => prev + choice.score);
      soundEffects.playSuccess();
      triggerConfetti();
    } else {
      soundEffects.playIncorrect();
    }
  };

  const nextRoleplay = () => {
    setSelectedRoleplayChoice(null);
    setRoleplayIndex((prev) => (prev + 1) % ROLEPLAY_SCENARIOS.length);
  };

  const downloadPassport = () => {
    setPassportDownloaded(true);
    soundEffects.playSuccess();
    triggerConfetti();
    setTimeout(() => setPassportDownloaded(false), 3000);
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* 1. Header Banner */}
      <section className="relative overflow-hidden rounded-3xl classic-card p-6 sm:p-8 border border-[#D4AF37]/40 bg-gradient-to-r from-[#0d1322] via-[#11192d] to-[#0d1322] shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1D21] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold mb-3">
              <Gamepad2 className="w-4 h-4 text-[#D4AF37]" />
              <span>{isKn ? 'ನುಡಿ ಕ್ರೀಡಾಂಗಣ • ಕನ್ನಡ ಗೇಮಿಂಗ್ ಕಾರ್ನರ್' : 'Dialect Arcade • Gaming & Cultural Play'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#F1F3F5] font-serif-kn tracking-tight">
              {isKn ? 'ನುಡಿ ಆಟಗಳು & ಸಾಂಸ್ಕೃತಿಕ ಮೋಜು' : 'Kannada Dialect Arcade & Games'}
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] mt-1 max-w-xl">
              {isKn 
                ? 'ಒಗಟು ಬಿಡಿಸಿ, ಸ್ಥಳೀಯ ತಿಂಡಿಗಳನ್ನು ಮ್ಯಾಚ್ ಮಾಡಿ, ಪ್ರಾದೇಶಿಕ ಭಾಷೆಯಲ್ಲಿ ಆಟೋ ಡ್ರೈವರ್ ಅಥವಾ ಹೋಟೆಲ್ ಭಟ್ರೊಂದಿಗೆ ಚರ್ಚಿಸಿ!'
                : 'Solve age-old folk riddles, match iconic dishes to districts, and roleplay in authentic regional dialects!'}
            </p>
          </div>

          {/* Quick Total Score Pill */}
          <div className="flex items-center gap-3 bg-[#0b0f17] border border-[#D4AF37]/40 px-4 py-3 rounded-2xl shrink-0 shadow-lg">
            <Trophy className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <span className="text-[10px] text-[#94a3b8] uppercase font-bold tracking-wider block">
                {isKn ? 'ನಿಮ್ಮ ಒಟ್ಟು ಅಂಕ' : 'Total Score'}
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#D4AF37]">
                {riddleScore + foodScore + roleplayScore} pts
              </span>
            </div>
          </div>
        </div>

        {/* Arcade Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-[#1e293b]">
          <button
            type="button"
            onClick={() => setActiveTab('riddles')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'riddles'
                ? 'bg-[#D4AF37] text-[#0C0D0E] shadow-lg shadow-[#D4AF37]/20 scale-105'
                : 'bg-[#131c30] text-[#cbd5e1] hover:text-white border border-[#1e293b]'
            }`}
          >
            <span>🧩</span>
            <span>{isKn ? 'ಒಗಟು ಬಿಡಿಸಿ (Riddles)' : 'Folk Riddles'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('foodmatch')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'foodmatch'
                ? 'bg-[#D4AF37] text-[#0C0D0E] shadow-lg shadow-[#D4AF37]/20 scale-105'
                : 'bg-[#131c30] text-[#cbd5e1] hover:text-white border border-[#1e293b]'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>{isKn ? 'ತಿಂಡಿ & ಜಿಲ್ಲೆ ಮ್ಯಾಚಿಂಗ್' : 'Foodie Faceoff'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('roleplay')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'roleplay'
                ? 'bg-[#D4AF37] text-[#0C0D0E] shadow-lg shadow-[#D4AF37]/20 scale-105'
                : 'bg-[#131c30] text-[#cbd5e1] hover:text-white border border-[#1e293b]'
            }`}
          >
            <Drama className="w-3.5 h-3.5" />
            <span>{isKn ? 'ಸಂಭಾಷಣೆ ರೋಲ್‌ಪ್ಲೇ (RPG)' : 'Dialect Roleplay'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('passport')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'passport'
                ? 'bg-[#D4AF37] text-[#0C0D0E] shadow-lg shadow-[#D4AF37]/20 scale-105'
                : 'bg-[#131c30] text-[#cbd5e1] hover:text-white border border-[#1e293b]'
            }`}
          >
            <span>🪪</span>
            <span>{isKn ? 'ರಾಯಭಾರಿ ಪಾಸ್‌ಪೋರ್ಟ್' : 'Digital Passport ID'}</span>
          </button>
        </div>
      </section>

      {/* 2. TAB CONTENT: 🧩 Folk Riddles (ಒಗಟುಗಳು) */}
      {activeTab === 'riddles' && (
        <div className="classic-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#1e293b]">
            <div className="flex items-center gap-2">
              <span className="text-xl">🧩</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] font-serif-kn">
                  {isKn ? 'ಹಳ್ಳಿಯ ಜಾನಪದ ಒಗಟುಗಳು' : 'Traditional Karnataka Folk Riddles'}
                </h3>
                <span className="text-xs text-[#94a3b8]">
                  ಒಗಟು #{riddleIndex + 1} / {riddlesList.length} • {currRiddle.region}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setRiddlesList(
                    shuffle(FOLK_RIDDLES_DATA).map((item) => ({
                      ...item,
                      options: shuffle([item.correctAnswer, ...item.wrongOptions])
                    }))
                  );
                  setRiddleIndex(0);
                  setSelectedRiddleOption(null);
                  setShowRiddleHint(false);
                }}
                className="px-3 py-1.5 rounded-xl bg-[#0b0f17] hover:bg-[#1a2642] text-[#cbd5e1] border border-[#1e293b] text-xs font-semibold flex items-center gap-1.5 transition-all"
                title="ಹೊಸ ಒಗಟುಗಳನ್ನು ಷಫಲ್ ಮಾಡಿ"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{isKn ? 'ಹೊಸ ಒಗಟುಗಳು (ಷಫಲ್)' : 'Shuffle Riddles'}</span>
              </button>

              <button
                type="button"
                onClick={() => speakKannada(currRiddle.riddleKn)}
                className="px-3 py-1.5 rounded-xl bg-[#0b0f17] hover:bg-[#D4AF37] hover:text-[#0b0f17] text-[#D4AF37] border border-[#1e293b] text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{isKn ? 'ಒಗಟು ಆಲಿಸಿ' : 'Hear Riddle'}</span>
              </button>
            </div>
          </div>

          {/* Riddle Card */}
          <div className="p-6 rounded-2xl bg-[#0b0f17] border border-[#D4AF37]/40 text-center space-y-3">
            <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block">
              {isKn ? 'ಒಗಟಿನ ಪ್ರಶ್ನೆ' : 'Riddle Clue'}
            </span>
            <p className="text-xl sm:text-2xl font-black text-[#f8fafc] font-serif-kn leading-relaxed">
              "{currRiddle.riddleKn}"
            </p>
            <p className="text-xs text-[#94a3b8] italic">
              "{currRiddle.riddleEn}"
            </p>
          </div>

          {/* Hint Section */}
          <div className="flex justify-center">
            {showRiddleHint ? (
              <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium animate-fadeIn">
                💡 <strong>ಸುಳಿವು (Hint):</strong> {currRiddle.hint}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowRiddleHint(true)}
                className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>💡 ಸುಳಿವು ಬೇಕೆ? (Show Hint)</span>
              </button>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {(currRiddle.options || []).map((option, idx) => {
              const isSelected = selectedRiddleOption === option;
              const isCorrect = option === currRiddle.correctAnswer;
              let btnStyle = 'bg-[#131c30] hover:bg-[#1a2642] border-[#1e293b] text-[#cbd5e1]';

              if (selectedRiddleOption !== null) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/50';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-red-950/80 border-red-500 text-red-200';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={selectedRiddleOption !== null}
                  onClick={() => handleRiddleAnswer(option)}
                  className={`p-4 rounded-xl border text-sm sm:text-base font-bold text-left transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span className="font-serif-kn">{option}</span>
                  {selectedRiddleOption !== null && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {selectedRiddleOption !== null && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Next */}
          {selectedRiddleOption !== null && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#1e293b] animate-fadeIn">
              <div>
                {selectedRiddleOption === currRiddle.correctAnswer ? (
                  <span className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>ಅದ್ಭುತ! ಸರಿಯಾದ ಉತ್ತರ! (+10 pts)</span>
                  </span>
                ) : (
                  <span className="text-red-400 font-bold text-sm flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" />
                    <span>ತಪ್ಪು ಉತ್ತರ! ಸರಿಯಾದ ಉತ್ತರ: {currRiddle.correctAnswer}</span>
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={nextRiddle}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#e6be44] text-[#0C0D0E] font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md self-end"
              >
                <span>ಮುಂದಿನ ಒಗಟು (Next Riddle)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* 3. TAB CONTENT: 🍲 Food & District Matching */}
      {activeTab === 'foodmatch' && (
        <div className="classic-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#1e293b]">
            <div className="flex items-center gap-2">
              <span className="text-xl">🍲</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] font-serif-kn">
                  {isKn ? 'ಕರ್ನಾಟಕ ತಿಂಡಿ & ಜಿಲ್ಲೆ ಮ್ಯಾಚಿಂಗ್' : 'Karnataka Food & District Matchmaker'}
                </h3>
                <span className="text-xs text-[#94a3b8]">
                  ತಿಂಡಿ #{foodCurrentIndex + 1} / {foodList.length} • {currFood.region}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setFoodList(shuffle(FOOD_MATCHES_DATA));
                  setFoodCurrentIndex(0);
                  setFoodSelectedDistrict(null);
                  setFoodFeedback(null);
                }}
                className="px-3 py-1.5 rounded-xl bg-[#0b0f17] hover:bg-[#1a2642] text-[#cbd5e1] border border-[#1e293b] text-xs font-semibold flex items-center gap-1.5 transition-all"
                title="ಹೊಸ ತಿಂಡಿಗಳನ್ನು ಷಫಲ್ ಮಾಡಿ"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{isKn ? 'ಹೊಸ ತಿಂಡಿಗಳು (ಷಫಲ್)' : 'Shuffle Dishes'}</span>
              </button>

              <span className="text-xs font-bold text-[#D4AF37] px-3 py-1.5 rounded-xl bg-[#1A1D21] border border-[#D4AF37]/30">
                ಫುಡ್ ಸ್ಕೋರ್: {foodScore} pts
              </span>
            </div>
          </div>

          {/* Target Dish Spotlight */}
          <div className="p-6 rounded-2xl bg-[#0b0f17] border border-[#D4AF37]/50 text-center space-y-2">
            <span className="text-4xl block mb-2">{currFood.icon}</span>
            <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block">
              ಈ ಪ್ರಸಿದ್ಧ ಖಾದ್ಯ ಯಾವ ಜಿಲ್ಲೆಗೆ ಸೇರಿದ್ದು?
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-[#f8fafc] font-serif-kn">
              "{currFood.food}"
            </h4>
            <p className="text-xs text-[#94a3b8] italic">
              ({currFood.foodEn}) • {currFood.hint}
            </p>

            <button
              type="button"
              onClick={() => speakKannada(`${currFood.food}, ${currFood.hint}`)}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#111726] hover:bg-[#D4AF37] hover:text-[#0b0f17] text-[#D4AF37] text-xs font-semibold border border-[#1e293b]"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>ತಿಂಡಿ ಮಾಹಿತಿ ಆಲಿಸಿ</span>
            </button>
          </div>

          {/* District Choices */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#cbd5e1] block">
              ಸರಿಯಾದ ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {dynamicDistrictOptions.map((district, idx) => {
                const isSelected = foodSelectedDistrict === district;
                const isCorrect = district === currFood.district;
                let btnStyle = 'bg-[#131c30] hover:bg-[#1a2642] border-[#1e293b] text-[#cbd5e1]';

                if (foodSelectedDistrict !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/50';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-red-950/80 border-red-500 text-red-200';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={foodSelectedDistrict !== null}
                    onClick={() => handleFoodDistrictPick(district)}
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-bold text-center transition-all ${btnStyle}`}
                  >
                    {district}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback & Next */}
          {foodFeedback && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#1e293b] animate-fadeIn">
              <span className={`font-bold text-sm ${foodFeedback.correct ? 'text-emerald-400' : 'text-red-400'}`}>
                {foodFeedback.text} {foodFeedback.correct ? '(+15 pts)' : ''}
              </span>

              <button
                type="button"
                onClick={nextFoodMatch}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#e6be44] text-[#0C0D0E] font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md self-end"
              >
                <span>ಮುಂದಿನ ತಿಂಡಿ (Next Dish)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* 4. TAB CONTENT: 🎭 Dialect Roleplay (ಸಂಭಾಷಣೆ RPG) */}
      {activeTab === 'roleplay' && (
        <div className="classic-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#1e293b]">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎭</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] font-serif-kn">
                  {currRoleplay.title}
                </h3>
                <span className="text-xs text-[#94a3b8]">
                  ಸನ್ನಿವೇಶ #{roleplayIndex + 1} / {ROLEPLAY_SCENARIOS.length}
                </span>
              </div>
            </div>

            <span className="text-xs font-bold text-[#D4AF37] px-3 py-1 rounded-full bg-[#1A1D21] border border-[#D4AF37]/30">
              ರೋಲ್‌ಪ್ಲೇ ಸ್ಕೋರ್: {roleplayScore} pts
            </span>
          </div>

          {/* Situation Box */}
          <div className="p-5 rounded-2xl bg-[#0b0f17] border border-[#D4AF37]/40 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currRoleplay.avatar}</span>
              <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">
                ನೈಜ ಪರಿಸ್ಥಿತಿ ಸನ್ನಿವೇಶ (Real Situation)
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold text-[#f8fafc] font-serif-kn leading-relaxed">
              {currRoleplay.situation}
            </p>
            <p className="text-xs text-[#94a3b8] italic">
              {currRoleplay.situationEn}
            </p>
          </div>

          {/* Dialogue Choices */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#cbd5e1] block">
              ನಿಮ್ಮ ನುಡಿ ಸಂಭಾಷಣೆ ಆಯ್ಕೆಮಾಡಿ (Pick your dialogue):
            </span>
            {currRoleplay.options.map((opt, idx) => {
              const isSelected = selectedRoleplayChoice === opt;

              let btnStyle = 'bg-[#131c30] hover:bg-[#1a2642] border-[#1e293b] text-[#cbd5e1]';
              if (selectedRoleplayChoice !== null) {
                if (opt.isBest) {
                  btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/50';
                } else if (isSelected && !opt.isBest) {
                  btnStyle = 'bg-red-950/80 border-red-500 text-red-200';
                }
              }

              return (
                <div key={idx} className="space-y-2">
                  <button
                    type="button"
                    disabled={selectedRoleplayChoice !== null}
                    onClick={() => handleRoleplayChoice(opt)}
                    className={`w-full p-4 rounded-xl border text-sm sm:text-base font-bold text-left transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                  >
                    <div>
                      <p className="font-serif-kn">{opt.text}</p>
                      <span className="text-[11px] text-[#94a3b8] block mt-1">/{opt.phonetic}/</span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakKannada(opt.text);
                      }}
                      className="p-1.5 rounded-lg bg-[#0b0f17] hover:bg-[#D4AF37] hover:text-[#0b0f17] text-[#D4AF37] shrink-0"
                      title="ಆಲಿಸಿ"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </button>

                  {selectedRoleplayChoice === opt && (
                    <div className={`p-3 rounded-xl text-xs font-bold ${opt.isBest ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-500/30' : 'bg-red-950/50 text-red-300 border border-red-500/30'} animate-fadeIn`}>
                      {opt.feedback}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          {selectedRoleplayChoice !== null && (
            <div className="flex justify-end pt-4 border-t border-[#1e293b]">
              <button
                type="button"
                onClick={nextRoleplay}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#e6be44] text-[#0C0D0E] font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md"
              >
                <span>ಮುಂದಿನ ಸನ್ನಿವೇಶ (Next Scenario)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* 5. TAB CONTENT: 🪪 Digital Passport Maker */}
      {activeTab === 'passport' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Customizer Controls */}
          <div className="classic-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#1e293b]">
              <span className="text-xl">🪪</span>
              <div>
                <h3 className="text-lg font-bold text-[#f8fafc] font-serif-kn">
                  {isKn ? 'ನಿಮ್ಮ ಕನ್ನಡ ರಾಯಭಾರಿ ಪಾಸ್‌ಪೋರ್ಟ್ ರೂಪಿಸಿ' : 'Customize Your Kannada Ambassador Passport'}
                </h3>
                <span className="text-xs text-[#94a3b8]">
                  ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ನೆಚ್ಚಿನ ಪ್ರಾಂತ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ
                </span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#cbd5e1] block mb-1">
                ನಿಮ್ಮ ಹೆಸರು (Your Name):
              </label>
              <input
                type="text"
                value={passportName}
                onChange={(e) => setPassportName(e.target.value)}
                className="w-full bg-[#0b0f17] border border-[#1e293b] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-sm text-[#f8fafc] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-[#cbd5e1] block mb-1">
                  ಸ್ಥಳೀಯ ಜಿಲ್ಲೆ (District):
                </label>
                <select
                  value={passportDistrict}
                  onChange={(e) => setPassportDistrict(e.target.value)}
                  className="w-full bg-[#0b0f17] border border-[#1e293b] focus:border-[#D4AF37] rounded-xl px-3 py-2 text-xs text-[#f8fafc] focus:outline-none"
                >
                  {['ಮೈಸೂರು', 'ಧಾರವಾಡ', 'ಬೆಂಗಳೂರು', 'ದಕ್ಷಿಣ ಕನ್ನಡ', 'ಕಲಬುರಗಿ', 'ಬೆಳಗಾವಿ', 'ಉಡುಪಿ', 'ಶಿವಮೊಗ್ಗ', 'ಹಾಸನ', 'ಮಂಡ್ಯ'].map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#cbd5e1] block mb-1">
                  ನೆಚ್ಚಿನ ಉಪಭಾಷೆ (Dialect):
                </label>
                <select
                  value={passportDialect}
                  onChange={(e) => setPassportDialect(e.target.value)}
                  className="w-full bg-[#0b0f17] border border-[#1e293b] focus:border-[#D4AF37] rounded-xl px-3 py-2 text-xs text-[#f8fafc] focus:outline-none"
                >
                  {['ಹಳೆ ಮೈಸೂರು', 'ಉತ್ತರ ಕರ್ನಾಟಕ', 'ಕರಾವಳಿ ಕನ್ನಡ', 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ', 'ನಮ್ಮ ಬೆಂಗಳೂರು'].map((dl) => (
                    <option key={dl} value={dl}>{dl}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#cbd5e1] block mb-1">
                ರಾಜ್ಯೋತ್ಸವ ನುಡಿ (Motto):
              </label>
              <select
                value={passportMotto}
                onChange={(e) => setPassportMotto(e.target.value)}
                className="w-full bg-[#0b0f17] border border-[#1e293b] focus:border-[#D4AF37] rounded-xl px-3 py-2 text-xs text-[#f8fafc] focus:outline-none"
              >
                <option value="ಎಲ್ಲಾದರೂ ಇರು, ಎಂತಾದರೂ ಇರು, ಎಂದೆಂದಿಗೂ ನೀ ಕನ್ನಡವಾಗಿರು">
                  ಎಲ್ಲಾದರೂ ಇರು, ಎಂತಾದರೂ ಇರು, ಎಂದೆಂದಿಗೂ ನೀ ಕನ್ನಡವಾಗಿರು
                </option>
                <option value="ಹೆಸರಾಯಿತು ಕರ್ನಾಟಕ, ಉಸಿರಾಗಲಿ ಕನ್ನಡ">
                  ಹೆಸರಾಯಿತು ಕರ್ನಾಟಕ, ಉಸಿರಾಗಲಿ ಕನ್ನಡ
                </option>
                <option value="ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ">
                  ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ
                </option>
                <option value="ಬಾರಿಸು ಕನ್ನಡ ಡಿಂಡಿಮವ, ಓ ಕರ್ನಾಟಕ ಹೃದಯ ಶಿವ">
                  ಬಾರಿಸು ಕನ್ನಡ ಡಿಂಡಿಮವ, ಓ ಕರ್ನಾಟಕ ಹೃದಯ ಶಿವ
                </option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#cbd5e1] block mb-1">
                ಲಾಂಛನ (Avatar Symbol):
              </label>
              <div className="flex gap-2">
                {['👑', '🚩', '🐘', '🦚', '🪔', '🦁'].map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => setPassportAvatar(av)}
                    className={`w-10 h-10 rounded-xl text-lg flex items-center justify-center border transition-all ${
                      passportAvatar === av ? 'bg-[#D4AF37] border-[#D4AF37] scale-110' : 'bg-[#0b0f17] border-[#1e293b]'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Passport Card Preview */}
          <div className="space-y-4">
            <div className="relative rounded-3xl p-6 sm:p-7 border-2 border-[#D4AF37] bg-gradient-to-br from-[#0e1628] via-[#121c32] to-[#0a0f1c] shadow-2xl overflow-hidden text-[#f8fafc]">
              {/* Karnataka Ribbon Accent Top Border */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-red-500 to-yellow-400" />
              <div className="absolute top-3 right-4 opacity-15 pointer-events-none text-8xl">👑</div>

              <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl">{passportAvatar}</span>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                      ಕರ್ನಾಟಕ ಸರ್ಕಾರ • ಡಿಜಿಟಲ್ ನಾವೀನ್ಯತೆ ೨೦೨೬
                    </span>
                    <h4 className="text-base font-black font-serif-kn text-[#f8fafc]">
                      ಕನ್ನಡ ಪ್ರಾದೇಶಿಕ ರಾಯಭಾರಿ ಗುರುತುಪತ್ರ
                    </h4>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] font-bold">
                  VERIFIED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-5 text-xs">
                <div className="bg-[#0b0f17]/70 p-3 rounded-xl border border-white/[0.06]">
                  <span className="text-[10px] text-[#94a3b8] uppercase block">ರಾಯಭಾರಿ ಹೆಸರು</span>
                  <span className="font-bold text-[#D4AF37] text-sm font-serif-kn mt-0.5 block">{passportName}</span>
                </div>
                <div className="bg-[#0b0f17]/70 p-3 rounded-xl border border-white/[0.06]">
                  <span className="text-[10px] text-[#94a3b8] uppercase block">ಪ್ರತಿನಿಧಿ ಜಿಲ್ಲೆ</span>
                  <span className="font-bold text-[#f8fafc] text-sm mt-0.5 block">{passportDistrict}</span>
                </div>
                <div className="bg-[#0b0f17]/70 p-3 rounded-xl border border-white/[0.06]">
                  <span className="text-[10px] text-[#94a3b8] uppercase block">ಮೆಚ್ಚಿನ ಉಪಭಾಷೆ</span>
                  <span className="font-bold text-[#f8fafc] text-sm mt-0.5 block">{passportDialect}</span>
                </div>
                <div className="bg-[#0b0f17]/70 p-3 rounded-xl border border-white/[0.06]">
                  <span className="text-[10px] text-[#94a3b8] uppercase block">ಮಾನ್ಯತೆ ದಿನಾಂಕ</span>
                  <span className="font-bold text-[#f8fafc] text-sm mt-0.5 block">ರಾಜ್ಯೋತ್ಸವ ೨೦೨೬</span>
                </div>
              </div>

              {/* Motto Box */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-[#D4AF37]/40 text-center">
                <p className="text-xs font-bold text-[#D4AF37] font-serif-kn">
                  "{passportMotto}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#1e293b] text-[10px] text-[#94a3b8]">
                <span>ID: KN-AMB-2026-{Math.floor(Math.random() * 89999 + 10000)}</span>
                <span className="text-[#D4AF37] font-semibold">ಕನ್ನಡ ವೈವಿಧ್ಯ • ಡಿಜಿಟಲ್ ಹೆಮ್ಮೆ</span>
              </div>
            </div>

            <button
              type="button"
              onClick={downloadPassport}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#e6be44] text-[#0C0D0E] font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              {passportDownloaded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ಪಾಸ್‌ಪೋರ್ಟ್ ಯಶಸ್ವಿಯಾಗಿ ಸಿದ್ಧವಾಯಿತು! 🎉</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>ಪಾಸ್‌ಪೋರ್ಟ್ ಡೌನ್‌ಲೋಡ್ / ಉಳಿಸಿ (Save Passport)</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
