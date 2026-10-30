// Deeply Customized Regional & District Linguistic Data for Karnataka
export const REGIONS = {
  mysuru: {
    id: 'mysuru',
    name: 'Old Mysuru & South Karnataka',
    kannadaName: 'ಹಳೆ ಮೈಸೂರು / ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    tagline: 'The Royal, Courteous & Melodic Lilt',
    color: '#F3C067',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    districts: ['Mysuru', 'Mandya', 'Hassan', 'Chamarajanagar', 'Ramanagara', 'Tumakuru'],
    overview: 'Characterized by royal courtly politeness, soft vocal transitions, and classical Kannada roots influenced by the Wadiyar Dynasty, Cauvery river basin, and rural sugar-cane heartlands.',
    phoneticFeature: 'Pronunciation is gentle and respectful, often ending verbs with honorific suffixes like "-idheera", elongated polite vowels, and courteous inquiries.',
    greeting: {
      kannada: 'ನಮಸ್ಕಾರ, ಊಟ ಆಯ್ತಾ? ಮನೆಯಲ್ಲಿ ಎಲ್ಲ ಆರಾಮಾಗಿದ್ದಾರಾ?',
      transliteration: 'Namaskara, oota aaytha? Maneyalli ella aaramagiddara?',
      meaning: 'Hello, have you had your meal? Is everyone doing well at home?'
    },
    districtProfiles: [
      {
        id: 'mysuru-dist',
        name: 'Mysuru (ಮೈಸೂರು)',
        slang: 'ಏನ್ ಸ್ವಾಮಿ, ಕಾಫಿ ಆಯ್ತಾ?',
        specialty: 'Royal courtly courtesy & Wadiyar literary cadence',
        food: 'Mysore Pak, Mysore Masala Dosa'
      },
      {
        id: 'mandya-dist',
        name: 'Mandya (ಮಂಡ್ಯ)',
        slang: 'ಏನ್ ಕಣಯ್ಯ ಸಮಾಚಾರ? ರಾಗಿ ಮುದ್ದೆ ತಿನ್ನಣ ಬಾರೋ!',
        specialty: 'Rhythmic, high-energy rural warmth with affectionate "-kanayya"',
        food: 'Ragi Mudde, Naati Koli Saaru'
      },
      {
        id: 'hassan-dist',
        name: 'Hassan (ಹಾಸನ)',
        slang: 'ಬಹಳ ಸಂತೋಷವಾಯ್ತು ನಿಮ್ಮನ್ನ ಭೇಟಿ ಮಾಡಿ',
        specialty: 'Hoysala architectural roots & gentle Malenadu edge',
        food: 'Akki Rotti, Kaayi Kadabu'
      },
      {
        id: 'chamarajanagar-dist',
        name: 'Chamarajanagar (ಚಾಮರಾಜನಗರ)',
        slang: 'ಮನೇಲಿ ಎಲ್ಲ ಚೆನ್ನಾಗಿದ್ದಾರಾ ಸ್ವಾಮಿ?',
        specialty: 'Forest border inflection & ancient folk idiom blend',
        food: 'Koli Bassaru, Nuchinunde'
      }
    ],
    samplePhrases: [
      // Greetings & Courtesies
      { 
        kannada: 'ನಮಸ್ಕಾರ ಸ್ವಾಮಿ, ಕಾಫಿ-ತಿಂಡಿ ಆಯ್ತಾ?', 
        transliteration: 'Namaskara swami, kaafi-thindi aaytha?', 
        meaning: 'Greetings sir, have you taken your coffee and breakfast?',
        category: 'greetings',
        district: 'Mysuru',
        culturalNuance: 'Calling acquaintances "Swami" with respect is the traditional trademark of Mysore hospitality.'
      },
      { 
        kannada: 'ಏನ್ ಕಣಯ್ಯ, ಬಹಳ ದಿನದ ಮೇಲೆ ಕಂಡ್ರಿ!', 
        transliteration: 'Een kanayya, bahala dinada mele kandri!', 
        meaning: 'Hey dear friend, seeing you after such a long time!',
        category: 'greetings',
        district: 'Mandya',
        culturalNuance: 'Mandya dialect is famous for affectionate suffixes like "-kanayya" and "-kano".'
      },
      // Food & Hospitality
      { 
        kannada: 'ಬಿಸಿ ಬಿಸಿ ರಾಗಿ ಮುದ್ದೆ-ಸೊಪ್ಪಿನ ಸಾರು ಊಟ ಮಾಡ್ರಿ', 
        transliteration: 'Bisi bisi ragi mudde-soppina saaru oota maadree', 
        meaning: 'Please have piping hot ragi mudde with traditional greens curry',
        category: 'food',
        district: 'Mandya',
        culturalNuance: 'Ragi mudde is the staple life-energy food of South Karnataka farm culture.'
      },
      { 
        kannada: 'ಮೈಸೂರ್ ಪಾಕ್ ಬಾಯಲ್ಲಿಟ್ಟರೆ ಕರಗಿ ಹೋಗುತ್ತೆ ಬಿಡಿ', 
        transliteration: 'Mysore Pak baayallittare karagi hogutthe bidi', 
        meaning: 'Mysore Pak literally melts the moment you put it in your mouth',
        category: 'food',
        district: 'Mysuru',
        culturalNuance: 'Created in the royal Mysore Palace kitchen by Kakasura Madappa.'
      },
      // Daily Slang & Idioms
      { 
        kannada: 'ತೊಂದರೆ ಇಲ್ಲ ಬಿಡಿ, ನಾವೇ ನೋಡಿಕೊಳ್ತೀವಿ', 
        transliteration: 'Tondare illa bidi, naave nodikoltheevi', 
        meaning: 'No trouble at all, we will take care of it ourselves',
        category: 'slang',
        district: 'Mysuru',
        culturalNuance: 'The classic patient Mysore temperament of assuring guests never to worry.'
      },
      { 
        kannada: 'ಏನ್ ಕಿಲಾಡಿ ಕಣಯ್ಯ ನೀನು!', 
        transliteration: 'Een kilaadi kanayya neenu!', 
        meaning: 'What a sharp, clever mastermind you are!',
        category: 'slang',
        district: 'Mandya',
        culturalNuance: 'Colloquial good-humored banter among village peers.'
      },
      // Travel & Transit
      { 
        kannada: 'ರೈಲ್ವೆ ಸ್ಟೇಷನ್‌ಗೆ ಮೀಟರ್ ಹಾಕಿ ಬರ್ತೀರಾ ಸ್ವಾಮಿ?', 
        transliteration: 'Railway station-ge meter haaki bartheera swami?', 
        meaning: 'Will you take me to the railway station by meter, sir?',
        category: 'travel',
        district: 'Mysuru',
        culturalNuance: 'Polite auto fare inquiry without aggressive negotiation.'
      },
      { 
        kannada: 'ಬಸ್ಸು ಹತ್ತುವಾಗ ಹುಷಾರಾಗಿ ಹತ್ತಿ ಕಣಯ್ಯ', 
        transliteration: 'Bussu hatthuvaga hushaaraagi hatthi kanayya', 
        meaning: 'Be careful while boarding the bus, my friend',
        category: 'travel',
        district: 'Ramanagara',
        culturalNuance: 'Protective parental warmth typical of rural elders.'
      },
      // Proverbs & Wisdom
      { 
        kannada: 'ಕೈ ಕೆಸರಾದರೆ ಬಾಯಿ ಮೊಸರು', 
        transliteration: 'Kai kesaraadare baayi mosaru', 
        meaning: 'Hard honest toil in the muddy field yields sweet curd for the palate',
        category: 'proverb',
        district: 'Mandya',
        culturalNuance: 'Reverence for agriculture and the dignity of labor.'
      },
      { 
        kannada: 'ಹಾಸಿಗೆ ಇದ್ದಷ್ಟೇ ಕಾಲು ಚಾಚಬೇಕು', 
        transliteration: 'Haasige iddashte kaalu chaachabeku', 
        meaning: 'Stretch your legs only as far as your bed permits (Live within your means)',
        category: 'proverb',
        district: 'Tumakuru',
        culturalNuance: 'Fundamental financial and lifestyle prudence taught across generations.'
      }
    ],
    culturalHeritage: {
      artForms: ['Mysore Painting', 'Kamsale Folk Dance', 'Dollu Kunitha'],
      festivals: ['Mysuru Dasara (Nada Habba)', 'Vairamudi Utsava', 'Gaganachukki Jalapathothsava'],
      literature: ['Maharaja Jayachamarajendra Wadiyar compositions', 'Kuvempu Malenadu Epics', 'PuTiNa Lyric Poetry'],
      cuisine: ['Mysore Pak', 'Mysore Masala Dosa', 'Maddur Vada', 'Ragi Mudde with Soppina Saaru']
    },
    famousProverb: {
      kannada: 'ಕೈ ಕೆಸರಾದರೆ ಬಾಯಿ ಮೊಸರು',
      transliteration: 'Kai kesaraadare baayi mosaru',
      meaning: 'Hard work in the soil yields sweet curd for the mouth (No pain, no gain)'
    }
  },

  north_karnataka: {
    id: 'north_karnataka',
    name: 'North Karnataka (Dharwad / Belagavi / Hubballi)',
    kannadaName: 'ಉತ್ತರ ಕರ್ನಾಟಕ (ಧಾರವಾಡ - ಬೆಳಗಾವಿ)',
    tagline: 'The Soulful, Rhythmic & Earthy Tongue',
    color: '#D96B43',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    districts: ['Dharwad', 'Belagavi', 'Hubballi', 'Gadag', 'Haveri', 'Bagalkote', 'Vijayapura'],
    overview: 'Known for its direct, vibrant warmth, hearty hospitality, and rapid rhythmic cadence. Origin of revolutionary 12th-century Vachana literature and legendary modern poetry (Da. Ra. Bendre).',
    phoneticFeature: 'Uses rhythmic verbal markers like "-likkattiri" (in the middle of doing), "-pa" (warm affectionate tag), and "ri" (respectful address). Pronouns like "naanu" become "naa" and "nanage" becomes "nanga".',
    greeting: {
      kannada: 'ಏನ್ರೀ ಸಮಾಚಾರ? ಆರಾಮ ಅದೀರೇನು? ಬರ್ರಿ ಊಟ ಮಾಡೂಣ್ರಿ!',
      transliteration: 'Eenree samachara? Aaraam adeereenu? Barri oota maadoonri!',
      meaning: 'What is the news, sir? Are you doing well? Come along, let us have food!'
    },
    districtProfiles: [
      {
        id: 'dharwad-dist',
        name: 'Dharwad & Hubballi (ಧಾರವಾಡ - ಹುಬ್ಬಳ್ಳಿ)',
        slang: 'ಗಿರ್ಮಿಟ್ ಮಸ್ತ ಅದ ನೋಡ್ರಿ! ಬರ್ರಿ ಊಟಕ್ಕ!',
        specialty: 'The literary heartland of Bendre & Hindustani classical masters',
        food: 'Dharwad Pedha, Girmit with Mirchi Bajji'
      },
      {
        id: 'belagavi-dist',
        name: 'Belagavi (ಬೆಳಗಾವಿ)',
        slang: 'ಯಪ್ಪಾ ಬಿಸಿಲು ಬಹಳ ಐತಿ! ಎಲ್ಲಿಗ್ ಹೊಂಟೀರಿ?',
        specialty: 'Kittur Rani Chennamma defiance & robust Kundanagari tone',
        food: 'Kunda, Karadantu, Jolada Rotti'
      },
      {
        id: 'vijayapura-dist',
        name: 'Vijayapura & Bagalkote (ವಿಜಯಪುರ - ಬಾಗಲಕೋಟೆ)',
        slang: 'ಬರಾಬರ್ ಐತಿ ನೋಡ್ರಿ, ಜೋಳದ ರೊಟ್ಟಿ ಬಿಸಿಯಾಗ ಉಣ್ಣೋಣು!',
        specialty: 'Historic Adil Shahi & Chalukya heritage with pure agricultural vocabulary',
        food: 'Sajje Rotti, Yennegayi, Shenga Chutney'
      },
      {
        id: 'gadag-dist',
        name: 'Gadag & Haveri (ಗದಗ - ಹಾವೇರಿ)',
        slang: 'ಕುಮಾರವ್ಯಾಸರ ನಾಡು ನಮ್ದು, ನೇರ ಮಾತು ನಮ್ ಧರ್ಮ!',
        specialty: 'Epic Bharata literature & fiery Byadagi red chilli culture',
        food: 'Byadagi Menasu Pudi, Shenga Holige'
      }
    ],
    samplePhrases: [
      // Greetings
      { 
        kannada: 'ಏನ್ರೀ ಸಮಾಚಾರ? ಆರಾಮ ಅದೀರೇನು ಮನೇಮಂದಿ ಎಲ್ಲಾ?', 
        transliteration: 'Eenree samachara? Aaraam adeereenu mane-mandi ellaa?', 
        meaning: 'What is the news, sir? Is your entire family doing well?',
        category: 'greetings',
        district: 'Dharwad',
        culturalNuance: 'In North Karnataka, greeting without asking about "mane-mandi" (all family members) is considered incomplete.'
      },
      { 
        kannada: 'ಬರ್ರಿ ಬರ್ರಿ, ಚಹಾ ಕುಡಿದು ಹೋಗೂಣ್ರಿ!', 
        transliteration: 'Barri barri, chaha kudidu hogoonri!', 
        meaning: 'Come right in! You cannot leave without having tea with us!',
        category: 'greetings',
        district: 'Belagavi',
        culturalNuance: 'No visitor leaves a North Karnataka home without strong spiced tea.'
      },
      // Food & Cuisine
      { 
        kannada: 'ಜೋಳದ ರೊಟ್ಟಿ-ಎಣ್ಣೆಗಾಯಿ ಜೊತಿ ಶೇಂಗಾ ಹಿಂಡಿ ಮಸ್ತ ಅದ!', 
        transliteration: 'Jolada rotti-ennegayi jyothi shenga hindi masta ada!', 
        meaning: 'Jowar flatbread with stuffed brinjal and peanut chutney is heavenly!',
        category: 'food',
        district: 'Vijayapura',
        culturalNuance: 'The staple royal diet of the Deccan dry belt, prepared on clay tawa.'
      },
      { 
        kannada: 'ಸಂಜೆ ಆದ್ರೆ ಸಾಕು, ಧಾರವಾಡದಾಗ ಗಿರ್ಮಿಟ್-ಮೆಣಸಿನಕಾಯಿ ಬಜ್ಜಿ ಬೇಕೇ ಬೇಕು!', 
        transliteration: 'Sanje aadre saaku, Dharwad-daaga girmit-menasinakayi bajji bekee beku!', 
        meaning: 'Once evening strikes, puffed rice Girmit with chili fritters is an absolute must in Dharwad!',
        category: 'food',
        district: 'Dharwad',
        culturalNuance: 'The social ritual of gathering around street vendors at sunset.'
      },
      // Everyday Slang & Idioms
      { 
        kannada: 'ಮಸ್ತ ಕೆಲಸ ಮಾಡ್ಯಾನ ನೋಡ್ರಿ ಹುಡುಗ!', 
        transliteration: 'Masta kelasa maadyaana nodree huduga!', 
        meaning: 'Look here, the lad has done an extraordinary job!',
        category: 'slang',
        district: 'Hubballi',
        culturalNuance: '"Masta" is the universal stamp of supreme approval across the North.'
      },
      { 
        kannada: 'ನಂಗ ಗೊತ್ತೇ ಇರಲಿಲ್ಲಪಾ ಇದು, ಈಗ ತಿಳ್ಕೋತೀನಿ!', 
        transliteration: 'Nanga gotthee iralillapa idhu, eega thilkotheeni!', 
        meaning: 'Dear friend, I had no clue about this, I will understand it now!',
        category: 'slang',
        district: 'Belagavi',
        culturalNuance: 'Contraction of "nanage" to "nanga" and "iralilla" with empathetic "-pa".'
      },
      // Travel & Negotiation
      { 
        kannada: 'ಬಸ್ ನಿಲ್ದಾಣಕ್ಕ ಎಷ್ಟು ರೊಕ್ಕ ತಗೋತೀರಿ ಆಟೋದವ್ರೇ?', 
        transliteration: 'Bus nildaanakka eshtu rokka thagotheeri auto-davree?', 
        meaning: 'How much money will you charge to the bus stand, auto driver?',
        category: 'travel',
        district: 'Hubballi',
        culturalNuance: '"Rokka" is the earthy North Karnataka word for hard-earned money.'
      },
      { 
        kannada: 'ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡ್ರಿ ಗೌಡ್ರೇ, ನಾವೂ ನಿಮ್ ಜನಾನೇ!', 
        transliteration: 'Swalpa kadime maadree gowdree, naavoo nim janaane!', 
        meaning: 'Reduce the price a bit, respected sir; after all, we are your own folk!',
        category: 'travel',
        district: 'Bagalkote',
        culturalNuance: 'Bargaining wrapped in community kinship and shared roots.'
      },
      // Proverbs & Wisdom
      { 
        kannada: 'ಹಿರಿಯರ ಮಾತು ಬೆಲ್ಲದ ಹಾಗೆ, ಮೊದಲಿಗೆ ಕಹಿ ಆಮೇಲೆ ಸಿಹಿ', 
        transliteration: 'Hiriyara maatu bellada haage, modalige kahi aamele sihi', 
        meaning: 'Elders wisdom is like raw jaggery—tastes bitter when advised, but sweet in outcome',
        category: 'proverb',
        district: 'Dharwad',
        culturalNuance: 'Profound respect for the collective wisdom of rural grandmothers.'
      },
      { 
        kannada: 'ತುಂಬಿದ ಕೊಡ ತುಳುಕುವುದಿಲ್ಲ', 
        transliteration: 'Thumbida koda thulukuvudilla', 
        meaning: 'A fully filled water pot never spills (The truly wise never brag)',
        category: 'proverb',
        district: 'Gadag',
        culturalNuance: 'Admonition toward humility and measured speech.'
      }
    ],
    culturalHeritage: {
      artForms: ['Hindustani Classical Sangeet (Bhimsen Joshi, Gangubai Hangal)', 'Doddata (Folk Drama)', 'Bayalata'],
      festivals: ['Kittur Utsava', 'Chalukya Utsava at Badami', 'Mahashivaratri Fair'],
      literature: ['Allama Prabhu & Basaveshwara Vachana Movement', 'Da. Ra. Bendre (Naaku Tanti)', 'V.K. Gokak'],
      cuisine: ['Jolada Rotti with Ennegai', 'Shenga Chutney Pudi', 'Dharwad Pedha', 'Girmit & Mirchi Bajji']
    },
    famousProverb: {
      kannada: 'ಹಿರಿಯರ ಮಾತು ಬೆಲ್ಲದ ಹಾಗೆ, ಮೊದಲಿಗೆ ಕಹಿ ಆಮೇಲೆ ಸಿಹಿ',
      transliteration: 'Hiriyara maatu bellada haage, modalige kahi aamele sihi',
      meaning: 'Elders advice is like unrefined jaggery—bitter initially, but richly nourishing in the end.'
    }
  },

  karavali: {
    id: 'karavali',
    name: 'Karavali & Coastal (Kundapura / Udupi / Mangaluru)',
    kannadaName: 'ಕರಾವಳಿ / ಕುಂದಾಪ್ರ - ಮಂಗಳೂರು',
    tagline: 'The Musical, Sing-Song Seacoast Cadence',
    color: '#2E8B57',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    districts: ['Udupi', 'Dakshina Kannada', 'Uttara Kannada'],
    overview: 'A melodic dialect with a distinctive sing-song intonation shaped by coastal trade, Arabian sea breezes, coconut groves, and rich interaction between Tulu, Konkani, and ancient Havyaka Kannada.',
    phoneticFeature: 'Features unique Kundagannada verbal forms such as "popudu" (going), "bappudu" (coming), and colloquial affectionate tags like "maaraya" (dear friend/pal) with rising pitch.',
    greeting: {
      kannada: 'ಎಂತ ಮಾರಾಯ ಸಮಾಚಾರ? ಬರಿ ಬಿಸಿ ಕೂಡು ತಿನ್ರಿ!',
      transliteration: 'Entha maaraya samachara? Bari bisi koodu thinri!',
      meaning: 'What is up, my good friend? Come in and have hot boiled rice!'
    },
    districtProfiles: [
      {
        id: 'kundapura-dist',
        name: 'Kundapura (ಕುಂದಾಪುರ)',
        slang: 'ಎಂತ ಮಾರಾಯ್ರೇ? ಎಲ್ಲಿಗ್ ಪೋಪುದು?',
        specialty: 'The world-famous Kundagannada musical intonation & nasal cadence',
        food: 'Kundapura Chicken Roast, Sajjige-Baji'
      },
      {
        id: 'udupi-dist',
        name: 'Udupi (ಉಡುಪಿ)',
        slang: 'ಮನೆಗೆ ಬರಿ ಬಿಸಿ ಕೂಡು ಉಂಡು ಪೋಯಿ ಬಪ್ಪ!',
        specialty: 'Temple culinary heritage, Ashta Matha traditions & Vedic scholarship',
        food: 'Neer Dosa, Goli Baje, Pelakai Gatti'
      },
      {
        id: 'mangalore-dist',
        name: 'Mangaluru (ಮಂಗಳೂರು)',
        slang: 'ಎಂಚ ಉಲ್ಲರ್? ಕೋರಿ ರೊಟ್ಟಿ ತಿಂದ್ರಾ?',
        specialty: 'Cosmopolitan coast blending Tulu, Beary, Konkani and Coastal Kannada',
        food: 'Kori Rotti, Mangalore Buns, Anjal Fry'
      },
      {
        id: 'uttara-kannada-dist',
        name: 'Gokarna & Karwar (ಉತ್ತರ ಕನ್ನಡ - ಗೋಕರ್ಣ)',
        slang: 'ಹವ್ಯಕ ಶೈಲಿ: ಹೋಯಿ ಬಪ್ಪ ನಾಳೆ ಸಿಗೋಣ!',
        specialty: 'Havyaka Vedic chants, areca nut plantation idioms & coastal folklore',
        food: 'Todadevu, Haladi Ele Kadabu, Patrode'
      }
    ],
    samplePhrases: [
      // Greetings
      { 
        kannada: 'ಎಂತ ಮಾರಾಯ ಸಮಾಚಾರ? ಮನೆಯಲ್ಲೆಲ್ಲ ಕುಶಲವೇ?', 
        transliteration: 'Entha maaraya samachara? Maneyallella kushalave?', 
        meaning: 'What is the news, my good fellow? Is everything peaceful at home?',
        category: 'greetings',
        district: 'Kundapura',
        culturalNuance: '"Entha maaraya" is the undisputed coastal greeting that signals instant brotherly camaraderie.'
      },
      { 
        kannada: 'ಬರಿ ಬಿಸಿ ಕೂಡು, ಕಾಲಿ ಹೊಟ್ಟೇಲಿ ಹೋಗ್ಬಾರ್ದು!', 
        transliteration: 'Bari bisi koodu, kaali hotteli hogbaardu!', 
        meaning: 'Come sit down and have hot rice, one must never depart on an empty stomach!',
        category: 'greetings',
        district: 'Udupi',
        culturalNuance: 'Coastal maternal hospitality considers sending anyone away hungry a cultural taboo.'
      },
      // Food & Cuisine
      { 
        kannada: 'ಅವಲಕ್ಕಿ ಜೊತೆ ಸಜ್ಜಿಗೆ-ಬಜಿ ತಿಂದ್ರೆ ಸ್ವರ್ಗ ಮಾರಾಯ!', 
        transliteration: 'Avalakki jothe sajjige-baji thindre swarga maaraya!', 
        meaning: 'Eating semolina kesari (sajjige) with spiced poha and bhaji is pure heaven!',
        category: 'food',
        district: 'Udupi',
        culturalNuance: 'In coastal Karnataka, sweet semolina halwa is strictly called "Sajjige", paired with savory poha.'
      },
      { 
        kannada: 'ಮಧ್ಯಾಹ್ನ ಬಿಸಿ ಬಿಸಿ ಬಸಲೆ ಗಸಿ ಜೊತೆ ಕುಚುಲಕ್ಕಿ ಗಂಜಿ ಕುಡಿಯೋಣ', 
        transliteration: 'Madhyaahna bisi bisi basale gassi jothe kuchulakki ganji kudiyona', 
        meaning: 'Let us have red boiled rice porridge with Malabar spinach coconut gravy',
        category: 'food',
        district: 'Mangalore',
        culturalNuance: 'Kuchulakki (red parboiled rice) is the bedrock of coastal physical stamina.'
      },
      // Slang & Colloquialisms
      { 
        kannada: 'ಎಲ್ಲಿಗ್ ಪೋಪುದು ನೀವು ಇಷ್ಟ್ ಮಳೇಲಿ?', 
        transliteration: 'Ellig poopudu neevu isht maleli?', 
        meaning: 'Where on earth are you heading in this pouring monsoon rain?',
        category: 'slang',
        district: 'Kundapura',
        culturalNuance: '"Poopudu" is the trademark Kundagannada grammatical conjugation for going.'
      },
      { 
        kannada: 'ತಡಿ ಮಾರಾಯ, ಒಂದು ನಿಮಿಷ! ಯಾಕಿಷ್ಟು ಗಡಿಬಿಡಿ?', 
        transliteration: 'Thadi maaraya, ondu nimisha! Yaakishtu gadibidi?', 
        meaning: 'Hold on friend, just one minute! Why all this rush and panic?',
        category: 'slang',
        district: 'Kundapura',
        culturalNuance: 'Coastal relaxation tempo versus hectic urban rushing.'
      },
      // Travel & Direction
      { 
        kannada: 'ಬಸ್ ಸ್ಟ್ಯಾಂಡ್ ಕಡೆ ಪೋಪ ಗಾಡಿ ಇದುವೇನಾ?', 
        transliteration: 'Bus stand kade popa gaadi idhuveenaa?', 
        meaning: 'Is this the vehicle heading towards the bus stand?',
        category: 'travel',
        district: 'Udupi',
        culturalNuance: 'Inquiring direction with musical coastal cadence.'
      },
      { 
        kannada: 'ಹೋಯಿ ಬಪ್ಪ, ನಾಳೆ ಮಲ್ಪೆ ಬೀಚ್ ಹತ್ರ ಸಿಗೋಣ', 
        transliteration: 'Hoyi bappa, naale Malpe beach hathra sigona', 
        meaning: 'I shall go and return safely; let us catch up tomorrow near Malpe Beach',
        category: 'travel',
        district: 'Udupi',
        culturalNuance: 'Saying "Hoyi bappa" avoids the inauspicious finality of "Hoguttene".'
      },
      // Proverbs & Coastal Wisdom
      { 
        kannada: 'ಉಪ್ಪು ತಿಂದವ ನೀರು ಕುಡಿಯಲೇಬೇಕು', 
        transliteration: 'Uppu thindava neeru kudiyalebeku', 
        meaning: 'Whoever eats salt must inevitably drink water (Every action brings its inevitable reckoning)',
        category: 'proverb',
        district: 'Mangalore',
        culturalNuance: 'Seaside moral axiom taught to children regarding ethical conduct.'
      },
      { 
        kannada: 'ಸಮುದ್ರಕ್ಕೆ ಈಜು ಕಲಿಸಬೇಕಿಲ್ಲ', 
        transliteration: 'Samudrakke eeju kalisabekilla', 
        meaning: 'You do not need to teach swimming to the ocean (Do not lecture the master of a craft)',
        category: 'proverb',
        district: 'Karwar',
        culturalNuance: 'Respect for seasoned fishermen and experienced elders.'
      }
    ],
    culturalHeritage: {
      artForms: ['Yakshagana (Thenku & Badagu Thittu)', 'Kambala Buffalo Race', 'Bhoota Kola'],
      festivals: ['Udupi Paryaya Festival', 'Karavali Utsava', 'Nagara Panchami'],
      literature: ['Kota Shivarama Karanth (Chomana Dudi, Mookajjiya Kanasugalu)', 'Kayyara Kinhanna Rai'],
      cuisine: ['Neer Dosa with Gassi', 'Kori Rotti', 'Mangalore Buns', 'Patrode', 'Kundapura Chicken Roast']
    },
    famousProverb: {
      kannada: 'ಉಪ್ಪು ತಿಂದವ ನೀರು ಕುಡಿಯಲೇಬೇಕು',
      transliteration: 'Uppu thindava neeru kudiyalebeku',
      meaning: 'Whoever eats salt must drink water (Actions always carry inevitable consequences).'
    }
  },

  kalyana_karnataka: {
    id: 'kalyana_karnataka',
    name: 'Kalyana Karnataka (Kalaburagi / Bidar / Raichur)',
    kannadaName: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ (ಕಲಬುರಗಿ - ಬೀದರ್)',
    tagline: 'The Confluence of Sharanas & Historic Deccan Splendor',
    color: '#B8860B',
    badgeColor: 'bg-yellow-600/20 text-yellow-300 border-yellow-600/40',
    districts: ['Kalaburagi', 'Bidar', 'Raichur', 'Koppal', 'Yadgir', 'Ballari'],
    overview: 'A historic linguistic melting pot where 12th-century Sharana egalitarian philosophy intersects with Deccan multilingual trade vocabulary, Gol Gumbaz heritage, and Krishna-Tungabhadra river cultures.',
    phoneticFeature: 'Employs crisp words like "barabar" (exact/spot-on), "kaay" (what), "dostha" (trusted friend), and contracted verbs like "hogodilla" -> "hogo-illa" with a resonant plateau echo.',
    greeting: {
      kannada: 'ಆರಾಮ ಅದೀರೇನು ದೋಸ್ತಾ? ಬರಾಬರ್ ಟೈಮ್‌ಗೆ ಬಂದೀರಿ!',
      transliteration: 'Aaraam adeereenu dostha? Barabar time-ge bandeeri!',
      meaning: 'Are you doing well, buddy? You arrived at the exact right moment!'
    },
    districtProfiles: [
      {
        id: 'kalaburagi-dist',
        name: 'Kalaburagi (ಕಲಬುರಗಿ)',
        slang: 'ಖರೇ ಮಾತೇ ಹೇಳಕತ್ತೀನಿ, ಬರಾಬರ್ ಕೆಲಸ ಮಾಡು!',
        specialty: 'Sharana Basaveshwara sanctuary & Deccan black soil idioms',
        food: 'Malghetti Rotti, Shenga Holige, Kalaburagi Malpuri'
      },
      {
        id: 'bidar-dist',
        name: 'Bidar (ಬೀದರ್)',
        slang: 'ಕಾಯ್ ದೋಸ್ತ, ಕೋಟೆ ಕಡೆ ಹೋಗೊನ್ವಾ ಇವತ್ತು?',
        specialty: 'Crown of Karnataka: Bahmani architecture & Bidri silver craft vocabulary',
        food: 'Bidar Khaja, Poha-Chivda, Dalcha'
      },
      {
        id: 'raichur-dist',
        name: 'Raichur & Yadgir (ರಾಯಚೂರು - ಯಾದಗಿರಿ)',
        slang: 'ಬಿಸಿಲು ಕೆಂಡದಂಗ ಐತಿ, ತಂಪು ಮಜ್ಜಿಗೆ ಕುಡೀರಿ!',
        specialty: 'Doab river confluence & ancient Vijayanagara copper inscriptions',
        food: 'Rotti with Jhunka, Kempu Chutney'
      },
      {
        id: 'ballari-dist',
        name: 'Ballari (ಬಳ್ಳಾರಿ)',
        slang: 'ಹಂಪಿಯ ನೆನಪು ನಮ್ ರಕ್ತದಲ್ಲೇ ಐತಿ ದೋಸ್ತ!',
        specialty: 'Hampi world heritage & mining heartland energy',
        food: 'Ballari Cycle Khova, Kadubu'
      }
    ],
    samplePhrases: [
      // Greetings
      { 
        kannada: 'ಆರಾಮ ಅದೀರೇನು ದೋಸ್ತ? ಮನೆಯಾಗ ಎಲ್ಲಾ ಸುಖನಾ?', 
        transliteration: 'Aaraam adeereenu dosta? Maneyaaga ellaa sukhanaa?', 
        meaning: 'Are you doing well, my dear friend? Is everyone at home joyful and safe?',
        category: 'greetings',
        district: 'Kalaburagi',
        culturalNuance: '"Dosta" (companion) reflects centuries of harmonious Deccan camaraderie.'
      },
      { 
        kannada: 'ಬರಾಬರ್ ಟೈಮ್‌ಗೆ ಬಂದೀರಿ, ಈಗಲೇ ಚಹಾ ಕುಡಿಯೋಣ', 
        transliteration: 'Baraabar time-ge bandeeri, eegale chaha kudiyona', 
        meaning: 'You arrived at the exact perfect minute; let us share tea right now',
        category: 'greetings',
        district: 'Bidar',
        culturalNuance: '"Baraabar" is the universal expression of precision across Kalyana Karnataka.'
      },
      // Food & Hospitality
      { 
        kannada: 'ಬಿಸಿಯಾದ ಮಲ್ಘಟ್ಟಿ ರೊಟ್ಟಿ ಜೊತೆ ಕೆಂಪು ಖಾರ ಚಟ್ನಿ ಉಣ್ಣಿ!', 
        transliteration: 'Bisiyaada malghetti rotti jothe kempu khaara chutney unni!', 
        meaning: 'Savor the hot thick multi-grain flatbread with spicy red chili chutney!',
        category: 'food',
        district: 'Kalaburagi',
        culturalNuance: 'Malghetti rotti provides deep endurance against the searing Deccan heat.'
      },
      { 
        kannada: 'ಬೀದರ್ ಖಾಜಾ ತಿಂದ್ಮೇಲೆ ಸಿಹಿ ನೆನಪು ಎಂದಿಗೂ ಮರೆಯಲ್ಲ', 
        transliteration: 'Bidar Khaja thindmele sihi nenapu endigoo mareyalla', 
        meaning: 'Once you taste flaky layered Bidar Khaja sweet, you will never forget it',
        category: 'food',
        district: 'Bidar',
        culturalNuance: 'Famous century-old heritage sweet prepared with layered pastry.'
      },
      // Slang & Dialect Nuances
      { 
        kannada: 'ಖರೇ ಮಾತೇ ಹೇಳಕತ್ತೀನಿ, ಇಲ್ಲಿ ಕಳ್ಳತನ ನಡೆಯಲ್ಲ!', 
        transliteration: 'Kharee maathee helakattheeni, illi kallathana nadeyalla!', 
        meaning: 'I am speaking the absolute unvarnished truth, trickery will never fly here!',
        category: 'slang',
        district: 'Kalaburagi',
        culturalNuance: '"Kharee maatu" denotes uncompromising straightforward honesty.'
      },
      { 
        kannada: 'ಕಾಯ್ ಮಾಡೋನು ಇವತ್ತು ಹೇಳ್ರಿ ದೋಸ್ತಾ?', 
        transliteration: 'Kaay maadoonu ivatthu helree dostha?', 
        meaning: 'Tell me pal, what plan shall we execute today?',
        category: 'slang',
        district: 'Bidar',
        culturalNuance: '"Kaay" replaces standard "Enu" through northern border linguistic synthesis.'
      },
      // Travel & Trade
      { 
        kannada: 'ರೈಲ್ವೆ ಸ್ಟೇಷನ್‌ಗೆ ಬರಾಬರ್ ರೇಟ್ ಹೇಳ್ರಿ!', 
        transliteration: 'Railway station-ge baraabar rate helree!', 
        meaning: 'Quote the exact honest fare to the railway station, please!',
        category: 'travel',
        district: 'Raichur',
        culturalNuance: 'Demanding fair, transparent pricing without hidden markups.'
      },
      { 
        kannada: 'ಬೇಗ ನಡೀರಿ, ಬಸ್ಸು ಬಿಟ್ಬುಟ್ಟೀತು!', 
        transliteration: 'Bega nadeeri, bussu bitbuttheethu!', 
        meaning: 'Walk quickly, the bus will leave us behind!',
        category: 'travel',
        district: 'Yadgir',
        culturalNuance: 'Urgent transit pacing across sprawling plateau districts.'
      },
      // Proverbs & Sharana Thought
      { 
        kannada: 'ಕಾಯಕವೇ ಕೈಲಾಸ', 
        transliteration: 'Kayakave Kailasa', 
        meaning: 'Selfless, dedicated labor is itself the highest divine abode',
        category: 'proverb',
        district: 'Kalaburagi',
        culturalNuance: 'The revolutionary 12th-century philosophical foundation laid by Basaveshwara.'
      },
      { 
        kannada: 'ಮನ ಶುದ್ಧವಿಲ್ಲದವನ ಭಕ್ತಿ ವ್ಯರ್ಥ', 
        transliteration: 'Mana shuddhavilladavana bhakti vyartha', 
        meaning: 'Devotion without internal purity of heart is totally hollow',
        category: 'proverb',
        district: 'Bidar',
        culturalNuance: 'Vachana movement critique of outward hypocrisy.'
      }
    ],
    culturalHeritage: {
      artForms: ['Bidri Metal Inlay Work', 'Tatvapadagalu (Mystic folk poetry)', 'Gondhali Folk Balladeers'],
      festivals: ['Sharana Basaveshwara Jathra', 'Bidar Fort Utsava', 'Hampi Utsav Celebration'],
      literature: ['Akka Mahadevi & Chennabasavanna Vachana Corpus', 'Sufi Kannada Synthesis (Shishunala Sharif)'],
      cuisine: ['Jowar Rotti with Shengad Chutney', 'Malghetti Rotti', 'Kalaburagi Malpuri', 'Bidar Khaja']
    },
    famousProverb: {
      kannada: 'ಕಾಯಕವೇ ಕೈಲಾಸ',
      transliteration: 'Kayakave Kailasa',
      meaning: 'Dedicated, selfless work is itself the highest divine abode (Basavanna).'
    }
  },

  bengaluru: {
    id: 'bengaluru',
    name: 'Bengaluru Urban & Slang (ನಮ್ಮ ಬೆಂಗಳೂರು)',
    kannadaName: 'ಬೆಂಗಳೂರು ನಗರ ಮತ್ತು ಯೂತ್ ಸ್ಲ್ಯಾಂಗ್',
    tagline: 'The Cosmopolitan, High-Energy Tech & Street Melting Pot',
    color: '#E06D53',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
    districts: ['Bengaluru Urban', 'Bengaluru South', 'Bengaluru North', 'Bengaluru Rural'],
    overview: 'The pulsing urban lingo spoken across IT parks, auto stands, college canteens, and Darshini cafes. Fast, witty, hyper-expressive, and packed with clever street metaphors.',
    phoneticFeature: 'Effortless blend of Kannada grammar with tech terminology, punchy colloquial shorteners ("scene illa", "maga", "chindi", "guru"), and classic rhetorical tag questions ("alwa?", "kano?").',
    greeting: {
      kannada: 'ಏನ್ ಮಗಾ ಹೆಂಗಿದ್ದೀಯಾ? ಒಂದು ಹಾಫ್ ಬೈ ಟೂ ಕಾಫಿ ಕುಡಿಯೋಣ್ವಾ?',
      transliteration: 'Een maga hengiddiya? Ondu half-by-two coffee kudiyonwa?',
      meaning: 'Hey bro, how are you doing? Shall we split a half-by-two filter coffee?'
    },
    districtProfiles: [
      {
        id: 'central-blr-dist',
        name: 'Central & South Bengaluru (ಬಸವನಗುಡಿ - ಜಯನಗರ)',
        slang: 'ಬಿಸಿ ಬಿಸಿ ಮಸಾಲೆ ದೋಸೆ ಜೊತೆ ಫಿಲ್ಟರ್ ಕಾಫಿ ಸೀನ್!',
        specialty: 'Traditional heritage darshinis, Kannada Sahitya Parishat & book stalls',
        food: 'Vidyarthi Bhavan Masala Dosa, Filter Kaapi'
      },
      {
        id: 'malleshwaram-dist',
        name: 'Malleshwaram & Rajajinagar (ಮಲ್ಲೇಶ್ವರಂ)',
        slang: 'ಸಿಟಿ ಮಾರ್ಕೆಟ್ ಕಡೆ ಹೋದ್ವಾ ಗುರು? ಫುಲ್ ರಶ್!',
        specialty: 'Old-world residential charm, classical music festivals & flower markets',
        food: 'CTR Benne Masala Dosa, Veena Stores Idli-Vada'
      },
      {
        id: 'tech-corridor-dist',
        name: 'Tech Corridor & Indiranagar (ಇಂದಿರಾನಗರ - ಕೋರಮಂಗಲ)',
        slang: 'ಮೀಟಿಂಗ್ ಮುಗೀತು, ಪ್ರಾಜೆಕ್ಟ್ ಚಿಂದಿ ಗುರು!',
        specialty: 'Startup hustlers, bilingual code-switching & weekend youth culture',
        food: 'Rameshwaram Ghee Podi Idli, Craft Soda'
      },
      {
        id: 'pete-dist',
        name: 'Bengaluru Pete & Market (ಚಿಕ್ಕಪೇಟೆ - ಮೆಜೆಸ್ಟಿಕ್)',
        slang: 'ಮೀಟರ್ ಹಾಕಿ ಬನ್ನಿ ಬಾಸ್, ಟ್ರಾಫಿಕ್ ಜಾಸ್ತಿ ಐತೆ!',
        specialty: 'Commercial trading center founded by Kempegowda, busy auto transit corridors',
        food: 'Khara Bath, Kesari Bath, Congress Kadlekai'
      }
    ],
    samplePhrases: [
      // Greetings
      { 
        kannada: 'ಏನ್ ಮಗಾ ಹೆಂಗಿದ್ದೀಯಾ? ಮನೇಲಿ ಎಲ್ಲ ಸೀನ್ ಸಾರ್ಟೆಡ್ ಅಲ್ವಾ?', 
        transliteration: 'Een maga hengiddiya? Maneli ella scene sorted alwaa?', 
        meaning: 'Hey bro, how are you? Everything at home is totally sorted out, right?',
        category: 'greetings',
        district: 'Tech Corridor',
        culturalNuance: '"Maga" (literally son) is the universal address of informal brotherhood in Bangalore youth Kannada.'
      },
      { 
        kannada: 'ಹಾಫ್ ಬೈ ಟೂ ಕಾಫಿ ತಗಳ್ವಾ ಗುರು? ಮಸ್ತ್ ರಿಲ್ಯಾಕ್ಸ್ ಆಗುತ್ತೆ', 
        transliteration: 'Half-by-two coffee thagalwaa guru? Mast relax aagutthe', 
        meaning: 'Shall we split a half-by-two coffee bro? It will be deeply relaxing',
        category: 'greetings',
        district: 'Central BLR',
        culturalNuance: 'Ordering one tumbler split into two cups is the iconic Darshini social ritual.'
      },
      // Food & Darshini Culture
      { 
        kannada: 'ಬಿಸಿ ಬಿಸಿ ತುಪ್ಪದ ಬೆಣ್ಣೆ ದೋಸೆ ಜೊತೆ ಗಟ್ಟಿ ತೆಂಗಿನಕಾಯಿ ಚಟ್ನಿ ತಿನ್ನೋಣ್ವಾ?', 
        transliteration: 'Bisi bisi thuppada benne dose jothe gatti thenginakaayi chutney thinnonwa?', 
        meaning: 'Shall we eat piping hot butter roast dosa with thick coconut chutney?',
        category: 'food',
        district: 'Malleshwaram',
        culturalNuance: 'Bengaluru weekend breakfast ritual immortalized at CTR and Vidyarthi Bhavan.'
      },
      { 
        kannada: 'ಒಂದು ಚೌ-ಚೌ ಬಾತ್ ಕೊಡಿ ಬಾಸ್ (ಖಾರಾಬಾತ್ + ಕೇಸರಿಬಾತ್)!', 
        transliteration: 'Ondu chow-chow bath kodi boss (Kharabath + Kesaribath)!', 
        meaning: 'Give me one Chow-Chow bath, boss (savory upma paired with sweet semolina)!',
        category: 'food',
        district: 'Pete / Majestic',
        culturalNuance: 'The ultimate twin-flavored Karnataka breakfast platter invention.'
      },
      // Street Slang & Youth Idioms
      { 
        kannada: 'ಚಿಂದಿ ಚಿತ್ರಾನ್ನ ಆಗ್ಬಿಟ್ಟಿದೆ ಗುರು ಇವತ್ತಿನ ಮ್ಯಾಚ್!', 
        transliteration: 'Chindi chithranna aagbittidhe guru ivatthina match!', 
        meaning: 'Todays cricket match was completely mindblowing and epic bro!',
        category: 'slang',
        district: 'Central BLR',
        culturalNuance: '"Chindi" translates to something extraordinary, unbelievable, and triumphant.'
      },
      { 
        kannada: 'ಸೀನ್ ಇಲ್ಲ ಬಿಡು ಗುರು, ಎಲ್ಲ ಒಂದ್ ಕೈ ನೋಡ್ಕೊಳ್ಳೋಣ!', 
        transliteration: 'Scene illa bidu guru, ella ond kai nodkolloana!', 
        meaning: 'Zero worries brother, we will handle and solve everything effortlessly!',
        category: 'slang',
        district: 'Tech Corridor',
        culturalNuance: 'Urban reassuring statement indicating no tension is insurmountable.'
      },
      // Travel & Auto Negotiation
      { 
        kannada: 'ಮೀಟರ್ ಮೇಲೆ ಒಂದ್ ಇಪ್ಪತ್ ರೂಪಾಯಿ ಎಕ್ಸ್ಟ್ರಾ ತಗೊಳ್ಳಿ ಬಾಸ್, ನಿಲ್ದಾಣಕ್ಕೆ ಹೋಗ್ಬೇಕು!', 
        transliteration: 'Meter mele ond ippath roopaayi extra thagolli boss, nildaanakke hogbeku!', 
        meaning: 'Take twenty rupees extra on top of the meter boss, I really need to reach the station!',
        category: 'travel',
        district: 'Pete / Majestic',
        culturalNuance: 'The everyday compromise between commuters and Bengaluru auto drivers in peak hours.'
      },
      { 
        kannada: 'ಸಿಲ್ಕ್ ಬೋರ್ಡ್ ಸಿಗ್ನಲ್ ಹತ್ರ ಬೇಜಾನ್ ಟ್ರಾಫಿಕ್ ಗುರು, ಮೆಟ್ರೋ ತಗೋ!', 
        transliteration: 'Silk Board signal hathra beejaan traffic guru, Metro thago!', 
        meaning: 'Massive traffic jam near Silk Board junction bro, better take Namma Metro!',
        category: 'travel',
        district: 'Tech Corridor',
        culturalNuance: 'Silk Board is Bengaluru’s most famous shared commuting struggle.'
      },
      // Proverbs & Urban Philosophy
      { 
        kannada: 'ಮಾತೇ ಮುತ್ತು, ಮಾತೇ ಮೃತ್ಯು', 
        transliteration: 'Maathe mutthu, maathe mruthyu', 
        meaning: 'Spoken words can be radiant pearls or lethal poison (Speak with caution and grace)',
        category: 'proverb',
        district: 'Central BLR',
        culturalNuance: 'Reminding cosmopolitan youths that tone defines relationships.'
      },
      { 
        kannada: 'ಉಳ್ಳವರು ಶಿವಾಲಯ ಮಾಡುವರು, ನಾನೇನ ಮಾಡುವೆ ಬಡವನಯ್ಯ', 
        transliteration: 'Ullavaru shivaalaya maaduvaru, naaneena maaduve badavanayya', 
        meaning: 'The wealthy erect stone temples; what shall I build, an impoverished soul? My own body is the shrine',
        category: 'proverb',
        district: 'Basavanagudi',
        culturalNuance: 'Famous vachana frequently recited in Bengaluru literary debates.'
      }
    ],
    culturalHeritage: {
      artForms: ['Bengaluru Karaga Shaktyotsava (Oldest festival of the city)', 'Street Theatre (Beedi Nataka)', 'Indie Kannada Hip-Hop & Rock'],
      festivals: ['Kadalekai Parishe (Groundnut Fair at Basavanagudi)', 'Bengaluru Habba', 'Karaga Jathre'],
      literature: ['Masti Venkatesha Iyengar', 'G.P. Rajarathnam (Ratnana Padagalu - Bangalore Kannada poetry)'],
      cuisine: ['Vidyarthi Bhavan Crispy Masala Dosa', 'Filter Kaapi', 'Chow Chow Bath', 'Congress Kadlekai']
    },
    famousProverb: {
      kannada: 'ಮಾತೇ ಮುತ್ತು, ಮಾತೇ ಮೃತ್ಯು',
      transliteration: 'Maathe mutthu, maathe mruthyu',
      meaning: 'Words can be as precious as pearls, or as destructive as poison (Speak mindfully).'
    }
  }
};
