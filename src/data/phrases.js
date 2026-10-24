// Comprehensive Multi-Dialect Cross-Translation Matrix for Karnataka
export const CATEGORIES = [
  { id: 'all', label: 'All Situations', kannadaLabel: 'ಎಲ್ಲ ಸನ್ನಿವೇಶಗಳು' },
  { id: 'greetings', label: 'Greetings & Enquiries', kannadaLabel: 'ಕುಶಲೋಪರಿ' },
  { id: 'travel', label: 'Auto & Travel', kannadaLabel: 'ಪ್ರಯಾಣ & ಆಟೋ' },
  { id: 'food', label: 'Food & Dining', kannadaLabel: 'ಊಟ & ಉಪಹಾರ' },
  { id: 'work', label: 'Work & Daily Life', kannadaLabel: 'ಕೆಲಸ & ದಿನಚರಿ' },
  { id: 'slang', label: 'Slang & Fun Expressions', kannadaLabel: 'ಉದ್ಗಾರ & ಸ್ಲ್ಯಾಂಗ್' },
];

export const PHRASES = [
  {
    id: 1,
    category: 'greetings',
    standardEnglish: 'How are you? Is everyone at home doing well?',
    standardKannada: 'ನೀವು ಹೇಗಿದ್ದೀರಾ? ಮನೆಯಲ್ಲಿ ಎಲ್ಲರೂ ಆರಾಮಾಗಿದ್ದಾರಾ?',
    transliteration: 'Neevu hegiddeera? Maneyalli ellaroo aaraamagiddaaraa?',
    variants: {
      mysuru: {
        text: 'ಹೇಗಿದ್ದೀರಾರೀ? ಮನೆಯಲ್ಲಿ ಎಲ್ಲರೂ ಚೆನ್ನಾಗಿದ್ದಾರಾ?',
        phonetic: 'Hegiddeeraari? Maneyalli ellaroo chennaagiddaaraa?',
        note: 'Polite honorific tone with respectful vowel elongation.'
      },
      north_karnataka: {
        text: 'ಏನ್ರೀ ಸಮಾಚಾರ? ಆರಾಮ ಅದೀರೇನು? ಮನೇಮಂದಿ ಎಲ್ಲಾ ಸುಖದಾಗಿದ್ದಾರೇನು?',
        phonetic: 'Eenree samachaara? Aaraam adeereenu? Mane-mandi ellaa sukhadaagiddaareenu?',
        note: 'Warm rhythmic dialect using "adeereenu" and "mane-mandi" (family members).'
      },
      karavali: {
        text: 'ಎಂತ ಮಾರಾಯ ಸಮಾಚಾರ? ಮನೆಯಲ್ಲೆಲ್ಲ ಕುಶಲವೇ?',
        phonetic: 'Entha maaraya samachaara? Maneyallella kushalave?',
        note: 'Opens with the iconic coastal coastal idiom "Entha maaraya" (What, my good friend?).'
      },
      kalyana_karnataka: {
        text: 'ಆರಾಮ ಅದೀರೇನು ದೋಸ್ತ? ಮನೆಯಾಗ ಎಲ್ಲಾ ಬರಾಬರ್ ಅದಾರ?',
        phonetic: 'Aaraam adeereenu dosta? Maneyaaga ellaa baraabar adaara?',
        note: 'Uses "dosta" (companion/friend) and "baraabar" (proper/in good order).'
      },
      bengaluru: {
        text: 'ಏನ್ ಮಗಾ ಹೆಂಗಿದ್ದೀಯಾ? ಮನೇಲಿ ಎಲ್ಲ ಸೀನ್ ಸಾರ್ಟೆಡ್ ಅಲ್ವಾ?',
        phonetic: 'Een maga hengiddiya? Maneli ella scene sorted alwaa?',
        note: 'Urban casual slang blending local Kannada with witty modern colloquial tags.'
      }
    }
  },
  {
    id: 2,
    category: 'travel',
    standardEnglish: 'Driver, will you go by meter? Please drop me at the station.',
    standardKannada: 'ಚಾಲಕರೇ, ಮೀಟರ್ ಹಾಕಿ ಹೋಗ್ತೀರಾ? ನನ್ನನ್ನು ರೈಲ್ವೆ ನಿಲ್ದಾಣಕ್ಕೆ ಬಿಡಿ.',
    transliteration: 'Chaalarake, meter haaki hogtheera? Nannannu railway nildaanakke bidi.',
    variants: {
      mysuru: {
        text: 'ಅಣ್ಣಾ, ಮೀಟರ್ ಹಾಕ್ತೀರಾ? ರೈಲ್ವೇ ಸ್ಟೇಷನ್ ಹತ್ತಿರ ಬಿಟ್ಟುಬಿಡಿ ದಯವಿಟ್ಟು.',
        phonetic: 'Annaa, meter haaktheera? Railway station hathira bittu-bidi dayavittu.',
        note: 'Addresses the driver respectfully as "Anna" (elder brother).'
      },
      north_karnataka: {
        text: 'ಏ ಪಾ, ರೈಲ್ವೆ ಸ್ಟೇಷನ್‌ಗೆ ಬರ್ತೀಯೇನು? ಕರೆಕ್ಟ್ ಬಾಡಿಗೆ ಹೇಳಪಾ!',
        phonetic: 'Ee paa, railway station-ge bartheeyeenu? Correct baadige helapaa!',
        note: 'Affectionate "paa" ending and direct negotiation on "baadige" (fare).'
      },
      karavali: {
        text: 'ಮಾರಾಯ, ಸ್ಟೇಷನ್‌ಗೆ ಪೋಪುದ? ಮೀಟರ್ ಇಡ್ತೀರಾ?',
        phonetic: 'Maaraya, station-ge poopuda? Meter idtheera?',
        note: 'Kundapura verb "poopuda" (will you go?).'
      },
      kalyana_karnataka: {
        text: 'ಸ್ಟೇಷನ್ ಕಡೆ ನಡೀ ದೋಸ್ತ, ಮೀಟರ್ ಬರಾಬರ್ ಹಾಕು ನೋಡಪ್ಪ.',
        phonetic: 'Station kade nadi dosta, meter baraabar haaku nodappa.',
        note: 'Direct imperative tone "nadi" (let us move).'
      },
      bengaluru: {
        text: 'ಬಾಸ್, ಮೆಜೆಸ್ಟಿಕ್ ಸ್ಟೇಷನ್ ಬರುತ್ತಾ? ಒನ್-ಅಂಡ್-ಹಾಫ್ ಇಲ್ಲ, ಕರೆಕ್ಟ್ ಮೀಟರ್ ಹಾಕಿ!',
        phonetic: 'Boss, Majestic station baruttha? One-and-half illa, correct meter haaki!',
        note: 'Classic Bengaluru auto negotiation, preempting "one-and-a-half" surge charge.'
      }
    }
  },
  {
    id: 3,
    category: 'food',
    standardEnglish: 'Have you had breakfast? The dosa here is very tasty!',
    standardKannada: 'ನೀವು ತಿಂಡಿ ತಿಂದಿರಾ? ಇಲ್ಲಿ ದೋಸೆ ಬಹಳ ರುಚಿಕರವಾಗಿದೆ!',
    transliteration: 'Neevu thindi thindeera? Illi dose bahala ruchikaravaagidhe!',
    variants: {
      mysuru: {
        text: 'ತಿಂಡಿ ಆಯ್ತೇನ್ರೀ? ಮೈಸೂರು ಮಸಾಲೆ ದೋಸೆ ತಿಂದು ನೋಡಿ, ಅಮೃತ ತರ ಇದೆ!',
        phonetic: 'Thindi aaytheenree? Mysuru masale dose thindu nodi, amrutha thara idhe!',
        note: 'Evokes the iconic red garlic chutney Mysore Masala Dosa with reverence.'
      },
      north_karnataka: {
        text: 'ನಾಷ್ಟಾ ಮಾಡಿದ್ರೇನು? ಗಿರ್ಮಿಟ್-ಮಿರ್ಚಿ ತಿಂದ ನೋಡ್ರಿ, ಮಸ್ತ ಮಜಾ ಬರ್ತದ!',
        phonetic: 'Naashta maadidreenu? Girmit-mirchi thinda nodree, masta maja barthada!',
        note: 'Uses "naashta" for breakfast and references the Hubballi street staple Girmit.'
      },
      karavali: {
        text: 'ಬಿಸಿ ಬಿಸಿ ನೀರ್ ದೋಸೆ ಜೊತೆ ಮೀನ್ ಸಾರು ತಿಂದ್ರಾ? ಘಮ ಘಮ ಅಂತಿದೆ ಮಾರಾಯ!',
        phonetic: 'Bisi bisi neer dose jothe meen saaru thindra? Ghama ghama anthidhe maaraya!',
        note: 'Sensory coastal description featuring Neer Dosa and aromatic gassi/curry.'
      },
      kalyana_karnataka: {
        text: 'ಜೋಳದ ರೊಟ್ಟಿ-ಎಣ್ಣೆಗಾಯಿ ಚಟ್ನಿ ತಿನ್ರಿ ದೋಸ್ತ, ಜೀವಕ್ಕೆ ತಂಪಾಗತದ!',
        phonetic: 'Jolada rotti-ennegayi chutney thinri dosta, jeevakke thampaagathada!',
        note: 'Celebrates the divine combination of Jowar Rotti, stuffed brinjal, and peanut spice.'
      },
      bengaluru: {
        text: 'ತಿಂಡಿ ಹೊಡೆದ್ರಾ ಗುರು? ಸಿಟಿ ಮಾರ್ಕೆಟ್ ದೋಸೆ ಚಿಂದಿ ಗುರು, ಫಿಲ್ಟರ್ ಕಾಫಿ ಸೈಡ್‌ಗೆ ತಗೋ!',
        phonetic: 'Thindi hodedra guru? City Market dose chindi guru, filter coffee side-ge thago!',
        note: 'Urban youth lingo: "thindi hodedra" (whacked breakfast) and "chindi" (superb).'
      }
    }
  },
  {
    id: 4,
    category: 'work',
    standardEnglish: 'Do not worry, this task will be finished before evening.',
    standardKannada: 'ಚಿಂತೆ ಮಾಡಬೇಡಿ, ಈ ಕೆಲಸವು ಸಂಜೆಯೊಳಗೆ ಮುಗಿಯುತ್ತದೆ.',
    transliteration: 'Chinthe maadabedi, ee kelasavu sanjeyolage mugiyutthe.',
    variants: {
      mysuru: {
        text: 'ಯೋಚನೆ ಬೇಡಿ ಬಿಡಿ, ಸಂಜೆ ಒಳಗೆ ಕೆಲಸ ಕಂಪ್ಲೀಟ್ ಮಾಡಿ ಕೊಡ್ತೀನಿ.',
        phonetic: 'Yochane bedi bidi, sanje olage kelasa complete maadi kodtheeni.',
        note: 'Gentle reassurance with reassuring calmness.'
      },
      north_karnataka: {
        text: 'ಫಿಕರ್ ಮಾಡ್ಬ್ಯಾಡ್ರಿಪಾ! ಸಂಜಿ ಮುಂದ ಎಲ್ಲ ಕೆಲ್ಸ ಖತಂ ಮಾಡ್ತೇವಿ ನೋಡ್ರಿ!',
        phonetic: 'Phikar maadbyaadripaa! Sanji munda ella kelsa khatam maartheevi nodree!',
        note: '"Phikar maadbyaadri" (Don\'t worry) and "sanji munda" (by evening).'
      },
      karavali: {
        text: 'ತಡಿ ಮಾರಾಯ, ಸಂಜೆ ಒಳಗೆ ಕೆಲಸ ಸರಿ ಮಾಡಿ ಕೊಡ್ತನೆ, ಟೆನ್ಶನ್ ಬ್ಯಾಡ!',
        phonetic: 'Thadi maaraya, sanje olage kelasa sari maadi kodthane, tension byaada!',
        note: 'Coastal cadence with the affirmative "kodthane" commitment.'
      },
      kalyana_karnataka: {
        text: 'ಚಿಂತಿ ಬಿಡ್ರಿ ದೋಸ್ತ, ಸಂಜೆ ತನಕ ಕೆಲಸ ಪಕ್ಕಾ ಬರಾಬರ್ ಮುಗಿಸ್ತೇವಿ!',
        phonetic: 'Chinthi bidree dosta, sanje thanaka kelasa pakka baraabar mugistheevi!',
        note: '"Pakka baraabar" signifies 100% dependable completion.'
      },
      bengaluru: {
        text: 'ಕೂಲ್ ಆಗಿರು ಗುರು, ಈವ್ನಿಂಗ್ ಮುಂಚೆ ಪ್ರಾಜೆಕ್ಟ್ ಸಾರ್ಟ್ ಔಟ್ ಆಗುತ್ತೆ, ಲೋಡ್ ತಗೋಬೇಡ!',
        phonetic: 'Cool aagiru guru, evening munche project sort out aagutthe, load thagobeda!',
        note: 'Classic tech-Bengaluru mashup ("load thagobeda" = don\'t stress out).'
      }
    }
  },
  {
    id: 5,
    category: 'slang',
    standardEnglish: 'That is truly amazing! You did an incredible job!',
    standardKannada: 'ಅದು ನಿಜವಾಗಿಯೂ ಅದ್ಭುತವಾಗಿದೆ! ನೀವು ಶ್ರೇಷ್ಠ ಕೆಲಸ ಮಾಡಿದ್ದೀರಿ!',
    transliteration: 'Adu nijavaagiyoo adbhuthavaagidhe! Neevu shreshtha kelasa maadiddeeri!',
    variants: {
      mysuru: {
        text: 'ಬಹಳ ಮೆಚ್ಚುಗೆಯಾಯ್ತು ಕಣ್ರೀ! ನಿಮ್ಮ ಕೆಲಸ ನೋಡಿ ಹೆಮ್ಮೆ ಆಗ್ತಿದೆ.',
        phonetic: 'Bahala mecchugeyaaythu kanree! Nimma kelasa nodi hemme aagthidhe.',
        note: 'Restrained, aristocratic appreciation.'
      },
      north_karnataka: {
        text: 'ಮಸ್ತ ಅಂದ್ರ ಮಸ್ತ ಕೆಲ್ಸ ಮಾಡ್ಯಾನಪಾ! ಜಬರದಸ್ತ್ ಅದ ನೋಡ್ರಿ!',
        phonetic: 'Masta andra masta kelsa maadyanapaa! Jabardast ada nodree!',
        note: 'High-energy celebration: "Masta andra masta" and "Jabardast".'
      },
      karavali: {
        text: 'ಮಾರಾಯ, ಭಾರೀ ಚಂದದ ಕೆಲ್ಸ ಇದು! ನೀವ್ ನಿಜಕ್ಕೂ ಸೂಪರ್!',
        phonetic: 'Maaraya, bhaaree chandada kelsa idhu! Neev nijakkoo super!',
        note: '"Bhaaree chanda" (magnificently beautiful).'
      },
      kalyana_karnataka: {
        text: 'ಏಕ್ ದಂ ಬರಾಬರ್ ಅದ ನೋಡಪ್ಪ! ಬೆಂಕಿ ಕೆಲ್ಸ ಮಾಡಿದಿ ದೋಸ್ತ!',
        phonetic: 'Ek dam baraabar ada nodappa! Benki kelsa maadidi dosta!',
        note: '"Benki kelsa" (fire/explosively good work).'
      },
      bengaluru: {
        text: 'ಚಿಂದಿ ಚಿತ್ರಾನ್ನ ಗುರು! ನೆಕ್ಸ್ಟ್ ಲೆವೆಲ್ ಹೈಪ್ ಮಾಡ್ದೆ ಅಲ್ವಾ!',
        phonetic: 'Chindi chithranna guru! Next level hype maadde alwaa!',
        note: 'Iconic local slang: "Chindi Chitranna" (mindblown / absolute fireworks).'
      }
    }
  }
];
