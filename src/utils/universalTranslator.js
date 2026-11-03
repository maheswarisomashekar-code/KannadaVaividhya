// Universal Dialect Engine & Real-Time Linguistic Transformer
import { translateEnglishToKannada } from './englishToKannada.js';

// Comprehensive Root Lexicon (English -> Kannada -> Regional Nuance)
export const VOCABULARY_LEXICON = [
  {
    en: 'friend',
    kn: 'ಸ್ನೇಹಿತ / ಗೆಳೆಯ',
    phonetic: 'Snehitha / Geleya',
    dialects: {
      mysuru: { word: 'ಸ್ನೇಹಿತರು (Snehitharu)', note: 'Polite honorific address' },
      north_karnataka: { word: 'ದೋಸ್ತಾ / ಗೆಳೆಯ (Dostha / Geleya)', note: 'Warm camaraderie' },
      karavali: { word: 'ಮಾರಾಯ (Maaraya)', note: 'Famous coastal endearment' },
      kalyana_karnataka: { word: 'ದೋಸ್ತ (Dost)', note: 'Deccani influenced' },
      bengaluru: { word: 'ಮಗಾ / ಗುರು (Maga / Guru)', note: 'Iconic Bangalore youth slang' }
    }
  },
  {
    en: 'food / meal / rice',
    kn: 'ಊಟ / ಅನ್ನ',
    phonetic: 'Oota / Anna',
    dialects: {
      mysuru: { word: 'ಊಟ (Oota)', note: 'Soft polite invocation' },
      north_karnataka: { word: 'ಊಟ / ರೊಟ್ಟಿ (Oota / Rotti)', note: 'Staple reference' },
      karavali: { word: 'ಕೂಡು / ಬಿಸಿ ಕೂಡು (Koodu / Bisi koodu)', note: 'Traditional coastal cooked rice' },
      kalyana_karnataka: { word: 'ಖಾನಾ / ರೊಟ್ಟಿ (Khana / Rotti)', note: 'Deccani hybrid' },
      bengaluru: { word: 'ತಿಂಡಿ / ಮೀಲ್ಸ್ (Thindi / Meals)', note: 'Darshini & hotel culture' }
    }
  },
  {
    en: 'where are you going',
    kn: 'ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?',
    phonetic: 'Ellige hogutthiddeeri?',
    dialects: {
      mysuru: { word: 'ಎಲ್ಲಿಗೆ ಹೋಗ್ತಿದ್ದೀರಾರೀ? (Ellige hogthiddeeraari?)', note: 'Gentle question' },
      north_karnataka: { word: 'ಎಲ್ಲಿ ಹೊರಟೀರಿಪಾ? (Elli horateeripaa?)', note: 'Direct rhythmic pace' },
      karavali: { word: 'ಎಲ್ಲಿಗ್ ಪೋಪುದು ಮಾರಾಯ? (Ellig poopudu maaraya?)', note: 'Classic "poopudu" verb' },
      kalyana_karnataka: { word: 'ಎಲ್ಲಿ ನಡದೀರಿ ದೋಸ್ತ? (Elli nadadeeri dosta?)', note: 'Uses "nadi" (walk/go)' },
      bengaluru: { word: 'ಎಲ್ಲಿ ಹೊಂಟೆ ಮಗಾ? (Elli honte maga?)', note: 'Fast urban shortcut' }
    }
  },
  {
    en: 'come',
    kn: 'ಬನ್ನಿ',
    phonetic: 'Banni',
    dialects: {
      mysuru: { word: 'ದಯವಿಟ್ಟು ಬನ್ನಿ (Dayavittu banni)', note: 'Courtly courteous' },
      north_karnataka: { word: 'ಬರ್ರಿ ಬರ್ರಿ (Barree barree)', note: 'Warm repeated imperative' },
      karavali: { word: 'ಬನ್ನಿ ಮಾರಾಯ / ಬಪ್ಪ (Banni maaraya / Bappa)', note: 'Sing-song rhythm' },
      kalyana_karnataka: { word: 'ಬಾ ದೋಸ್ತ / ಬರ್ರಿ (Baa dosta / Barree)', note: 'Soulful invitation' },
      bengaluru: { word: 'ಬಾ ಗುರು (Baa guru)', note: 'Casual streetwear' }
    }
  },
  {
    en: 'awesome / excellent',
    kn: 'ಅದ್ಭುತ / ಶ್ರೇಷ್ಠ',
    phonetic: 'Adbhutha / Shreshtha',
    dialects: {
      mysuru: { word: 'ಬಹಳ ಮೆಚ್ಚುಗೆಯಾಯ್ತು (Bahala mecchugeyaaythu)', note: 'Aristocratic praise' },
      north_karnataka: { word: 'ಮಸ್ತ ಅದ ನೋಡ್ರಿ! (Masta ada nodree!)', note: 'High enthusiasm' },
      karavali: { word: 'ಭಾರೀ ಚಂದದ ಕೆಲ್ಸ (Bhaaree chandada kelsa)', note: 'Coastal "chanda" (beauty)' },
      kalyana_karnataka: { word: 'ಬೆಂಕಿ / ಏಕ್ ದಂ ಬರಾಬರ್ (Benki / Ek dam baraabar)', note: 'Direct impact' },
      bengaluru: { word: 'ಚಿಂದಿ ಗುರು! / ನೆಕ್ಸ್ಟ್ ಲೆವೆಲ್ (Chindi guru! / Next level)', note: 'Peak Bangalore slang' }
    }
  },
  {
    en: 'what are you doing',
    kn: 'ಏನು ಮಾಡುತ್ತಿದ್ದೀರಿ?',
    phonetic: 'Eenu maadutthiddeeri?',
    dialects: {
      mysuru: { word: 'ಏನ್ ಮಾಡ್ತಿದ್ದೀರಾರೀ? (Een maadthiddeeraari?)', note: 'Soft polite' },
      north_karnataka: { word: 'ಏನ್ ಮಾಡ್ಲಿಕ್ಕತ್ತೀರಿ? (Een maadlikkattheeri?)', note: 'Signature "-likkattheeri" marker' },
      karavali: { word: 'ಎಂತ ಮಾಡುದು ಮಾರಾಯ? (Entha maadudu maaraya?)', note: 'Coastal "Entha" & "Maadudu"' },
      kalyana_karnataka: { word: 'ಕಾಯ್ ಮಾಡಾಕತ್ತೀರಿ? (Kaay maadaakattheeri?)', note: 'Uses "Kaay" (what)' },
      bengaluru: { word: 'ಏನ್ ಸೀನ್ ಮಗಾ? (Een scene maga?)', note: 'Colloquial catchphrase' }
    }
  },
  {
    en: 'hurry / fast',
    kn: 'ಬೇಗ',
    phonetic: 'Bega',
    dialects: {
      mysuru: { word: 'ಸ್ವಲ್ಪ ಬೇಗ ಬನ್ನಿ (Swalpa bega banni)', note: 'Polite reminder' },
      north_karnataka: { word: 'ಲಗೂನ್ ಬರ್ರಿಪಾ! (Lagoon barripaa!)', note: 'Famous North term "Lagoon"' },
      karavali: { word: 'ಬೇಗ ಬಪ್ಪ ಮಾರಾಯ (Bega bappa maaraya)', note: 'Coastal urgency' },
      kalyana_karnataka: { word: 'ಜಲ್ದಿ ನಡೀ ದೋಸ್ತ (Jaldi nadi dosta)', note: 'Deccani "Jaldi"' },
      bengaluru: { word: 'ಬೇಗ ಬಾ ಗುರು, ಟೈಮ್ ಇಲ್ಲ! (Bega baa guru, time illa!)', note: 'Fast urban hustle' }
    }
  },
  {
    en: 'no problem / it is fine',
    kn: 'ಪರವಾಗಿಲ್ಲ / ತೊಂದರೆ ಇಲ್ಲ',
    phonetic: 'Paravaagilla / Thondare illa',
    dialects: {
      mysuru: { word: 'ಅಡ್ಡಿಯಿಲ್ಲ ಬಿಡಿ (Addiyilla bidi)', note: 'Classic Mysore soothing reassurance' },
      north_karnataka: { word: 'ಫಿಕರ್ ಮಾಡ್ಬ್ಯಾಡ್ರಿಪಾ (Phikar maadbyaadripaa)', note: 'Warm neighborly comfort' },
      karavali: { word: 'ಟೆನ್ಶನ್ ಬ್ಯಾಡ ಮಾರಾಯ (Tension byaada maaraya)', note: 'Relaxed coastal mindset' },
      kalyana_karnataka: { word: 'ಚಿಂತಿ ಬಿಡ್ರಿ, ಸರಿ ಹೋಗತದ (Chinthi bidree, sari hogathada)', note: 'Reassuring composure' },
      bengaluru: { word: 'ಸೀನ್ ಇಲ್ಲ ಬಿಡು ಮಗಾ (Scene illa bidu maga)', note: 'Iconic Bangalore youth mantra' }
    }
  }
];

// Fallback Free Translation API (Online fetch when connected)
export async function fetchOnlineKannadaTranslation(text) {
  try {
    // Free translation service API endpoint
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|kn`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    if (data && data.responseData && data.responseData.translatedText) {
      return data.responseData.translatedText;
    }
  } catch (e) {
    console.warn('Online translation fallback triggered:', e);
  }
  return null;
}

// Convert Kannada script to readable English phonetics
export function generatePhoneticTransliteration(kannadaText) {
  // Common phonetic transliteration heuristics
  const charMap = {
    'ನಮಸ್ಕಾರ': 'Namaskaara',
    'ಹೇಗಿದ್ದೀರಾ': 'Hegiddeera',
    'ಊಟ': 'Oota',
    'ಆಯ್ತಾ': 'Aaythaa',
    'ಎಲ್ಲಿ': 'Elli',
    'ಹೋಗ್ತಿದ್ದೀರಾ': 'Hogthiddeera',
    'ಏನ್ರೀ': 'Eenree',
    'ಸಮಾಚಾರ': 'Samachaara',
    'ಮಸ್ತ': 'Masta',
    'ಮಾರಾಯ': 'Maaraya',
    'ಪೋಪುದು': 'Poopudu',
    'ಬರಾಬರ್': 'Baraabar',
    'ದೋಸ್ತ': 'Dostha',
    'ಗುರು': 'Guru',
    'ಮಗಾ': 'Maga',
    'ಚಿಂದಿ': 'Chindi',
    'ಬೇಜಾನ್': 'Beejaan',
    'ಬನ್ನಿ': 'Banni',
    'ಬರ್ರಿ': 'Barree'
  };

  for (const [k, v] of Object.entries(charMap)) {
    if (kannadaText.includes(k)) {
      return `${v} ... (${kannadaText.slice(0, 25)})`;
    }
  }

  return 'Phonetic: Listen to the authentic audio with the speaker button.';
}

// Morphological Transformation Engine: Transforms any arbitrary sentence into 5 Regional Dialects cleanly without extra tail sentences
export function transformToRegionalDialects(inputSentence, baseKannada = null) {
  let sentence = (baseKannada || inputSentence || '').trim();

  // If the sentence contains English, resolve it to Kannada FIRST to avoid English in dialects
  if (/[a-zA-Z]/.test(sentence)) {
    const lower = sentence.toLowerCase().trim();

    // 1. Direct VOCABULARY_LEXICON lookup (handles "awesome / excellent", "friend", "come", etc.)
    const lex = VOCABULARY_LEXICON.find((item) => {
      const itemEn = item.en.toLowerCase();
      if (itemEn === lower) return true;
      const slashParts = itemEn.split('/').map((p) => p.trim());
      if (slashParts.includes(lower)) return true;
      if (lower.split('/').map((p) => p.trim()).some((p) => slashParts.includes(p))) return true;
      return false;
    });

    if (lex && lex.dialects) {
      return {
        mysuru: {
          regionName: 'Old Mysuru (ಮೈಸೂರು-ಮಂಡ್ಯ)',
          text: lex.dialects.mysuru.word.replace(/\s*\([^)]*\)/g, '').trim(),
          phonetic: lex.dialects.mysuru.word.match(/\(([^)]+)\)/)?.[1] || lex.dialects.mysuru.word,
          tone: lex.dialects.mysuru.note,
          etiquetteTip: 'Always address with respectful plural forms like "Taavu" or "Neevu" in Mysuru and Mandya.'
        },
        north_karnataka: {
          regionName: 'North Karnataka (ಧಾರವಾಡ-ಬೆಳಗಾವಿ)',
          text: lex.dialects.north_karnataka.word.replace(/\s*\([^)]*\)/g, '').trim(),
          phonetic: lex.dialects.north_karnataka.word.match(/\(([^)]+)\)/)?.[1] || lex.dialects.north_karnataka.word,
          tone: lex.dialects.north_karnataka.note,
          etiquetteTip: 'Direct, hearty cadence signifying genuine warmth and closeness.'
        },
        karavali: {
          regionName: 'Coastal Karavali (ಕುಂದಾಪ್ರ-ಮಂಗಳೂರು)',
          text: lex.dialects.karavali.word.replace(/\s*\([^)]*\)/g, '').trim(),
          phonetic: lex.dialects.karavali.word.match(/\(([^)]+)\)/)?.[1] || lex.dialects.karavali.word,
          tone: lex.dialects.karavali.note,
          etiquetteTip: 'Coastal friendly address creating an immediate affectionate rapport.'
        },
        kalyana_karnataka: {
          regionName: 'Kalyana Karnataka (ಕಲಬುರಗಿ-ಬೀದರ್)',
          text: lex.dialects.kalyana_karnataka.word.replace(/\s*\([^)]*\)/g, '').trim(),
          phonetic: lex.dialects.kalyana_karnataka.word.match(/\(([^)]+)\)/)?.[1] || lex.dialects.kalyana_karnataka.word,
          tone: lex.dialects.kalyana_karnataka.note,
          etiquetteTip: 'Deeply honors Basaveshwara equality principles—everyone is greeted as an equal companion.'
        },
        bengaluru: {
          regionName: 'Bengaluru Urban Slang (ನಮ್ಮ ಬೆಂಗಳೂರು)',
          text: lex.dialects.bengaluru.word.replace(/\s*\([^)]*\)/g, '').trim(),
          phonetic: lex.dialects.bengaluru.word.match(/\(([^)]+)\)/)?.[1] || lex.dialects.bengaluru.word,
          tone: lex.dialects.bengaluru.note,
          etiquetteTip: 'Keep conversations quick, punchy, and casual.'
        }
      };
    }

    // 2. Bilingual Phrase & Syntax engine
    const englishMatch = translateEnglishToKannada(sentence);
    if (englishMatch) {
      if (englishMatch.variants) {
        return {
          mysuru: {
            regionName: 'Old Mysuru (ಮೈಸೂರು-ಮಂಡ್ಯ)',
            text: englishMatch.variants.mysuru.text,
            phonetic: englishMatch.variants.mysuru.phonetic,
            tone: englishMatch.variants.mysuru.trait || 'Courteous courtly tone with polite honorific.',
            etiquetteTip: 'Always address with respectful plural forms like "Taavu" or "Neevu" in Mysuru and Mandya.'
          },
          north_karnataka: {
            regionName: 'North Karnataka (ಧಾರವಾಡ-ಬೆಳಗಾವಿ)',
            text: englishMatch.variants.north_karnataka.text,
            phonetic: englishMatch.variants.north_karnataka.phonetic,
            tone: englishMatch.variants.north_karnataka.trait || 'Energetic rhythm using "Eenree" and respectful "-nodree".',
            etiquetteTip: 'Direct, hearty cadence signifying genuine warmth and closeness.'
          },
          karavali: {
            regionName: 'Coastal Karavali (ಕುಂದಾಪ್ರ-ಮಂಗಳೂರು)',
            text: englishMatch.variants.karavali.text,
            phonetic: englishMatch.variants.karavali.phonetic,
            tone: englishMatch.variants.karavali.trait || 'Melodic coastal sing-song cadence with iconic "Maaraya".',
            etiquetteTip: 'Coastal friendly address creating an immediate affectionate rapport.'
          },
          kalyana_karnataka: {
            regionName: 'Kalyana Karnataka (ಕಲಬುರಗಿ-ಬೀದರ್)',
            text: englishMatch.variants.kalyana_karnataka.text,
            phonetic: englishMatch.variants.kalyana_karnataka.phonetic,
            tone: englishMatch.variants.kalyana_karnataka.trait || 'Deccani-Sharana blend featuring "Dosta" (companion).',
            etiquetteTip: 'Deeply honors Basaveshwara equality principles—everyone is greeted as an equal companion.'
          },
          bengaluru: {
            regionName: 'Bengaluru Urban Slang (ನಮ್ಮ ಬೆಂಗಳೂರು)',
            text: englishMatch.variants.bengaluru.text,
            phonetic: englishMatch.variants.bengaluru.phonetic,
            tone: englishMatch.variants.bengaluru.trait || 'High-speed cosmopolitan youth and street lingo.',
            etiquetteTip: 'Keep conversations quick, punchy, and casual.'
          }
        };
      }
      if (englishMatch.kannada && !/[a-zA-Z]/.test(englishMatch.kannada)) {
        sentence = englishMatch.kannada;
      }
    }
  }

  const isQuestion = sentence.endsWith('?') || /ಎಲ್ಲಿ|ಹೇಗೆ|ಏನು|ಯಾವಾಗ|ಎಷ್ಟು|ಆಯ್ತಾ|ಹೇಗಿದ್ದೀರಾ|ಮಾಡಬಹುದು|ಕಂಡುಹಿಡಿಯಬಹುದು/i.test(sentence);
  
  // Clean off trailing punctuation for natural inflection
  const cleanBase = sentence.replace(/[.?!]+$/, '').trim();

  // Natural regional dialect markers without tacking on random dummy sentences
  const mysuruText = isQuestion ? `${cleanBase} ಸ್ವಾಮಿ?` : `${cleanBase} ಬಿಡಿ ಸ್ವಾಮಿ.`;
  const northText = isQuestion ? `ಏನ್ರೀ, ${cleanBase} ನೋಡ್ರಿ?` : `ಏನ್ರೀ, ${cleanBase} ನೋಡ್ರಿಪಾ.`;
  const karavaliText = isQuestion ? `ಮಾರಾಯ, ${cleanBase}?` : `ಮಾರಾಯ, ${cleanBase}.`;
  const kalyanaText = isQuestion ? `ದೋಸ್ತ, ${cleanBase} ಹೇಳ್ರಿ?` : `ದೋಸ್ತ, ${cleanBase} ಬರಾಬರ್ ಐತಿ.`;
  const blrText = isQuestion ? `ಗುರು, ${cleanBase}?` : `ಗುರು, ${cleanBase} ಸಾರ್ಟೆಡ್.`;

  // Dialect Morphing Rules
  return {
    mysuru: {
      regionName: 'Old Mysuru (ಮೈಸೂರು-ಮಂಡ್ಯ)',
      text: mysuruText,
      phonetic: mysuruText,
      tone: 'Courteous courtly tone with polite honorific "ಸ್ವಾಮಿ".',
      etiquetteTip: 'Always address with respectful plural forms like "Taavu" or "Neevu" in Mysuru and Mandya.'
    },
    north_karnataka: {
      regionName: 'North Karnataka (ಧಾರವಾಡ-ಬೆಳಗಾವಿ)',
      text: northText,
      phonetic: northText,
      tone: 'Energetic rhythm using "Eenree" and respectful "-nodree".',
      etiquetteTip: 'Direct, hearty cadence signifying genuine warmth and closeness.'
    },
    karavali: {
      regionName: 'Coastal Karavali (ಕುಂದಾಪ್ರ-ಮಂಗಳೂರು)',
      text: karavaliText,
      phonetic: karavaliText,
      tone: 'Melodic coastal sing-song cadence with iconic "Maaraya".',
      etiquetteTip: 'Coastal friendly address creating an immediate affectionate rapport.'
    },
    kalyana_karnataka: {
      regionName: 'Kalyana Karnataka (ಕಲಬುರಗಿ-ಬೀದರ್)',
      text: kalyanaText,
      phonetic: kalyanaText,
      tone: 'Deccani-Sharana blend featuring "Dosta" (companion).',
      etiquetteTip: 'Deeply honors Basaveshwara equality principles—everyone is greeted as an equal companion.'
    },
    bengaluru: {
      regionName: 'Bengaluru Urban Slang (ನಮ್ಮ ಬೆಂಗಳೂರು)',
      text: blrText,
      phonetic: blrText,
      tone: 'High-speed cosmopolitan youth and street lingo with "Guru".',
      etiquetteTip: 'Keep conversations quick, punchy, and casual.'
    }
  };
}
