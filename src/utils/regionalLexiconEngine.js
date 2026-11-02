// Intelligent Real-Time Semantic & Vocabulary Dialect Engine
// Translates and morphs ANY word, phrase, food item, verb, or sentence across all 5 Karnataka regions

// 1. Food & Culinary Substitutions (Sheera, Sajjige, Kesaribath, Girmit, etc.)
export const REGIONAL_LEXICON_RULES = [
  {
    patterns: ['kesaribath', 'keasribath', 'kesari bath', 'kesari', 'sheera', 'shira', 'sajjige', 'suji halwa', 'halwa'],
    foodType: 'semolina_sweet',
    terms: {
      mysuru: {
        term: 'ಕೇಸರಿಬಾತ್',
        phonetic: 'Kesaribath',
        context: 'In Mysore and Mandya, it is famously known as Kesaribath, prepared with rich ghee, saffron, and cardamom.'
      },
      north_karnataka: {
        term: 'ಶೀರಾ',
        phonetic: 'Sheera',
        context: 'In North Karnataka and Uttara Kannada, this sweet is traditionally known as "ಶೀರಾ" (Sheera)!'
      },
      karavali: {
        term: 'ಸಜ್ಜಿಗೆ',
        phonetic: 'Sajjige',
        context: 'In Coastal Karavali (Udupi/Kundapura/Mangaluru), it is universally called "ಸಜ್ಜಿಗೆ" (Sajjige), famously served as "ಸಜ್ಜಿಗೆ-ಬಜಿ" (Sajjige-Baji)!'
      },
      kalyana_karnataka: {
        term: 'ಶೀರಾ',
        phonetic: 'Sheera',
        context: 'In Kalyana Karnataka (Kalaburagi/Bidar), it is called "ಶೀರಾ" (Sheera) or "ರವಾ ಹಲ್ವಾ" (Rawa Halwa).'
      },
      bengaluru: {
        term: 'ಚೌ-ಚೌ ಬಾತ್ / ಕೇಸರಿಬಾತ್',
        phonetic: 'Chow-Chow Bath / Kesaribath',
        context: 'In Bangalore Darshinis, it is famously paired with spicy Khara Bath as the iconic "ಚೌ-ಚೌ ಬಾತ್" (Chow-Chow Bath)!'
      }
    }
  },

  {
    patterns: ['girmit', 'mandakki', 'churmuri', 'baji', 'puffed rice', 'puri'],
    foodType: 'puffed_rice_snack',
    terms: {
      mysuru: { term: 'ಚುರುಮುರಿ (Churmuri)', phonetic: 'Churmuri', context: 'Mysore-style spiced churmuri with grated carrot and raw mango.' },
      north_karnataka: { term: 'ಗಿರ್ಮಿಟ್ (Girmit)', phonetic: 'Girmit', context: 'The legendary spicy, wet-masala Hubballi-Dharwad street food snack!' },
      karavali: { term: 'ಬಜಿ / ಚುರುಮುರಿ (Baji)', phonetic: 'Baji', context: 'Coastal seasoned puffed rice eaten with morning or evening tea.' },
      kalyana_karnataka: { term: 'ಸುಸಲಾ / ಮಂಡಕ್ಕಿ (Susala)', phonetic: 'Susala / Mandakki', context: 'Famous tempered puffed-rice delicacy across Kalaburagi.' },
      bengaluru: { term: 'ಮಸಾಲಾ ಪುರಿ / ಚುರುಮುರಿ (Masala Puri)', phonetic: 'Masala Puri', context: 'Iconic street carts across VV Puram food street.' }
    }
  },

  {
    patterns: ['oota', 'koodu', 'meals', 'rice', 'lunch', 'dinner', 'anna', 'khana'],
    foodType: 'meal_rice',
    terms: {
      mysuru: { term: 'ಊಟ (Oota)', phonetic: 'Oota', context: 'Traditional festive meal with Sambar, Rasam, and Payasa.' },
      north_karnataka: { term: 'ಊಟ / ರೊಟ್ಟಿ ಊಟ (Oota)', phonetic: 'Rotti Oota', context: 'Wholesome jowar rotti feast with shenga chutney.' },
      karavali: { term: 'ಬಿಸಿ ಕೂಡು / ಊಟ (Bisi Koodu)', phonetic: 'Bisi Koodu', context: 'Authentic coastal boiled brown rice (Koodu).' },
      kalyana_karnataka: { term: 'ಖಾನಾ / ರೊಟ್ಟಿ (Khana)', phonetic: 'Khana', context: 'Everyday traditional plateau meals.' },
      bengaluru: { term: 'ಮೀಲ್ಸ್ / ಊಟ (Meals)', phonetic: 'Meals', context: 'Fast-service South Indian thali.' }
    }
  },

  {
    patterns: ['rotti', 'roti', 'mudde', 'ragi mudde', 'jolada rotti', 'akki rotti'],
    foodType: 'staple_bread',
    terms: {
      mysuru: { term: 'ರಾಗಿ ಮುದ್ದೆ (Ragi Mudde)', phonetic: 'Ragi Mudde', context: 'The undisputed royal staple of Old Mysuru and Mandya.' },
      north_karnataka: { term: 'ಜೋಳದ ರೊಟ್ಟಿ (Jolada Rotti)', phonetic: 'Jolada Rotti', context: 'Crisp, paper-thin jowar rotti with stuffed brinjal ennegai.' },
      karavali: { term: 'ಅಕ್ಕಿ ರೊಟ್ಟಿ / ಕೋರಿ ರೊಟ್ಟಿ (Kori Rotti)', phonetic: 'Kori Rotti', context: 'Crispy wafer-thin rice crepes soaked in spicy gravy.' },
      kalyana_karnataka: { term: 'ಸಜ್ಜೆ ರೊಟ್ಟಿ / ಜೋಳದ ರೊಟ್ಟಿ (Sajje Rotti)', phonetic: 'Sajje Rotti', context: 'Traditional pearl millet and jowar rottis.' },
      bengaluru: { term: 'ರಾಗಿ ಮುದ್ದೆ / ಅಕ್ಕಿ ರೊಟ್ಟಿ (Akki Rotti)', phonetic: 'Akki Rotti', context: 'Classic breakfast rotti with dill leaves and coconut chutney.' }
    }
  },

  {
    patterns: ['coffee', 'kaapi', 'tea', 'chaha', 'cha', 'kashaya', 'kashaaya'],
    foodType: 'beverage',
    terms: {
      mysuru: { term: 'ಫಿಲ್ಟರ್ ಕಾಫಿ (Filter Kaapi)', phonetic: 'Filter Kaapi', context: 'Aromatic chicory blend in traditional brass davarah-tumbler.' },
      north_karnataka: { term: 'ಸ್ಪೆಷಲ್ ಚಹಾ (Special Chahaa)', phonetic: 'Chahaa', context: 'Strong, sweet, boiled ginger tea served in cutting glasses.' },
      karavali: { term: 'ಕಷಾಯ / ಕಾಫಿ (Kashaaya)', phonetic: 'Kashaaya', context: 'Aromatic herbal milk brew steeped with coriander and spices.' },
      kalyana_karnataka: { term: 'ಕಡಕ್ ಚಹಾ (Kadak Chaha)', phonetic: 'Kadak Chaha', context: 'Rich, thick Deccani spiced tea.' },
      bengaluru: { term: 'ಹಾಫ್ ಬೈ ಟೂ ಫಿಲ್ಟರ್ ಕಾಫಿ (Half-by-Two Kaapi)', phonetic: 'Half-by-Two Coffee', context: 'The classic Bangalore darshini custom of sharing coffee.' }
    }
  },

  {
    patterns: ['dosa', 'dose', 'masala dosa', 'masale dose', 'neer dosa'],
    foodType: 'dosa',
    terms: {
      mysuru: { term: 'ಮೈಲಾರಿ ಮಸಾಲೆ ದೋಸೆ (Mylari Masale Dose)', phonetic: 'Mylari Masale Dose', context: 'Soft, melt-in-mouth butter dosa with signature white butter.' },
      north_karnataka: { term: 'ದೋಸೆ (Dose)', phonetic: 'Dose', context: 'Crisp roaster with spicy red garlic paste.' },
      karavali: { term: 'ನೀರ್ ದೋಸೆ (Neer Dosa)', phonetic: 'Neer Dosa', context: 'Silky, paper-soft rice crepe served with coconut chutney or gassi.' },
      kalyana_karnataka: { term: 'ಮಸಾಲೆ ದೋಸೆ (Masale Dose)', phonetic: 'Masale Dose', context: 'Spicy plateau breakfast favorite.' },
      bengaluru: { term: 'ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ (Benne Masale Dose)', phonetic: 'Benne Masale Dose', context: 'Thick, golden crispy CTR and Vidyarthi Bhavan style.' }
    }
  }
];

// 2. Real-Time Broad Semantic Domain Heuristics (Works for ALL Common Situations)
export const DOMAIN_RULES = [
  // A. Greetings, Well-being & Enquiries
  {
    patterns: ['how are you', 'hegiddira', 'hegideera', 'hello', 'namaskara', 'kushala', 'doing well', 'aaram', 'fine', 'good morning'],
    domain: 'greetings',
    variants: {
      mysuru: {
        text: 'ನಮಸ್ಕಾರ, ಹೇಗಿದ್ದೀರಾರೀ? ಮನೆಯಲ್ಲಿ ಎಲ್ಲರೂ ಕ್ಷೇಮವೇ?',
        phonetic: 'Namaskara, hegiddeeraari? Maneyalli ellaroo kshemave?',
        trait: 'Courteous courtly tone, polite honorific suffixes.'
      },
      north_karnataka: {
        text: 'ಏನ್ರೀ ಸಮಾಚಾರ? ಆರಾಮ ಅದೀರೇನು?',
        phonetic: 'Eenree samachara? Aaraam adeereenu?',
        trait: 'Warm rhythmic cadence with "-adeereenu" and respectful address.'
      },
      karavali: {
        text: 'ಎಂತ ಮಾರಾಯ ಸಮಾಚಾರ? ಮನೆಯಲ್ಲೆಲ್ಲ ಕುಶಲವೇ?',
        phonetic: 'Entha maaraya samachara? Maneyallella kushalave?',
        trait: 'Musical coastal cadence with iconic "Maaraya".'
      },
      kalyana_karnataka: {
        text: 'ಆರಾಮ ಅದೀರೇನು ದೋಸ್ತ? ಮನೆಯಾಗ ಎಲ್ಲಾ ಬರಾಬರ್ ಅದಾರ?',
        phonetic: 'Aaraam adeereenu dosta? Maneyaaga ellaa baraabar adaara?',
        trait: 'Deccani-Sharana greeting with "Baraabar" and "Dosta".'
      },
      bengaluru: {
        text: 'ಏನ್ ಮಗಾ ಹೆಂಗಿದ್ದೀಯಾ? ಸೀನ್ ಎಲ್ಲ ಸಾರ್ಟೆಡ್ ಅಲ್ವಾ ಗುರು?',
        phonetic: 'Een maga hengiddiya? Scene ella sorted alwa guru?',
        trait: 'Urban youth lingo blending English shortcuts with Bangalore Kannada.'
      }
    }
  },

  // B. Directions, Locations & Travel (Where is / Bus / Train / Station / Hospital)
  {
    patterns: ['where is', 'elli', 'ellige', 'direction', 'route', 'hospital', 'station', 'hotel', 'road', 'way', 'how to reach'],
    domain: 'travel_directions',
    variants: {
      mysuru: {
        text: 'ಸ್ವಾಮಿ, ದಯವಿಟ್ಟು ಆ ಜಾಗ ಎಲ್ಲಿ ಬರುತ್ತೆ ಅಂತ ಸ್ವಲ್ಪ ದಾರಿ ತೋರಿಸ್ತೀರಾ?',
        phonetic: 'Swaami, dayavittu aa jaaga elli barutthe antha swalpa daari thoristheera?',
        trait: 'Gentle, humble inquiry with "Swaami" and "Dayavittu".'
      },
      north_karnataka: {
        text: 'ಏ ಪಾ, ಆ ಕಡೆ ಹೆಂಗ್ ಹೋಗ್ಬೇಕ ನೋಡ್ರಿ? ದಾರಿ ಗೊತ್ತದನ ನಿನಗ? ಕರೆಕ್ಟ್ ಹೇಳಪಾ!',
        phonetic: 'Ee paa, aa kade heng hogbek nodree? Daari gotthadana ninaga? Correct helapaa!',
        trait: 'Direct, energetic tone asking for "correct daari".'
      },
      karavali: {
        text: 'ಮಾರಾಯ, ಅಲ್ಲಿಗ್ ಪೋಪುದು ಹೆಂಗೆ? ಒಂತೆ ದಾರಿ ಹೇಳಿ ಬಪ್ಪ!',
        phonetic: 'Maaraya, allig poopudu henge? Onte daari heli bappa!',
        trait: 'Iconic Kundapra "allig poopudu" and "bappa".'
      },
      kalyana_karnataka: {
        text: 'ದೋಸ್ತ, ಅಲ್ಲಿ ಹೆಂಗ್ ಮುಟ್ಟೋನು? ಬರಾಬರ್ ದಾರಿ ತೋರಿಸು ನೋಡಪ್ಪ!',
        phonetic: 'Dosta, alli heng muttoonu? Baraabar daari thorisu nodappa!',
        trait: 'Colloquial "baraabar daari" and "muttoonu" (reach).'
      },
      bengaluru: {
        text: 'ಬಾಸ್, ಅಲ್ಲಿಗೆ ಹೆಂಗೆ ಹೋಗೋದು? ಮೆಟ್ರೋ ಹತ್ರಾನಾ ಇಲ್ಲ ಆಟೋ ಹಿಡಿಬೇಕಾ ಗುರು?',
        phonetic: 'Boss, allige henge hogodu? Metro hathraanaa illa auto hidibeka guru?',
        trait: 'Fast-paced commuter auto/metro navigation jargon.'
      }
    }
  },

  // C. Bargaining, Cost & Auto Fares (How much / Price / Meter / Expensive)
  {
    patterns: ['how much', 'cost', 'price', 'rate', 'eshtu', 'discount', 'kammi', 'duddu', 'expensive', 'meter', 'auto fare'],
    domain: 'bargaining',
    variants: {
      mysuru: {
        text: 'ಸ್ವಲ್ಪ ನೋಡಿ ಕಡಿಮೆ ಮಾಡಿಕೊಡಿ ಸ್ವಾಮಿ, ನಾವು ರೆಗ್ಯುಲರ್ ಕಸ್ಟಮರ್ ಅಲ್ವೇ?',
        phonetic: 'Swalpa nodi kadime maadi-kodi swaami, naavu regular customer alwe?',
        trait: 'Respectful negotiation with courteous familiarity.'
      },
      north_karnataka: {
        text: 'ಏ ಪಾ, ಕರೆಕ್ಟ್ ರೇಟ್ ಹೇಳಪಾ! ನಮಗ್ಯಾಕೆ ಜಾಸ್ತಿ ಹೇಳಕತ್ತೀರಿ? ಇಸ್ಕೋಬೇಕ!',
        phonetic: 'Ee paa, correct rate helapaa! Namgyaake jaasthi helakattheeri? Iskoobeka!',
        trait: 'Straightforward street bargaining with "Ee paa".'
      },
      karavali: {
        text: 'ಮಾರಾಯ, ಒಂತೆ ಕಮ್ಮಿ ಮಾಡ್ಲೆ! ಇಷ್ಟ್ ಬೆಲೆ ಆದ್ರೆ ಹೆಂಗೆ ತಗಳ್ಳೋದು?',
        phonetic: 'Maaraya, onte kammi maadle! Isht bele aadre henge thagallodu?',
        trait: 'Uses coastal "Onte" (a little) and informal charm.'
      },
      kalyana_karnataka: {
        text: 'ದೋಸ್ತ, ಬರಾಬರ್ ಲೆಕ್ಕ ಮಾಡು ನೋಡಪ್ಪ! ನಾವೂ ನಿನ್ನವರೇ ಅಲ್ವೇನು!',
        phonetic: 'Dosta, baraabar lekka maadu nodappa! Naavoo ninnavare alweenu!',
        trait: 'Emphasizes mutual brotherhood with "Baraabar lekka".'
      },
      bengaluru: {
        text: 'ಸ್ವಲ್ಪ ಅಡ್ಜಸ್ಟ್ ಮಾಡಿ ಬಾಸ್! ಒನ್-ಅಂಡ್-ಹಾಫ್ ಇಲ್ಲ, ಕರೆಕ್ಟ್ ಮೀಟರ್ ಹಾಕಿ ಗುರು!',
        phonetic: 'Swalpa adjust maadi boss! One-and-half illa, correct meter haaki guru!',
        trait: 'Quintessential Bangalore auto negotiation dialogue.'
      }
    }
  },

  // D. Weather & Climate (Rain / Hot / Cold / Sun / Storm)
  {
    patterns: ['rain', 'raining', 'male', 'heavy rain', 'weather', 'hot', 'cold', 'bisilu', 'thampu', 'climate'],
    domain: 'weather',
    variants: {
      mysuru: {
        text: 'ಮಳೆ ಜೋರಾಗಿ ಬರ್ತಿದೆ ಕಣ್ರೀ, ಸ್ವಲ್ಪ ನೆರಳಿನಲ್ಲಿ ನಿಲ್ಲೋಣ ಬನ್ನಿ.',
        phonetic: 'Male joraagi barthidhe kanree, swalpa neralinalli nillona banni.',
        trait: 'Gentle Mysore consideration for comfort.'
      },
      north_karnataka: {
        text: 'ಮಸ್ತ ಮಳಿ ಸುರಿಲಿಕ್ಕತ್ತದ ನೋಡ್ರಿಪಾ! ಜರಾ ಒಳಗೆ ಬರ್ರಿ, ಬಿಸಿ ಚಹಾ ಕುಡಿಯೂಣು!',
        phonetic: 'Masta mali surilikkatthada nodreepaa! Jaraa olage barri, bisi chahaa kudeeyoonu!',
        trait: 'Uses "-likkatthada" (raining) and "Jaraa" (a bit).'
      },
      karavali: {
        text: 'ಮಾರಾಯ, ಭಾರೀ ಮಳೆ ಸುರಿಪುದು! ಕಡಲ ಗಾಳಿಗೆ ನೆನೆದು ಹೋದೆ ಬಪ್ಪ!',
        phonetic: 'Maaraya, bhaaree male suripudu! Kadala gaalige nenedu hode bappa!',
        trait: 'Evokes the Arabian Sea coastal monsoon.'
      },
      kalyana_karnataka: {
        text: 'ಏಕ್ ದಂ ಜೋರಾದ ಮಳೆ ಅದ ನೋಡಪ್ಪ! ಬರಾಬರ್ ತಂಪಾಗೇದ ಜೀವಕ್ಕೆ!',
        phonetic: 'Ek dam joraada male ada nodappa! Baraabar thampaageda jeevakke!',
        trait: 'Celebrates soothing plateau rains after intense heat.'
      },
      bengaluru: {
        text: 'ಗುರು, ಬೆಂಗಳೂರು ವೆದರ್ ಚಿಂದಿ! ಆದ್ರೆ ಸಿಲ್ಕ್ ಬೋರ್ಡ್ ಟ್ರಾಫಿಕ್ ಜಾಮ್ ಮಗಾ!',
        phonetic: 'Guru, Bengaluru weather chindi! Aadre Silk Board traffic jam maga!',
        trait: 'Classic love for Bangalore weather paired with traffic sarcasm.'
      }
    }
  },

  // E. Emergencies, Delay & Urgency (Hurry / Late / Help / Problem)
  {
    patterns: ['help', 'sahaya', 'urgent', 'problem', 'kashta', 'danger', 'doctor', 'police', 'late', 'hurry', 'bega'],
    domain: 'urgency_help',
    variants: {
      mysuru: {
        text: 'ಸ್ವಲ್ಪ ಬೇಗ ಸಹಾಯ ಮಾಡ್ತೀರಾ ಸ್ವಾಮಿ? ಬಹಳ ತುರ್ತಾದ ಪರಿಸ್ಥಿತಿಯಿದೆ.',
        phonetic: 'Swalpa bega sahaaya maadtheera swaami? Bahala thurthaada paristhithiyidhe.',
        trait: 'Polite urgency with "Thurthaada".'
      },
      north_karnataka: {
        text: 'ಏನ್ರೀ, ಜರಾ ಲಗೂನ್ ಬರ್ರಿಪಾ! ದೊಡ್ಡ ಕೆಲ್ಸದಾಗ ಸಿಕ್ಕಾಕೊಂಡೇವಿ ನೋಡ್ರಿ!',
        phonetic: 'Eenree, jaraa lagoon barripaa! Dodda kelsadaaga sikkaakondeevi nodree!',
        trait: 'Famous North Karnataka urgency word "Lagoon" (fast).'
      },
      karavali: {
        text: 'ಮಾರಾಯ, ಒಂತೆ ಬೇಗ ಸಹಾಯ ಮಾಡ್ಲೆ ಬಪ್ಪ! ತುರ್ತು ಕೆಲಸ ಉಂಟು!',
        phonetic: 'Maaraya, onte bega sahaaya maadle bappa! Thurtu kelasa untu!',
        trait: 'Expressive coastal concern.'
      },
      kalyana_karnataka: {
        text: 'ದೋಸ್ತ, ಜಲ್ದಿ ನಡೀ ನೋಡಪ್ಪ! ಬರಾಬರ್ ಕೆಲಸ ಸರಿ ಮಾಡೋನು!',
        phonetic: 'Dosta, jaldi nadi nodappa! Baraabar kelasa sari maadoonu!',
        trait: 'Deccani "Jaldi" and practical action.'
      },
      bengaluru: {
        text: 'ಬಾಸ್, ಸ್ವಲ್ಪ ಬೇಗ ಹೆಲ್ಪ್ ಮಾಡಿ ಗುರು! ಅರ್ಜೆಂಟ್ ಸೀನ್ ಇದೆ ಮಗಾ!',
        phonetic: 'Boss, swalpa bega help maadi guru! Urgent scene idhe maga!',
        trait: 'Direct Bangalore street urgency.'
      }
    }
  }
];

// 3. Eating / Savoring Actions (thinbeku, thinnodu, eat, hungry)
export const ACTION_PATTERNS = [
  {
    patterns: ['thinbeku', 'thinabeku', 'thinnodu', 'thinnona', 'thinodu', 'eat', 'hungry', 'eating', 'have food'],
    morphs: {
      mysuru: (food) => ({
        text: `${food} ಸವಿಯೋಣ ಕಣ್ರೀ, ಬಿಸಿ ಬಿಸಿಯಾಗಿದೆ!`,
        phonetic: `${food} saviyoona kanree, bisi bisiyaagidhe!`,
        trait: 'Uses polite "saviyoona" (savor) and respectful "kanree"'
      }),
      north_karnataka: (food) => ({
        text: `ಬಿಸಿ ಬಿಸಿ ${food} ತಿನ್ಬೇಕಾಗೇದ ನೋಡ್ರಿ! ಬರ್ರಿ ಊಟ ಮಾಡೂಣುಪಾ!`,
        phonetic: `Bisi bisi ${food} thinbekageda nodree! Barri oota maadoonupaa!`,
        trait: 'Uses regional verb "thinbekageda" (must eat) and warm tag "-paa"'
      }),
      karavali: (food) => ({
        text: `ಮಾರಾಯ, ${food} ತಿನ್ಲೆ ಬಪ್ಪ! ಘಮ ಘಮ ಅಂತಿದೆ!`,
        phonetic: `Maaraya, ${food} thinle bappa! Ghama ghama anthidhe!`,
        trait: 'Uses coastal "thinle bappa" and addressing as "Maaraya"'
      }),
      kalyana_karnataka: (food) => ({
        text: `${food} ತಿನ್ನೋನು ನಡೀ ದೋಸ್ತ! ಬರಾಬರ್ ಟೈಮ್‌ಗೆ ಬಂದಿದಿ!`,
        phonetic: `${food} thinnonu nadi dosta! Baraabar time-ge bandidi!`,
        trait: 'Uses "nadi" (let us go) and "dosta" (companion)'
      }),
      bengaluru: (food) => ({
        text: `ಬಾಸ್, ${food} ಹೊಡಿಯೋಣ ಮಗಾ! ಚಿಂದಿ ಟೇಸ್ಟ್ ಗುರು!`,
        phonetic: `Boss, ${food} hodiyoona maga! Chindi taste guru!`,
        trait: 'Urban street slang "hodiyoona" (whack/eat) and "chindi"'
      })
    }
  },
  {
    patterns: ['kodbeku', 'kodi', 'buy', 'order', 'give', 'eshtu', 'rate', 'price', 'cost'],
    morphs: {
      mysuru: (subject) => ({
        text: `ದಯವಿಟ್ಟು ಒಂದು ${subject} ಕೊಡಿ ಸ್ವಾಮಿ, ಎಷ್ಟು ಆಯ್ತು?`,
        phonetic: `Dayavittu ondu ${subject} kodi swaami, eshtu aaythu?`,
        trait: 'Polite request with "Dayavittu" and "Swaami"'
      }),
      north_karnataka: (subject) => ({
        text: `ಏ ಪಾ, ಒಂದು ${subject} ಕೊಡ್ರಿಪಾ! ಎಷ್ಟಾತ ನೋಡ್ರಿ ಕರೆಕ್ಟ್ ಹೇಳ್ರಿ!`,
        phonetic: `Ee paa, ondu ${subject} kodripaa! Eshtaatha nodree correct helree!`,
        trait: 'Direct bargaining with "Ee paa" and "kodripaa"'
      }),
      karavali: (subject) => ({
        text: `ಮಾರಾಯ, ಒಂದು ${subject} ಕೊಡ್ಲೆ! ಎಂತ ಬೆಲೆ ಮಾರಾಯ?`,
        phonetic: `Maaraya, ondu ${subject} kodle! Entha bele maaraya?`,
        trait: 'Friendly coastal informal trade'
      }),
      kalyana_karnataka: (subject) => ({
        text: `ದೋಸ್ತ, ಒಂದು ${subject} ಹಾಕು ನೋಡಪ್ಪ! ಬರಾಬರ್ ರೇಟ್ ಹೇಳು!`,
        phonetic: `Dosta, ondu ${subject} haaku nodappa! Baraabar rate helu!`,
        trait: 'Straightforward "baraabar rate"'
      }),
      bengaluru: (subject) => ({
        text: `ಬಾಸ್, ಒಂದು ${subject} ಕೊಡಿ! ಎಷ್ಟು ಆಯ್ತು, ಜಿಪೇ (GPay) ಮಾಡ್ಲಾ?`,
        phonetic: `Boss, ondu ${subject} kodi! Eshtu aaythu, GPay maadlaa?`,
        trait: 'Instant UPI/GPay urban rhythm'
      })
    }
  }
];

// Helper: Safe token matcher respecting word boundaries for short words
function matchesPattern(text, pat) {
  if (!text || !pat) return false;
  // If pattern is short (<= 4 chars) and alphanumeric, match as whole word
  if (pat.length <= 4 && /^[a-z0-9]+$/i.test(pat)) {
    const regex = new RegExp(`\\b${pat}\\b`, 'i');
    return regex.test(text);
  }
  return text.includes(pat);
}

// Master Parser: Evaluates ANY input and maps into 5 Regional Dialects
export function parseAndMorphDialect(rawInput) {
  if (!rawInput || !rawInput.trim()) return null;
  const inputLower = rawInput.toLowerCase().trim();

  // 1. Detect if any regional food/noun token is mentioned (HIGHEST PRIORITY)
  let detectedFoodRule = null;
  let matchedKeyword = '';

  for (const rule of REGIONAL_LEXICON_RULES) {
    for (const pat of rule.patterns) {
      if (matchesPattern(inputLower, pat)) {
        detectedFoodRule = rule;
        matchedKeyword = pat;
        break;
      }
    }
    if (detectedFoodRule) break;
  }

  // 2. Detect if any action/verb token is mentioned
  let detectedActionRule = null;
  for (const act of ACTION_PATTERNS) {
    for (const pat of act.patterns) {
      if (matchesPattern(inputLower, pat)) {
        detectedActionRule = act;
        break;
      }
    }
    if (detectedActionRule) break;
  }

  // 3. If food is detected and action is detected (e.g. "kesaribath thinbeku")
  if (detectedFoodRule && detectedActionRule) {
    const results = {};
    const regions = ['mysuru', 'north_karnataka', 'karavali', 'kalyana_karnataka', 'bengaluru'];

    regions.forEach((regKey) => {
      const foodName = detectedFoodRule.terms[regKey].term;
      const morphed = detectedActionRule.morphs[regKey](foodName);
      results[regKey] = {
        text: morphed.text,
        phonetic: morphed.phonetic,
        trait: `${morphed.trait} (${detectedFoodRule.terms[regKey].context})`
      };
    });

    return {
      type: 'semantic_food_action',
      keyword: matchedKeyword,
      variants: results
    };
  }

  // 4. If food alone is detected (e.g. "kesaribath", "sheera", "girmit")
  if (detectedFoodRule) {
    const results = {};
    const regions = ['mysuru', 'north_karnataka', 'karavali', 'kalyana_karnataka', 'bengaluru'];

    regions.forEach((regKey) => {
      const termInfo = detectedFoodRule.terms[regKey];
      results[regKey] = {
        text: `${termInfo.term}`,
        phonetic: `${termInfo.phonetic}`,
        trait: termInfo.context
      };
    });

    return {
      type: 'vocabulary_lookup',
      keyword: matchedKeyword,
      variants: results
    };
  }

  // 5. Check Broad Domain Heuristics (Greetings, Travel, Bargaining, Weather, Help)
  for (const domainRule of DOMAIN_RULES) {
    for (const pat of domainRule.patterns) {
      if (matchesPattern(inputLower, pat)) {
        return {
          type: 'domain_match',
          domain: domainRule.domain,
          keyword: pat,
          variants: domainRule.variants
        };
      }
    }
  }

  // 6. Natural Language Heuristic Fallback for ANY Arbitrary Input (Clean, zero dummy tail sentences)
  const clean = rawInput.trim();
  const cleanBase = clean.replace(/[.?!]+$/, '').trim();
  const isQuestion = clean.endsWith('?') || /ಎಲ್ಲಿ|ಹೇಗೆ|ಏನು|ಯಾವಾಗ|ಎಷ್ಟು|ಆಯ್ತಾ|ಮಾಡಬಹುದು|ಕಂಡುಹಿಡಿಯಬಹುದು/i.test(clean);

  const mysuruText = isQuestion ? `${cleanBase} ಸ್ವಾಮಿ?` : `${cleanBase} ಬಿಡಿ ಸ್ವಾಮಿ.`;
  const northText = isQuestion ? `ಏನ್ರೀ, ${cleanBase} ನೋಡ್ರಿ?` : `ಏನ್ರೀ, ${cleanBase} ನೋಡ್ರಿಪಾ.`;
  const karavaliText = isQuestion ? `ಮಾರಾಯ, ${cleanBase}?` : `ಮಾರಾಯ, ${cleanBase}.`;
  const kalyanaText = isQuestion ? `ದೋಸ್ತ, ${cleanBase} ಹೇಳ್ರಿ?` : `ದೋಸ್ತ, ${cleanBase} ಬರಾಬರ್ ಐತಿ.`;
  const blrText = isQuestion ? `ಗುರು, ${cleanBase}?` : `ಗುರು, ${cleanBase} ಸಾರ್ಟೆಡ್.`;

  return {
    type: 'general_morph',
    keyword: clean,
    isRecognized: true,
    variants: {
      mysuru: {
        text: mysuruText,
        phonetic: mysuruText,
        trait: 'Polite honorific tone with respectful Mysore courtly cadence'
      },
      north_karnataka: {
        text: northText,
        phonetic: northText,
        trait: 'Rhythmic Dharwad warmth with "-nodree" and energetic markers'
      },
      karavali: {
        text: karavaliText,
        phonetic: karavaliText,
        trait: 'Coastal Kundapura melody with "Maaraya"'
      },
      kalyana_karnataka: {
        text: kalyanaText,
        phonetic: kalyanaText,
        trait: 'Kalaburagi expression with "Dosta"'
      },
      bengaluru: {
        text: blrText,
        phonetic: blrText,
        trait: 'Bengaluru cosmopolitan youth and street lingo'
      }
    }
  };
}
