// Intelligent Real-Time Semantic & Vocabulary Dialect Engine
// Normalizes user input, detects local food items, verbs, slang, and transforms them into authentic regional vocabulary

// Comprehensive Vocabulary & Food Substitution Matrix
export const REGIONAL_LEXICON_RULES = [
  // 1. Kesaribath / Sheera / Sajjige (User's exact showcase!)
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

  // 2. Puffed rice snack (Mandakki / Girmit / Churmuri / Baji)
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

  // 3. Rice & Meals (Oota / Koodu / Anna / Khana)
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

  // 4. Bread / Rotti (Jolada Rotti / Akki Rotti / Ragi Mudde)
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

  // 5. Tea / Coffee (Filter Kaapi / Chahaa / Kashaaya)
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

  // 6. Dosa (Mylari Dose / Neer Dose / Masale Dose)
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

// Action / Verb Semantic Heuristics
export const ACTION_PATTERNS = [
  // Eating / Savoring (thinbeku, thinnodu, want to eat, eat)
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

  // Going / Travelling (hogbeku, going, travel)
  {
    patterns: ['hogbeku', 'hogodu', 'hogona', 'going', 'travel', 'bus', 'station'],
    morphs: {
      mysuru: (foodOrSubject) => ({
        text: `${foodOrSubject} ಕಡೆ ಹೋಗ್ಬೇಕು ಅಲ್ವೇನ್ರೀ? ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿ ಹೊರಡೋಣ.`,
        phonetic: `${foodOrSubject} kade hogbeku alveenree? Swalpa nidhaanavaagi horadona.`,
        trait: 'Gentle, unhurried courtly tone'
      }),
      north_karnataka: (foodOrSubject) => ({
        text: `ಏನ್ರೀ, ${foodOrSubject} ಕಡೆ ಹೊಂಟೇವಿಪಾ! ಬರ್ರಿ ಲಗೂನ್ ನಡೀರಿ!`,
        phonetic: `Eenree, ${foodOrSubject} kade honteevipaa! Barri lagoon nadeeri!`,
        trait: 'Uses "honteevi" and "lagoon" (hurry)'
      }),
      karavali: (foodOrSubject) => ({
        text: `ಮಾರಾಯ, ${foodOrSubject} ಕಡೆಗ್ ಪೋಪುದಾ? ತಡಿ ಬಪ್ಪ ಒಟ್ಟಿಗೆ ಪೋಪ!`,
        phonetic: `Maaraya, ${foodOrSubject} kadeg poopudaa? Thadi bappa ottige popa!`,
        trait: 'Uses iconic Kundapura verb "poopuda / popa"'
      }),
      kalyana_karnataka: (foodOrSubject) => ({
        text: `ದೋಸ್ತ, ${foodOrSubject} ಕಡೆ ನಡೀ! ಖರೇ ಟೈಮ್‌ಗೆ ಮುಟ್ಟೂಣು!`,
        phonetic: `Dosta, ${foodOrSubject} kade nadi! Kharee time-ge muttoonu!`,
        trait: 'Deccani imperative "nadi"'
      }),
      bengaluru: (foodOrSubject) => ({
        text: `ಗುರು, ${foodOrSubject} ಕಡೆ ಮೂವ್ ಆಗೋಣ ಮಗಾ! ಟ್ರಾಫಿಕ್ ಜಾಸ್ತಿ ಇದೆ!`,
        phonetic: `Guru, ${foodOrSubject} kade move aagona maga! Traffic jaasthi idhe!`,
        trait: 'Bangalore urban mix with traffic lingo'
      })
    }
  },

  // Giving / Buying / Ordering (kodbeku, kodi, price, buy, order)
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

// Master Parser: Evaluates ANY sentence and maps semantic tokens into 5 Regional Dialects
export function parseAndMorphDialect(rawInput) {
  if (!rawInput || !rawInput.trim()) return null;
  const inputLower = rawInput.toLowerCase().trim();

  // 1. Detect if any regional food/noun token is mentioned
  let detectedFoodRule = null;
  let matchedKeyword = '';

  for (const rule of REGIONAL_LEXICON_RULES) {
    for (const pat of rule.patterns) {
      if (inputLower.includes(pat)) {
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
      if (inputLower.includes(pat)) {
        detectedActionRule = act;
        break;
      }
    }
    if (detectedActionRule) break;
  }

  // 3. If food is detected and action is detected (e.g. "keasribath thinbeku")
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

  // 4. If food alone is detected (e.g. "kesaribath", "sheera")
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

  // 5. If action alone is detected (e.g. "thinbeku", "hogbeku")
  if (detectedActionRule) {
    const results = {};
    const regions = ['mysuru', 'north_karnataka', 'karavali', 'kalyana_karnataka', 'bengaluru'];

    regions.forEach((regKey) => {
      const morphed = detectedActionRule.morphs[regKey]('ಊಟ');
      results[regKey] = {
        text: morphed.text,
        phonetic: morphed.phonetic,
        trait: morphed.trait
      };
    });

    return {
      type: 'action_morph',
      keyword: rawInput,
      variants: results
    };
  }

  // 6. General sentence morphological fallback
  const clean = rawInput.trim();
  return {
    type: 'general_morph',
    keyword: clean,
    variants: {
      mysuru: {
        text: `${clean} ಅಲ್ವೇನ್ರೀ? ಸ್ವಲ್ಪ ತಾಳ್ಮೆಯಿಂದ ವಿಚಾರ ಮಾಡಿ ಬನ್ನಿ.`,
        phonetic: `${clean} alveenree? Swalpa thaalmeyinda vichaara maadi banni.`,
        trait: 'Polite honorific tone with respectful Mysore courtly cadence'
      },
      north_karnataka: {
        text: `ಏನ್ರೀ, ${clean} ನೋಡ್ರಿ! ನಾವೂ ಒಟ್ಟಿಗೆ ಬರತೇವಿಪಾ!`,
        phonetic: `Eenree, ${clean} nodree! Naavoo ottige baratheevipaa!`,
        trait: 'Rhythmic Dharwad warmth with "-nodree" and energetic markers'
      },
      karavali: {
        text: `ಮಾರಾಯ, ${clean} ಹೌದಾ? ತಡಿ ಬಪ್ಪ, ಒಟ್ಟಿಗೆ ಪೋಪ!`,
        phonetic: `Maaraya, ${clean} houdaa? Thadi bappa, ottige popa!`,
        trait: 'Coastal Kundapura melody with "Maaraya" and "Thadi bappa"'
      },
      kalyana_karnataka: {
        text: `ದೋಸ್ತ, ${clean} ಬರಾಬರ್ ಅದ ನೋಡಪ್ಪ! ಖರೇ ಮಾತೇ ಹೇಳಕತ್ತೀನಿ.`,
        phonetic: `Dosta, ${clean} baraabar ada nodappa! Kharee maathee helakattheeni.`,
        trait: 'Kalaburagi expression with "Baraabar" and "Dosta"'
      },
      bengaluru: {
        text: `ಗುರು, ${clean} ಸೀನ್ ಇಲ್ಲ ಮಗಾ, ಚಿಂದಿ ಮಾಡೋಣ ಲೋಡ್ ತಗೋಬೇಡ!`,
        phonetic: `Guru, ${clean} scene illa maga, chindi maadona load thagobeda!`,
        trait: 'Bengaluru cosmopolitan youth and street lingo'
      }
    }
  };
}
