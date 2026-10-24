// Interactive Dialect Detective Trivia & Audio Quiz Bank (24+ Questions)
export const ALL_QUIZ_QUESTIONS = [
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
      { id: 'karavali', label: 'Coastal Karnataka (Kundapura / Udupi)', isCorrect: true },
      { id: 'bengaluru', label: 'Bengaluru Tech Slang', isCorrect: false },
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
      { id: 'kalyana_karnataka', label: 'Kalyana Karnataka (Kalaburagi / Bidar)', isCorrect: true },
      { id: 'karavali', label: 'Coastal Karavali', isCorrect: false },
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
      { id: 'opt_epic', label: 'Mind-blowing, epic, or completely phenomenal!', isCorrect: true },
      { id: 'opt_lemon_rice', label: 'A spoiled lemon rice dish', isCorrect: false },
      { id: 'opt_fight', label: 'A noisy street fight', isCorrect: false },
      { id: 'opt_late', label: 'Arriving late to college', isCorrect: false }
    ],
    explanation: 'In Bengaluru colloquialism, “ಚಿಂದಿ” means torn/broken in pieces, but colloquially “ಚಿಂದಿ ಚಿತ್ರಾನ್ನ” means an absolute triumph or mind-blowing hit!'
  },
  {
    id: 7,
    promptKannada: 'ಉತ್ತರ ಕರ್ನಾಟಕದಲ್ಲಿ “ಗಿರ್ಮಿಟ್” ಎಂದರೆ ಏನು?',
    promptEnglish: 'In North Karnataka, what does the word “Girmit” refer to?',
    quoteKannada: '“ಸಂಜೆ ಮುಂದ ಧಾರವಾಡದಾಗ ಗಿರ್ಮಿಟ್-ಮಿರ್ಚಿ ತಿನ್ನೂಣು ಬರ್ರಿ!”',
    quotePhonetic: '“Sanje munda Dharwad-daaga Girmit-mirchi thinoonu barree!”',
    clue: 'A legendary street-food evening delicacy made with puffed rice.',
    options: [
      { id: 'opt_snack', label: 'A tangy, spicy masala puffed-rice (mandakki) street snack', isCorrect: true },
      { id: 'opt_sweet', label: 'A sweet milk dessert like pedha', isCorrect: false },
      { id: 'opt_vehicle', label: 'A three-wheeler local transport vehicle', isCorrect: false },
      { id: 'opt_game', label: 'A rural kabaddi tournament', isCorrect: false }
    ],
    explanation: '“ಗಿರ್ಮಿಟ್” (Girmit) is the undisputed king of evening street food in Hubballi-Dharwad, prepared with puffed rice, tomato, wet masala, and roasted gram!'
  },
  {
    id: 8,
    promptKannada: 'ಕರಾವಳಿಯ ಕುಂದಾಪ್ರ ಕನ್ನಡದಲ್ಲಿ “ಬರಿ ಬಿಸಿ ಕೂಡು” ಎಂದರೆ ಏನು?',
    promptEnglish: 'What does the coastal Kundapra phrase “Bari bisi koodu” mean?',
    quoteKannada: '“ಮಾರಾಯ, ಬರಿ ಬಿಸಿ ಕೂಡು ಉಂಡು ಹೊರಡು!”',
    quotePhonetic: '“Maaraya, bari bisi koodu undu horadu!”',
    clue: 'In coastal households, "Koodu" refers to the staple cooked grain.',
    options: [
      { id: 'opt_rice', label: 'Fresh piping-hot boiled rice (ಊಟ/ಅನ್ನ)', isCorrect: true },
      { id: 'opt_tea', label: 'Hot spicy herbal tea', isCorrect: false },
      { id: 'opt_sun', label: 'Scorching hot afternoon sun', isCorrect: false },
      { id: 'opt_blanket', label: 'A warm woolen winter shawl', isCorrect: false }
    ],
    explanation: 'In Kundapura & Karavali Kannada, “ಕೂಡು” (Koodu) means cooked rice. “ಬರಿ ಬಿಸಿ ಕೂಡು ತಿನ್ರಿ” is the classic warm coastal invitation to eat hot freshly cooked food!'
  },
  {
    id: 9,
    promptKannada: '“ಹಾಫ್ ಬೈ ಟೂ” (Half-by-Two) ಎಂಬ ಪದ ಎಲ್ಲಿಂದ ಹುಟ್ಟಿಕೊಂಡಿತು?',
    promptEnglish: 'Where did the iconic culture of ordering “Half-by-Two” originate?',
    quoteKannada: '“ಬಾಸ್, ಎರಡು ಹಾಫ್ ಬೈ ಟೂ ಕಾಫಿ ಕೊಡಿ!”',
    quotePhonetic: '“Boss, eradu half-by-two coffee kodi!”',
    clue: 'Ordering one tumbler of filter coffee split into two cups for friends.',
    options: [
      { id: 'bengaluru', label: 'Bengaluru Darshinis & Brahmin Cafes', isCorrect: true },
      { id: 'mysuru', label: 'Mysore Palace Canteen', isCorrect: false },
      { id: 'karavali', label: 'Mangalore Fishery Harbor', isCorrect: false },
      { id: 'north_karnataka', label: 'Belagavi Border Tea Stall', isCorrect: false }
    ],
    explanation: '“ಹಾಫ್ ಬೈ ಟೂ ಕಾಫಿ” (Half-by-Two) is Bengaluru\'s beloved student & darshini institution—splitting a strong filter coffee tumbler equally between two companions!'
  },
  {
    id: 10,
    promptKannada: '“ಖರೇ ಹೇಳಾಕತ್ತೀನಿ, ಕಾಯ್ ಸುಳ್ಳು ಹೇಳಿಲ್ಲ!” - ಇಲ್ಲಿ “ಖರೇ” ಪದದ ಅರ್ಥವೇನು?',
    promptEnglish: 'In Kalyana Karnataka Kannada, what does “Kharee” mean in “Kharee helakattheeni”?',
    quoteKannada: '“ಖರೇ ಹೇಳಾಕತ್ತೀನಿ, ಕಾಯ್ ಸುಳ್ಳು ಹೇಳಿಲ್ಲ!”',
    quotePhonetic: '“Kharee helaakattheeni, kaay sullu helilla!”',
    clue: 'Opposite of "Sullu" (lie).',
    options: [
      { id: 'opt_truth', label: 'The absolute truth / genuine fact (ಸತ್ಯ/ನಿಜ)', isCorrect: true },
      { id: 'opt_loudly', label: 'Speaking in an angry, high pitch', isCorrect: false },
      { id: 'opt_secret', label: 'A hidden confidential secret', isCorrect: false },
      { id: 'opt_yesterday', label: 'Something that happened yesterday', isCorrect: false }
    ],
    explanation: '“ಖರೇ” (Khare) in North & Kalyana Karnataka means 100% genuine truth (*Satya*). It stems from historical Deccani and classical regional vocabulary!'
  },
  {
    id: 11,
    promptKannada: 'ಮೈಸೂರು ಪ್ರಾಂತ್ಯದಲ್ಲಿ “ಅಡ್ಡಿಯಿಲ್ಲ ಬಿಡಿ” ಎಂದು ಹೇಳಿದರೆ ಏನು ಭಾವನೆ?',
    promptEnglish: 'What sentiment is conveyed by the Mysuru phrase “Addiyilla bidi”?',
    quoteKannada: '“ಅಡ್ಡಿಯಿಲ್ಲ ಬಿಡಿ, ನಾವೇ ಮಾಡಿಕೊಳ್ತೀವಿ, ನೀವು ಚಿಂತೆ ಮಾಡಬೇಡಿ.”',
    quotePhonetic: '“Addiyilla bidi, naave maadikoltheevi, neevu chinthe maadabedi.”',
    clue: 'Polite reassurance relieving the other person of burden.',
    options: [
      { id: 'opt_reassure', label: '“No trouble at all, please do not worry; it is totally fine.”', isCorrect: true },
      { id: 'opt_blocked', label: 'The road ahead is completely blocked', isCorrect: false },
      { id: 'opt_angry', label: 'Extreme frustration and anger', isCorrect: false },
      { id: 'opt_hurry', label: 'Telling someone to run very fast', isCorrect: false }
    ],
    explanation: '“ಅಡ್ಡಿಯಿಲ್ಲ ಬಿಡಿ” exemplifies the quintessential Mysore courtly politeness, assuring someone that their request or delay causes zero inconvenience.'
  },
  {
    id: 12,
    promptKannada: '“ತಡಿ ಮಾರಾಯ, ಒಂದು ನಿಮಿಷ!” - ಇಲ್ಲಿ “ಮಾರಾಯ” ಎಂಬ ಸಂಬೋಧನೆಯ ಅರ್ಥವೇನು?',
    promptEnglish: 'In coastal Kannada, what does the affectionate address “Maaraya” mean?',
    quoteKannada: '“ತಡಿ ಮಾರಾಯ, ಒಂದು ನಿಮಿಷ!”',
    quotePhonetic: '“Thadi maaraya, ondu nimisha!”',
    clue: 'Used to address any friend, peer, or companion with warmth.',
    options: [
      { id: 'opt_friend', label: 'My friend / Good fellow / Buddy (ಸ್ನೇಹಿತ / ಗೆಳೆಯ)', isCorrect: true },
      { id: 'opt_stranger', label: 'An unwelcome intruder', isCorrect: false },
      { id: 'opt_teacher', label: 'A school headmaster', isCorrect: false },
      { id: 'opt_ghost', label: 'A mystical forest spirit', isCorrect: false }
    ],
    explanation: '“ಮಾರಾಯ” (Maaraya) is Karavali\'s favorite term of endearment, roughly equivalent to "my friend" or "mate" in coastal everyday banter!'
  },
  {
    id: 13,
    promptKannada: 'ಬೆಂಗಳೂರು ಆಟೋ ಚಾಲಕರೊಂದಿಗೆ ಮಾತನಾಡುವಾಗ “ಮೀಟರ್ ಮೇಲೆ ಒನ್-ಅಂಡ್-ಹಾಫ್” ಎಂದರೆ ಏನು?',
    promptEnglish: 'In Bengaluru auto slang, what does “One-and-a-Half” mean?',
    quoteKannada: '“ಬಾಸ್, ನೈಟ್ ಹನ್ನೊಂದು ಗಂಟೆ ಆಯ್ತು, ಒನ್-ಅಂಡ್-ಹಾಫ್ ಆಗುತ್ತೆ!”',
    quotePhonetic: '“Boss, night eleven o\'clock aaythu, one-and-half aagutthe!”',
    clue: 'Commonly requested fare multiplier during late nights or rain.',
    options: [
      { id: 'opt_fare', label: '1.5x the standard meter fare for late-night or return travel', isCorrect: true },
      { id: 'opt_passenger', label: 'Traveling with one adult and one child', isCorrect: false },
      { id: 'opt_speed', label: 'Driving at 1.5 times the speed limit', isCorrect: false },
      { id: 'opt_route', label: 'Taking a 1.5 kilometer detour', isCorrect: false }
    ],
    explanation: '“ಒನ್-ಅಂಡ್-ಹಾಫ್” (One-and-a-Half) is the iconic Bangalore fare rule where night travel (10 PM to 5 AM) or specific long rides incur 50% above the meter!'
  },
  {
    id: 14,
    promptKannada: '“ಕಾಯಕವೇ ಕೈಲಾಸ” ಎಂಬ ಮಹಾನ್ ಸಂದೇಶವನ್ನು ನೀಡಿದ ಶರಣರು ಯಾರು?',
    promptEnglish: 'Who gave the profound message “Kayakave Kailasa” in Kannada heritage?',
    quoteKannada: '“ಕಾಯಕವೇ ಕೈಲಾಸ — ನಿಷ್ಠೆಯ ದುಡಿಮೆಯೇ ಮೋಕ್ಷದ ದಾರಿ”',
    quotePhonetic: '“Kayakave Kailasa — Nishtheya dudimeye mokshada daari”',
    clue: 'The 12th-century social reformer from Kalyana Karnataka / Basavana Bagewadi.',
    options: [
      { id: 'opt_basava', label: 'Jagadjyothi Basaveshwara (ಬಸವಣ್ಣ)', isCorrect: true },
      { id: 'opt_kuvempu', label: 'Kuvempu', isCorrect: false },
      { id: 'opt_bendre', label: 'Da. Ra. Bendre', isCorrect: false },
      { id: 'opt_kanaka', label: 'Kanakadasa', isCorrect: false }
    ],
    explanation: 'Lord Basaveshwara of the 12th-century Sharana movement established “ಕಾಯಕವೇ ಕೈಲಾಸ” (Work is Worship) at Anubhava Mantapa in Basavakalyana!'
  },
  {
    id: 15,
    promptKannada: 'ಉತ್ತರ ಕರ್ನಾಟಕದಲ್ಲಿ ಹಿರಿಯರನ್ನು ಗೌರವದಿಂದ ಕರೆಯಲು ಬಳಸುವ ಪ್ರತ್ಯಯ ಯಾವುದು?',
    promptEnglish: 'Which respectful suffix is constantly appended in North Karnataka sentences?',
    quoteKannada: '“ಬರ್ರಿ, ಕೂತ್ಕೊಳ್ರಿ, ಚಹಾ ಕುಡೀರಿ, ಹೆಂಗದೀರಿ?”',
    quotePhonetic: '“Barree, koothkolree, chahaa kudeeree, hengadeeree?”',
    clue: 'Repeated at the end of nearly every respectful imperative verb.',
    options: [
      { id: 'opt_ri', label: '“-ರೀ” (-ri / -ree) added to verbs and greetings', isCorrect: true },
      { id: 'opt_da', label: '“-ಡ” (-da)', isCorrect: false },
      { id: 'opt_ge', label: '“-ಗೆ” (-ge)', isCorrect: false },
      { id: 'opt_nu', label: '“-ನು” (-nu)', isCorrect: false }
    ],
    explanation: 'In Dharwad and North Karnataka, “-ರೀ” (such as ಬರ್ರಿ, ಮಾಡ್ರಿ, ಕೇಳ್ರಿ, ಏನ್ರೀ) is the quintessential rhythm of deep familial and social respect!'
  },
  {
    id: 16,
    promptKannada: 'ಕರಾವಳಿಯ ಯಕ್ಷಗಾನ ಕಲೆಯ ಪ್ರಮುಖ ಶೈಲಿಗಳು (ತಿಟ್ಟುಗಳು) ಯಾವುವು?',
    promptEnglish: 'What are the two prominent stylistic traditions of coastal Yakshagana?',
    quoteKannada: '“ಕರಾವಳಿಯ ವೀರ ಕಲೆ ಯಕ್ಷಗಾನದ ಎರಡು ಪ್ರಮುಖ ತಿಟ್ಟುಗಳು”',
    quotePhonetic: '“Karavaliya veera kale Yakshaganada eradu pramukha thittugalu”',
    clue: 'One from the north coast (Kundapura/Uttara Kannada) and one from the south (Mangaluru/Udupi).',
    options: [
      { id: 'opt_thittu', label: 'Badagu Thittu (ಬಡಗು ತಿಟ್ಟು) & Thenku Thittu (ತೆಂಕು ತಿಟ್ಟು)', isCorrect: true },
      { id: 'opt_geethe', label: 'Bhavageethe & Janapada', isCorrect: false },
      { id: 'opt_natya', label: 'Bharatanatyam & Kathakali', isCorrect: false },
      { id: 'opt_dolu', label: 'Dollu & Kamsale', isCorrect: false }
    ],
    explanation: 'Coastal Yakshagana is split into “ಬಡಗು ತಿಟ್ಟು” (Northern coastal school with vibrant costumes) and “ತೆಂಕು ತಿಟ್ಟು” (Southern coastal school with high pirouettes)!'
  }
];

export const BADGES = [
  { threshold: 2, title: 'ಕನ್ನಡ ಪ್ರೇಮಿ (Kannada Enthusiast)', icon: '🌱', desc: 'You appreciate the beauty of Karnataka languages!' },
  { threshold: 4, title: 'ಪ್ರಾದೇಶಿಕ ಪಂಡಿತ (Regional Dialect Explorer)', icon: '🗺️', desc: 'You know your Hubballi from your Kundapura!' },
  { threshold: 5, title: 'ಕವಿರಾಜಮಾರ್ಗ ವಿದ್ವಾಂಸ (Kavirajamarga Master)', icon: '👑', desc: 'Flawless! You carry the linguistic soul of Karnataka!' }
];

// Helper: Shuffle array in place (Fisher-Yates)
function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Select 'count' random non-repeating questions, with shuffled options
export function getRandomQuizSet(count = 5, previousQuestionIds = []) {
  // Prefer questions not in previous set if possible
  let available = ALL_QUIZ_QUESTIONS.filter(q => !previousQuestionIds.includes(q.id));
  if (available.length < count) {
    available = [...ALL_QUIZ_QUESTIONS];
  }

  const shuffledPool = shuffleArray(available);
  const selected = shuffledPool.slice(0, count);

  // Also shuffle options for each selected question
  return selected.map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
}
