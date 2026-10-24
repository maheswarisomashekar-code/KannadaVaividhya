// Interactive Dialect Detective Trivia & Audio Quiz
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    promptKannada: 'ಈ ಮಾತನ್ನು ಯಾವ ಭಾಗದಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಬಳಸುತ್ತಾರೆ?',
    promptEnglish: 'In which region of Karnataka is this phrase most commonly heard?',
    quoteKannada: '“ಏನ್ರೀ ಆಮ್ಯಾಲೆ? ಬರ್ರಿ, ಊಟ ಮಾಡ್ಲಿಕ್ಕತ್ತೇವಿ, ಒಟ್ಟಿಗೆ ತಿನ್ನೂಣು!”',
    quotePhonetic: '“Eenree aamyale? Barri, oota maadlikkattheevi, ottige thinoonu!”',
    clue: 'Notice the rhythmic marker "-likkattheevi" and respectful "Barri" & "Eenree".',
    options: [
      { id: 'north_karnataka', label: 'North Karnataka (Dharwad / Belagavi)', isCorrect: true },
      { id: 'mysuru', label: 'Old Mysuru / Mandya', isCorrect: false },
      { id: 'karavali', label: 'Coastal / Karavali', isCorrect: false },
      { id: 'bengaluru', label: 'Bengaluru Urban Slang', isCorrect: false }
    ],
    explanation: '“ಮಾಡಲಿಕ್ಕತ್ತೇವೆ” (doing) and “ಆಮ್ಯಾಲೆ” are signature verbal markers of the Dharwad, Belagavi, and Hubballi North Karnataka dialect belt!'
  },
  {
    id: 2,
    promptKannada: '“ಮಾರಾಯ, ಎಲ್ಲಿಗ್ ಪೋಪುದು ನೀವ್ ಇಷ್ಟ್ ಬಿಸೀಲಲ್ಲಿ?” - ಇದು ಯಾವ ಪ್ರಾಂತದ ಶೈಲಿ?',
    promptEnglish: '“Maaraya, ellig poopudu neev isht biseelalli?” - Which dialect family is this?',
    quoteKannada: '“ಮಾರಾಯ, ಎಲ್ಲಿಗ್ ಪೋಪುದು ನೀವ್ ಇಷ್ಟ್ ಬಿಸೀಲಲ್ಲಿ?”',
    quotePhonetic: '“Maaraya, ellig poopudu neev isht biseelalli?”',
    clue: 'Look for "Maaraya" (friend) and "Poopudu" (going).',
    options: [
      { id: 'bengaluru', label: 'Bengaluru Tech Slang', isCorrect: false },
      { id: 'karavali', label: 'Coastal Karnataka (Kundapura / Udupi)', isCorrect: true },
      { id: 'kalyana_karnataka', label: 'Kalyana Karnataka (Kalaburagi)', isCorrect: false },
      { id: 'mysuru', label: 'Mysuru Courtly Kannada', isCorrect: false }
    ],
    explanation: 'The friendly addressing of everyone as “ಮಾರಾಯ” (Maaraya) and verbs like “ಪೋಪುದು/ಬಪ್ಪುದು” are famous hallmarks of Kundapra and Coastal Kannada!'
  },
  {
    id: 3,
    promptKannada: '“ಬೇಜಾನ್ ಟ್ರಾಫಿಕ್ ಗುರು, ಸಿಲ್ಕ್ ಬೋರ್ಡ್ ಹತ್ರ ಸಿಕ್ಕಾಕೊಂಡಿದ್ದೀನಿ!” - ಈ ಮಾತು ಎಲ್ಲಿ ಹೆಚ್ಚು ಪ್ರಸಿದ್ಧ?',
    promptEnglish: '“Beejaan traffic guru, Silk Board hathra sikkaakondiddeeni!” - Where is this iconic?',
    quoteKannada: '“ಬೇಜಾನ್ ಟ್ರಾಫಿಕ್ ಗುರು, ಸಿಲ್ಕ್ ಬೋರ್ಡ್ ಹತ್ರ ಸಿಕ್ಕಾಕೊಂಡಿದ್ದೀನಿ!”',
    quotePhonetic: '“Beejaan traffic guru, Silk Board hathra sikkaakondiddeeni!”',
    clue: 'Mention of "Silk Board", "Beejaan" (huge), and addressing as "Guru".',
    options: [
      { id: 'bengaluru', label: 'Bengaluru Urban Slang', isCorrect: true },
      { id: 'mysuru', label: 'Old Mysuru', isCorrect: false },
      { id: 'north_karnataka', label: 'North Karnataka', isCorrect: false },
      { id: 'kalyana_karnataka', label: 'Kalyana Karnataka', isCorrect: false }
    ],
    explanation: '“ಬೇಜಾನ್” (Beejaan) meaning tremendous or excessive, along with “ಗುರು” (Guru) and Silk Board references, is the textbook Bengaluru urban dialect!'
  },
  {
    id: 4,
    promptKannada: '“ನೀವು ಹೇಳಿದ್ದು ಏಕ್ ದಂ ಬರಾಬರ್ ಅದ ನೋಡಪ್ಪ, ದೋಸ್ತಾ!” - ಇದು ಯಾವ ಪ್ರಾಂತ್ಯದ ನುಡಿ?',
    promptEnglish: '“Neevu heliddu ek dam baraabar ada nodappa, dostha!” - Which region uses this phrasing?',
    quoteKannada: '“ನೀವು ಹೇಳಿದ್ದು ಏಕ್ ದಂ ಬರಾಬರ್ ಅದ ನೋಡಪ್ಪ, ದೋಸ್ತಾ!”',
    quotePhonetic: '“Neevu heliddu ek dam baraabar ada nodappa, dostha!”',
    clue: 'Words like "Baraabar" (exact) and "Dostha" (friend).',
    options: [
      { id: 'karavali', label: 'Coastal Karavali', isCorrect: false },
      { id: 'kalyana_karnataka', label: 'Kalyana Karnataka (Kalaburagi / Bidar)', isCorrect: true },
      { id: 'mysuru', label: 'Mysuru Royal Palace', isCorrect: false },
      { id: 'north_karnataka', label: 'Belagavi Border', isCorrect: false }
    ],
    explanation: '“ಬರಾಬರ್” (Baraabar) and “ದೋಸ್ತಾ” (Dostha) reflect the rich multilingual historical cross-cultural heritage of Hyderabad-Karnataka / Kalyana Karnataka!'
  },
  {
    id: 5,
    promptKannada: '“ಊಟ ಆಯ್ತೇನ್ರೀ? ಸ್ವಲ್ಪ ತಡೀರಿ, ಬರ್ತೀನಿ” - ಈ ಸೌಮ್ಯ ಮತ್ತು ಗೌರವಯುತ ಭಾಷೆ ಯಾರದ್ದು?',
    promptEnglish: '“Oota aaytheenree? Swalpa thadeeri, bartheeni” - Whose courteous tone is this?',
    quoteKannada: '“ಊಟ ಆಯ್ತೇನ್ರೀ? ಸ್ವಲ್ಪ ತಡೀರಿ, ಬರ್ತೀನಿ”',
    quotePhonetic: '“Oota aaytheenree? Swalpa thadeeri, bartheeni”',
    clue: 'Polite elongation, gentle honorific cadence, asking about meals with affection.',
    options: [
      { id: 'mysuru', label: 'Old Mysuru & Mandya (ದಕ್ಷಿಣ ಕರ್ನಾಟಕ)', isCorrect: true },
      { id: 'bengaluru', label: 'Bengaluru Slang', isCorrect: false },
      { id: 'karavali', label: 'Karavali Coastal', isCorrect: false },
      { id: 'kalyana_karnataka', label: 'Kalyana Karnataka', isCorrect: false }
    ],
    explanation: 'Old Mysuru & Mandya Kannada is renowned across Karnataka for its extreme politeness, classical softness, and melodic hospitality!'
  },
  {
    id: 6,
    promptKannada: '“ಚಿಂದಿ ಚಿತ್ರಾನ್ನ ಗುರು!” ಎಂಬ ಬೆಂಗಳೂರು ಸ್ಲ್ಯಾಂಗ್‌ನ ಅರ್ಥವೇನು?',
    promptEnglish: 'What does the famous Bengaluru youth idiom “Chindi Chitranna” signify?',
    quoteKannada: '“ಚಿಂದಿ ಚಿತ್ರಾನ್ನ ಗುರು!”',
    quotePhonetic: '“Chindi Chithraanna Guru!”',
    clue: 'Used when someone does something completely beyond expectations.',
    options: [
      { id: 'opt_lemon_rice', label: 'A spoiled lemon rice dish', isCorrect: false },
      { id: 'opt_epic', label: 'Mind-blowing, epic, or completely phenomenal!', isCorrect: true },
      { id: 'opt_fight', label: 'A noisy street fight', isCorrect: false },
      { id: 'opt_late', label: 'Arriving late to college', isCorrect: false }
    ],
    explanation: 'In Bengaluru colloquialism, “ಚಿಂದಿ” means torn/broken in pieces, but colloquially “ಚಿಂದಿ ಚಿತ್ರಾನ್ನ” means an absolute triumph or mind-blowing hit!'
  }
];

export const BADGES = [
  { threshold: 2, title: 'ಕನ್ನಡ ಪ್ರೇಮಿ (Kannada Enthusiast)', icon: '🌱', desc: 'You appreciate the beauty of Karnataka languages!' },
  { threshold: 4, title: 'ಪ್ರಾದೇಶಿಕ ಪಂಡಿತ (Regional Dialect Explorer)', icon: '🗺️', desc: 'You know your Hubballi from your Kundapura!' },
  { threshold: 6, title: 'ಕವಿರಾಜಮಾರ್ಗ ವಿದ್ವಾಂಸ (Kavirajamarga Master)', icon: '👑', desc: 'Flawless! You carry the linguistic soul of Karnataka!' }
];
