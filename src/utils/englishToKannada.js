// Comprehensive English to Kannada Translation Dictionary & Syntax Engine
// Converts English sentences, colloquial expressions, and words into authentic Kannada

export const ENGLISH_PHRASE_DICTIONARY = [
  // Affection & Emotions
  {
    patterns: ['i want to hug you', 'want to hug you', 'hug you', 'give you a hug', 'hug me'],
    kannada: 'ನನಗೆ ನಿನ್ನನ್ನು ಅಪ್ಪಿಕೊಳ್ಳಬೇಕು',
    phonetic: 'Nanage ninnannu appikollabeku',
    variants: {
      mysuru: {
        text: 'ನನಗೆ ನಿಮ್ಮನ್ನು ಪ್ರೀತಿಯಿಂದ ಅಪ್ಪಿಕೊಳ್ಳಬೇಕೆನಿಸುತ್ತಿದೆ ಸ್ವಾಮಿ.',
        phonetic: 'Nanage nimmannu preethiyinda appikollabekenisutthidhe swaami.',
        trait: 'Courteous Mysore affection with "Swaami".'
      },
      north_karnataka: {
        text: 'ಏನ್ರೀ, ನನಗ ನಿಮ್ಮನ್ನ ತಬ್ಬಿಕೊಳ್ಳಬೇಕಾಗೇದ ನೋಡ್ರಿ!',
        phonetic: 'Eenree, nanaga nimmanna thabbikollabekaageda nodree!',
        trait: 'North Karnataka warmth using authentic verb "ತಬ್ಬಿಕೊ" (thabbiko).'
      },
      karavali: {
        text: 'ಮಾರಾಯ, ನಿನಗೆ ಒಂತೆ ಅಪ್ಪಿಕೊಳ್ಳುಲೆ ಮನಸ್ಸಾಯ್ತು ಬಪ್ಪ!',
        phonetic: 'Maaraya, ninage onte appikollule manassaaythu bappa!',
        trait: 'Coastal Kundapura rhythm with "appikollule" and "bappa".'
      },
      kalyana_karnataka: {
        text: 'ದೋಸ್ತ, ನಿನಗೆ ತಬ್ಬಿಕೊಳ್ಳಬೇಕ ಅನಿಸೇದ ನೋಡಪ್ಪ!',
        phonetic: 'Dosta, ninage thabbikollabeka aniseeda nodappa!',
        trait: 'Deccani-Sharana warmth with "Dosta" and "thabbiko".'
      },
      bengaluru: {
        text: 'ಮಗಾ, ನಿನಗೆ ಒಂದ್ ಹಗ್ ಕೊಡ್ಬೇಕು ಕಣೋ!',
        phonetic: 'Maga, ninage ond hug kodbeku kano!',
        trait: 'Urban street affection with "Maga" and "kano".'
      }
    }
  },

  {
    patterns: ['i love you', 'love you', 'i love u'],
    kannada: 'ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ',
    phonetic: 'Naanu ninnannu preethisuttheene',
    variants: {
      mysuru: {
        text: 'ನಾನು ನಿಮ್ಮನ್ನು ಮನಸಾರೆ ಪ್ರೀತಿಸುತ್ತೇನೆ ಸ್ವಾಮಿ.',
        phonetic: 'Naanu nimmannu manasaare preethisuttheene swaami.',
        trait: 'Poetic, gentle courtly devotion.'
      },
      north_karnataka: {
        text: 'ಏನ್ರೀ, ನಾ ನಿಮ್ಮನ್ನ ಬಹಳ ಪ್ರೀತಿ ಮಾಡ್ತೇನ್ರಿಪಾ!',
        phonetic: 'Eenree, naa nimmanna bahala preethi maadtheenripaa!',
        trait: 'Hearty Dharwad confession with "-ripaa".'
      },
      karavali: {
        text: 'ಮಾರಾಯ, ನಾ ನಿನ್ನನ್ನ ಭಾರೀ ಪ್ರೀತಿ ಮಾಡುದು ಬಪ್ಪ!',
        phonetic: 'Maaraya, naa ninnanna bhaaree preethi maadudu bappa!',
        trait: 'Coastal cadence with "bhaaree preethi" and "bappa".'
      },
      kalyana_karnataka: {
        text: 'ದೋಸ್ತ, ನಾ ನಿನ್ನನ್ನ ಏಕ್ ದಂ ಬರಾಬರ್ ಪ್ರೀತಿ ಮಾಡ್ತೀನಿ ನೋಡಪ್ಪ!',
        phonetic: 'Dosta, naa ninnanna ek dam baraabar preethi maadtheeni nodappa!',
        trait: 'Genuine camaraderie and deep affection.'
      },
      bengaluru: {
        text: 'ಮಗಾ, ನಾನು ನಿಂಗೆ ಲವ್ ಮಾಡ್ತಿದೀನಿ ಕಣೋ!',
        phonetic: 'Maga, naanu ninge love maadthideeni kano!',
        trait: 'Modern Bangalore romantic slang.'
      }
    }
  },

  {
    patterns: ['i miss you', 'miss you', 'missing you'],
    kannada: 'ನನಗೆ ನಿಮ್ಮ ನೆನಪಾಗುತ್ತಿದೆ',
    phonetic: 'Nanage nimma nenapaagutthidhe',
    variants: {
      mysuru: {
        text: 'ನನಗೆ ನಿಮ್ಮ ನೆನಪು ಸದಾ ಕಾಡುತ್ತಿದೆ ಸ್ವಾಮಿ.',
        phonetic: 'Nanage nimma nenapu sadaa kaadutthidhe swaami.',
        trait: 'Gentle, polite longing.'
      },
      north_karnataka: {
        text: 'ಏನ್ರೀ, ನನಗ ನಿಮ್ಮ ನೆನಪು ಬಹಳ ಬರ್ಲಿಕ್ಕತ್ತದ ನೋಡ್ರಿ!',
        phonetic: 'Eenree, nanaga nimma nenapu bahala barlikkatthada nodree!',
        trait: 'Uses "-barlikkatthada" (coming to mind).'
      },
      karavali: {
        text: 'ಮಾರಾಯ, ನಿನ್ನ ನೆನಪಾಗಿ ಭಾರೀ ಬೇಸರ ಆಗ್ತಿದೆ ಬಪ್ಪ!',
        phonetic: 'Maaraya, ninna nenapaagi bhaaree besara aagthidhe bappa!',
        trait: 'Coastal emotive expression.'
      },
      kalyana_karnataka: {
        text: 'ದೋಸ್ತ, ನಿನ್ನ ನೆನಪು ಬರಾಬರ್ ಕಾಡ್ತಿದೆ ನೋಡಪ್ಪ!',
        phonetic: 'Dosta, ninna nenapu baraabar kaadthidhe nodappa!',
        trait: 'Direct plateau warmth.'
      },
      bengaluru: {
        text: 'ಗುರು, ನಿನ್ನ ಸಖತ್ ಮಿಸ್ ಮಾಡ್ಕೊಳ್ತಿದೀನಿ ಮಗಾ!',
        phonetic: 'Guru, ninna sakhath miss maadkolthideeni maga!',
        trait: 'Urban street longing.'
      }
    }
  },

  // Daily Life, Commute & Dining
  {
    patterns: ['where are you going', 'where you going', 'where are u going'],
    kannada: 'ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?',
    phonetic: 'Neevu ellige hogutthiddeeri?',
    variants: {
      mysuru: { text: 'ಸ್ವಾಮಿ, ಎಲ್ಲಿಗೆ ಹೊರಟಿದ್ದೀರಿ ದಯವಿಟ್ಟು?', phonetic: 'Swaami, ellige horatiddeeri dayavittu?', trait: 'Courteous courtly tone.' },
      north_karnataka: { text: 'ಏನ್ರೀ, ಎಲ್ಲಿ ಹೊಂಟೀರ್ರೀಪಾ?', phonetic: 'Eenree, elli honteeripaa?', trait: 'Direct North Karnataka "ಹೊಂಟೀರಿ".' },
      karavali: { text: 'ಮಾರಾಯ, ಎಲ್ಲಿಗ್ ಪೋಪುದು ನೀವ್?', phonetic: 'Maaraya, ellig poopudu neev?', trait: 'Iconic Kundapra "ಪೋಪುದು".' },
      kalyana_karnataka: { text: 'ದೋಸ್ತ, ಎಲ್ಲಿ ನಡದೀರಿ ನೋಡಪ್ಪ?', phonetic: 'Dosta, elli nadadeeri nodappa?', trait: 'Hyderabad-Karnataka "ನಡದೀರಿ".' },
      bengaluru: { text: 'ಎಲ್ಲಿ ಹೊಂಟೆ ಮಗಾ? ಯಾವ್ ಸೀನ್?', phonetic: 'Elli honte maga? Yaav scene?', trait: 'Bangalore youth slang.' }
    }
  },

  {
    patterns: ['i want to eat', 'want to eat food', 'i am hungry', 'hungry', 'give me food'],
    kannada: 'ನನಗೆ ಹಸಿವಾಗಿದೆ, ಊಟ ಬೇಕು',
    phonetic: 'Nanage hasivaagidhe, oota beku',
    variants: {
      mysuru: { text: 'ಸ್ವಲ್ಪ ಊಟ ಬಡಿಸಿ ಸ್ವಾಮಿ, ಬಹಳ ಹಸಿವಾಗುತ್ತಿದೆ.', phonetic: 'Swalpa oota badisi swaami, bahala hasivaagutthidhe.', trait: 'Gentle courtly hunger request.' },
      north_karnataka: { text: 'ಏನ್ರೀ, ಹೊಟ್ಟೆ ಹಸೀಲಿಕ್ಕತ್ತದ! ಬಿಸಿ ಜೋಳದ ರೊಟ್ಟಿ ಇಲ್ರೇನು?', phonetic: 'Eenree, hotte haseelikkatthada! Bisi jolada rotti ilreenu?', trait: 'Hearty demand for jowar rotti.' },
      karavali: { text: 'ಮಾರಾಯ, ಭಾರೀ ಹಸಿವೆ ಆಗ್ತಿದೆ! ಬಿಸಿ ಕೂಡು ಉಂಟಾ?', phonetic: 'Maaraya, bhaaree hasive aagthidhe! Bisi koodu untaa?', trait: 'Coastal ask for boiled rice (koodu).' },
      kalyana_karnataka: { text: 'ದೋಸ್ತ, ಪಹಲೆ ಊಟ ಮಾಡೋನು ನಡೀ, ಜೀವ ಹೋಗ್ತಿದೆ!', phonetic: 'Dosta, pahale oota maadoonu nadi, jeeva hogthidhe!', trait: 'Plateau camaraderie.' },
      bengaluru: { text: 'ಗುರು, ಹೊಟ್ಟೆ ಚಿಂದಿ ಹಸೀತಾ ಇದೆ! ತಿಂಡಿ ಹೊಡಿಯೋಣ ಬಾ ಮಗಾ!', phonetic: 'Guru, hotte chindi haseethaa idhe! Thindi hodiyoona baa maga!', trait: 'Bangalore food sprint.' }
    }
  },

  {
    patterns: ['give me water', 'i want water', 'drink water', 'drinking water'],
    kannada: 'ದಯವಿಟ್ಟು ಕುಡಿಯಲು ನೀರು ಕೊಡಿ',
    phonetic: 'Dayavittu kudiyalu neeru kodi',
    variants: {
      mysuru: { text: 'ಸ್ವಲ್ಪ ಕುಡಿಯಲು ನೀರು ಕೊಡ್ತೀರಾ ಸ್ವಾಮಿ?', phonetic: 'Swalpa kudiyalu neeru kodtheera swaami?', trait: 'Respectful request.' },
      north_karnataka: { text: 'ಏನ್ರೀ, ಕುಡಿಯಾಕ ನೀರು ಕೊಡ್ರಿಪಾ!', phonetic: 'Eenree, kudiyaaka neeru kodripaa!', trait: 'North Karnataka "ಕುಡಿಯಾಕ ನೀರು".' },
      karavali: { text: 'ಮಾರಾಯ, ಒಂತೆ ಕುಡಿಯುಲೆ ನೀರು ಕೊಡ್ಲೆ ಬಪ್ಪ!', phonetic: 'Maaraya, onte kudiyule neeru kodle bappa!', trait: 'Coastal "ಕುಡಿಯುಲೆ".' },
      kalyana_karnataka: { text: 'ದೋಸ್ತ, ಜರಾ ಕುಡಿಯಾಕ ಪಾನಿ ಕೊಡಪ್ಪ!', phonetic: 'Dosta, jaraa kudiyaaka paani kodappa!', trait: 'Kalyana Karnataka Deccani blend.' },
      bengaluru: { text: 'ಬಾಸ್, ಕುಡಿಯೋಕೆ ಸ್ವಲ್ಪ ವಾಟರ್ ಕೊಡಿ ಗುರು!', phonetic: 'Boss, kudiyoke swalpa water kodi guru!', trait: 'Bangalore bilingual mix.' }
    }
  },

  {
    patterns: ['where is the bus stop', 'where is the station', 'where is the hospital', 'where is the hotel'],
    kannada: 'ರೈಲ್ವೆ ನಿಲ್ದಾಣ / ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ ಬರುತ್ತದೆ?',
    phonetic: 'Railway nildaana / bus nildaana elli barutthe?',
    variants: {
      mysuru: { text: 'ಸ್ವಾಮಿ, ಬಸ್ ನಿಲ್ದಾಣಕ್ಕೆ ಹೋಗುವ ದಾರಿ ಸ್ವಲ್ಪ ತಿಳಿಸ್ತೀರಾ?', phonetic: 'Swaami, bus nildaanakke hoguva daari swalpa thilistheera?', trait: 'Polite navigation.' },
      north_karnataka: { text: 'ಏ ಪಾ, ಬಸ್ ನಿಲ್ದಾಣ ಹೆಂಗ್ ಹೋಗ್ಬೇಕ ನೋಡ್ರಿ? ಕರೆಕ್ಟ್ ಹೇಳಪಾ!', phonetic: 'Ee paa, bus nildaana heng hogbek nodree? Correct helapaa!', trait: 'Direct North direction query.' },
      karavali: { text: 'ಮಾರಾಯ, ಬಸ್ ಸ್ಟ್ಯಾಂಡ್‌ಗ್ ಪೋಪುದು ಹೆಂಗೆ ಬಪ್ಪ?', phonetic: 'Maaraya, bus stand-g poopudu henge bappa?', trait: 'Kundapra transit query.' },
      kalyana_karnataka: { text: 'ದೋಸ್ತ, ಬಸ್ ಸ್ಟ್ಯಾಂಡ್‌ಗೆ ಹೆಂಗ್ ಮುಟ್ಟೋನು? ಬರಾಬರ್ ದಾರಿ ತೋರಿಸು!', phonetic: 'Dosta, bus stand-ge heng muttoonu? Baraabar daari thorisu!', trait: 'Kalyana navigation.' },
      bengaluru: { text: 'ಬಾಸ್, ಬಸ್ ಸ್ಟ್ಯಾಂಡ್ ಎಲ್ಲಿ ಬರುತ್ತೆ? ಮೆಟ್ರೋ ಹತ್ರಾನಾ ಗುರು?', phonetic: 'Boss, bus stand elli barutthe? Metro hathraanaa guru?', trait: 'Bangalore commuter lingo.' }
    }
  },

  {
    patterns: ['how much is the auto fare', 'auto fare', 'will you come by meter', 'turn on meter'],
    kannada: 'ಆಟೋ ಬಾಡಿಗೆ ಎಷ್ಟು? ಮೀಟರ್ ಹಾಕಿ ಬರ್ತೀರಾ?',
    phonetic: 'Auto baadige eshtu? Meter haaki bartheera?',
    variants: {
      mysuru: { text: 'ಅಣ್ಣಾ, ಮೀಟರ್ ಹಾಕ್ತೀರಾ? ಸ್ವಲ್ಪ ನೋಡಿ ಕರೆಕ್ಟಾಗಿ ಬಾಡಿಗೆ ತಗೊಳ್ಳಿ.', phonetic: 'Annaa, meter haaktheera? Swalpa nodi correct-aagi baadige thagolli.', trait: 'Respectful address "Anna".' },
      north_karnataka: { text: 'ಏ ಪಾ, ಮೀಟರ್ ಹಾಕಿ ಬರ್ತೀಯೇನು? ಕರೆಕ್ಟ್ ಬಾಡಿಗೆ ಹೇಳಪಾ!', phonetic: 'Ee paa, meter haaki bartheeyeenu? Correct baadige helapaa!', trait: 'Straightforward "ಬಾಡಿಗೆ ಹೇಳಪಾ".' },
      karavali: { text: 'ಮಾರಾಯ, ಮೀಟರ್ ಹಾಕಿ ಬರ್ತಿಯಾ? ಒಂತೆ ಕಮ್ಮಿ ಮಾಡ್ಲೆ!', phonetic: 'Maaraya, meter haaki barthiya? Onte kammi maadle!', trait: 'Coastal auto negotiation.' },
      kalyana_karnataka: { text: 'ದೋಸ್ತ, ಬರಾಬರ್ ಬಾಡಿಗೆ ತಗೋ ನೋಡಪ್ಪ, ಮೀಟರ್ ಆನ್ ಮಾಡು!', phonetic: 'Dosta, baraabar baadige thago nodappa, meter on maadu!', trait: 'Kalyana transit agreement.' },
      bengaluru: { text: 'ಬಾಸ್, ಒನ್-ಅಂಡ್-ಹಾಫ್ ಇಲ್ಲ, ಕರೆಕ್ಟ್ ಮೀಟರ್ ಹಾಕಿ ಮಗಾ!', phonetic: 'Boss, one-and-half illa, correct meter haaki maga!', trait: 'Classic Bangalore meter fight.' }
    }
  },

  {
    patterns: ['thank you very much', 'thank you', 'thanks a lot', 'thanks'],
    kannada: 'ನಿಮಗೆ ತುಂಬು ಹೃದಯದ ಧನ್ಯವಾದಗಳು',
    phonetic: 'Nimage thumbu hrudayada dhanyavaadagalu',
    variants: {
      mysuru: { text: 'ನಿಮಗೆ ನನ್ನ ಅನಂತ ಧನ್ಯವಾದಗಳು ಸ್ವಾಮಿ.', phonetic: 'Nimage nanna anantha dhanyavaadagalu swaami.', trait: 'Formal courtly gratitude.' },
      north_karnataka: { text: 'ದೊಡ್ಡ ಉಪಕಾರ ಆತ್ರಿಪಾ ನಿಮ್ದು! ಥ್ಯಾಂಕ್ಸ್ ರೀ!', phonetic: 'Dodda upakaara aathripaa nimdu! Thanks ree!', trait: 'Warm grateful exclamation.' },
      karavali: { text: 'ಮಾರಾಯ, ಭಾರೀ ಉಪಕಾರ ಆಯ್ತು ನಿನ್ನಿಂದ ಬಪ್ಪ!', phonetic: 'Maaraya, bhaaree upakaara aaythu ninninda bappa!', trait: 'Coastal gratitude with "bhaaree upakaara".' },
      kalyana_karnataka: { text: 'ದೋಸ್ತ, ಬಹಳ ಬರಾಬರ್ ಕೆಲಸ ಮಾಡಿದೆ ನೋಡಪ್ಪ, ಧನ್ಯವಾದ!', phonetic: 'Dosta, bahala baraabar kelasa maadide nodappa, dhanyavaada!', trait: 'Comradely appreciation.' },
      bengaluru: { text: 'ಥ್ಯಾಂಕ್ಸ್ ಗುರು! ಸಖತ್ ಹೆಲ್ಪ್ ಆಯ್ತು ಮಗಾ!', phonetic: 'Thanks guru! Sakhath help aaythu maga!', trait: 'Bangalore casual thanks.' }
    }
  }
];

// Word-by-word bilingual translator for dynamic English sentence parsing
export const ENGLISH_WORD_MAP = {
  // Pronouns
  'i': 'ನಾನು',
  'me': 'ನನಗೆ',
  'my': 'ನನ್ನ',
  'mine': 'ನನ್ನದು',
  'you': 'ನೀವು',
  'your': 'ನಿಮ್ಮ',
  'yours': 'ನಿಮ್ಮದು',
  'we': 'ನಾವು',
  'us': 'ನಮಗೆ',
  'our': 'ನಮ್ಮ',
  'he': 'ಅವನು',
  'she': 'ಅವಳು',
  'it': 'ಇದು',
  'they': 'ಅವರು',
  'them': 'ಅವರಿಗೆ',

  // Common Verbs & Actions
  'want': 'ಬೇಕು',
  'hug': 'ಅಪ್ಪಿಕೊ',
  'hugging': 'ಅಪ್ಪಿಕೊಳ್ಳುವುದು',
  'love': 'ಪ್ರೀತಿಸು',
  'loving': 'ಪ್ರೀತಿಸುವುದು',
  'like': 'ಇಷ್ಟಪಡು',
  'need': 'ಅಗತ್ಯ',
  'eat': 'ತಿನ್ನು',
  'eating': 'ತಿನ್ನುವುದು',
  'ate': 'ತಿಂದೆ',
  'drink': 'ಕುಡಿ',
  'drinking': 'ಕುಡಿಯುವುದು',
  'go': 'ಹೋಗು',
  'going': 'ಹೋಗುವುದು',
  'went': 'ಹೋದೆ',
  'come': 'ಬಾ',
  'coming': 'ಬರುವುದು',
  'came': 'ಬಂದೆ',
  'see': 'ನೋಡು',
  'look': 'ನೋಡು',
  'watch': 'ವೀಕ್ಷಿಸು',
  'talk': 'ಮಾತನಾಡು',
  'speak': 'ಮಾತನಾಡು',
  'say': 'ಹೇಳು',
  'tell': 'ತಿಳಿಸು',
  'listen': 'ಕೇಳು',
  'hear': 'ಕೇಳು',
  'help': 'ಸಹಾಯ ಮಾಡು',
  'give': 'ಕೊಡು',
  'take': 'ತೆಗೆದುಕೊ',
  'buy': 'ಖರೀದಿಸು',
  'sell': 'ಮಾರು',
  'sleep': 'ಮಲಗು',
  'run': 'ಓಡು',
  'walk': 'ನಡೆ',
  'wait': 'ಕಾಯಿ',
  'call': 'ಕರೆ ಮಾಡು',
  'play': 'ಆಡು',
  'stop': 'ನಿಲ್ಲಿಸು',
  'drive': 'ಚಲಾಯಿಸು',

  // Food & Staples
  'food': 'ಊಟ',
  'water': 'ನೀರು',
  'rice': 'ಅನ್ನ',
  'tea': 'ಚಹಾ',
  'coffee': 'ಕಾಫಿ',
  'milk': 'ಹಾಲು',
  'sweet': 'ಸಿಹಿ',
  'fruit': 'ಹಣ್ಣು',
  'vegetable': 'ತರಕಾರಿ',
  'roti': 'ರೊಟ್ಟಿ',
  'dosa': 'ದೋಸೆ',

  // Adjectives & Modifiers
  'good': 'ಒಳ್ಳೆಯದು',
  'bad': 'ಕೆಟ್ಟದ್ದು',
  'happy': 'ಖುಷಿ',
  'sad': 'ದುಃಖ',
  'big': 'ದೊಡ್ಡದು',
  'small': 'ಚಿಕ್ಕದು',
  'hot': 'ಬಿಸಿ',
  'cold': 'ತಂಪು',
  'fast': 'ಬೇಗ',
  'slow': 'ನಿಧಾನ',
  'beautiful': 'ಸುಂದರ',
  'clean': 'ಸ್ವಚ್ಛ',
  'tasty': 'ರುಚಿಕರ',
  'expensive': 'ದುಬಾರಿ',
  'cheap': 'ಅಗ್ಗ',
  'late': 'ತಡ',
  'early': 'ಬೇಗನೆ',

  // Interrogatives
  'where': 'ಎಲ್ಲಿ',
  'when': 'ಯಾವಾಗ',
  'why': 'ಯಾಕೆ',
  'what': 'ಏನು',
  'how': 'ಹೇಗೆ',
  'who': 'ಯಾರು',
  'which': 'ಯಾವುದು',
  'how much': 'ಎಷ್ಟು',
  'how many': 'ಎಷ್ಟು ಜನ',

  // People & Places
  'friend': 'ಸ್ನೇಹಿತ',
  'friends': 'ಸ್ನೇಹಿತರು',
  'brother': 'ಸಹೋದರ / ಅಣ್ಣ',
  'sister': 'ತಂಗಿ / ಅಕ್ಕ',
  'father': 'ತಂದೆ / ಅಪ್ಪ',
  'mother': 'ತಾಯಿ / ಅಮ್ಮ',
  'family': 'ಕುಟುಂಬ',
  'home': 'ಮನೆ',
  'house': 'ಮನೆ',
  'shop': 'ಅಂಗಡಿ',
  'market': 'ಮಾರುಕಟ್ಟೆ',
  'city': 'ನಗರ',
  'village': 'ಹಳ್ಳಿ',
  'road': 'ರಸ್ತೆ',
  'car': 'ಕಾರು',
  'bus': 'ಬಸ್ಸು',
  'train': 'ರೈಲು',
  'station': 'ನಿಲ್ದಾಣ',
  'hospital': 'ಆಸ್ಪತ್ರೆ',
  'school': 'ಶಾಲೆ',
  'college': 'ಕಾಲೇಜು',
  'money': 'ಹಣ'
};

// Translates any English sentence into grammatically structured Kannada
export function translateEnglishToKannada(englishInput) {
  if (!englishInput || !englishInput.trim()) return '';
  const lower = englishInput.toLowerCase().trim();

  // 1. Direct Match against curated phrase bank
  for (const entry of ENGLISH_PHRASE_DICTIONARY) {
    for (const pat of entry.patterns) {
      if (lower.includes(pat) || lower === pat) {
        return {
          matchedPhrase: true,
          kannada: entry.kannada,
          phonetic: entry.phonetic,
          variants: entry.variants
        };
      }
    }
  }

  // 2. Syntactic Pattern Translators
  // Pattern: "i want [SOMETHING]" or "i want to [VERB] [OBJECT]"
  const wantToRegex = /^i want to\s+([a-z\s]+)$/i;
  const wantToMatch = lower.match(wantToRegex);
  if (wantToMatch) {
    const actionPhrase = wantToMatch[1].trim();
    const words = actionPhrase.split(/\s+/);
    
    // Check if the verb is in our word map
    if (words.length === 1) {
      const v = ENGLISH_WORD_MAP[words[0]] || words[0];
      return {
        matchedPhrase: false,
        kannada: `ನನಗೆ ${v}ಬೇಕು`,
        phonetic: `Nanage ${v}beku`
      };
    } else if (words.length >= 2) {
      const verb = words[0];
      const target = words.slice(1).map(w => ENGLISH_WORD_MAP[w] || w).join(' ');
      const verbKn = ENGLISH_WORD_MAP[verb] || verb;
      return {
        matchedPhrase: false,
        kannada: `ನನಗೆ ${target}ಯನ್ನು ${verbKn}ಬೇಕು`,
        phonetic: `Nanage ${target}yannu ${verbKn}beku`
      };
    }
  }

  // Pattern: "where is [PLACE]"
  const whereIsRegex = /^where is (?:the\s+)?([a-z\s]+)\??$/i;
  const whereMatch = lower.match(whereIsRegex);
  if (whereMatch) {
    const place = whereMatch[1].trim();
    const placeKn = ENGLISH_WORD_MAP[place] || place;
    return {
      matchedPhrase: false,
      kannada: `${placeKn} ಎಲ್ಲಿ ಬರುತ್ತದೆ?`,
      phonetic: `${placeKn} elli barutthe?`
    };
  }

  // Pattern: "how much is [ITEM]" or "how much for [ITEM]"
  const howMuchRegex = /^how much (?:is|for) (?:the\s+)?([a-z\s]+)\??$/i;
  const howMuchMatch = lower.match(howMuchRegex);
  if (howMuchMatch) {
    const item = howMuchMatch[1].trim();
    const itemKn = ENGLISH_WORD_MAP[item] || item;
    return {
      matchedPhrase: false,
      kannada: `${itemKn} ಬೆಲೆ ಎಷ್ಟು?`,
      phonetic: `${itemKn} bele eshtu?`
    };
  }

  // 3. Fallback: Word by word translation
  const tokens = lower.replace(/[.,?!]/g, '').split(/\s+/);
  const translatedTokens = tokens.map(token => ENGLISH_WORD_MAP[token] || token);
  const joinedKn = translatedTokens.join(' ');

  return {
    matchedPhrase: false,
    kannada: joinedKn,
    phonetic: joinedKn
  };
}
