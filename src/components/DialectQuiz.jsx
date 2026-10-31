import React, { useState } from 'react';
import { getRandomQuizSet, BADGES } from '../data/quizData';
import { soundEffects, speakKannada } from '../utils/audioHelper';
import { HelpCircle, CheckCircle, XCircle, Volume2, RefreshCw, ArrowRight, Shuffle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { UI_STRINGS } from '../data/translations';

const QUESTIONS_PER_ROUND = 5;

export default function DialectQuiz({ lang = 'kn' }) {
  const [questions, setQuestions] = useState(() => getRandomQuizSet(QUESTIONS_PER_ROUND));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [historyIds, setHistoryIds] = useState([]);

  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  const question = questions[currentIdx] || questions[0];

  const handleSelectOption = (option) => {
    if (isAnswered) return;
    setSelectedOption(option.id);
    setIsAnswered(true);

    if (option.isCorrect) {
      setScore((prev) => prev + 1);
      soundEffects.playSuccess();
    } else {
      soundEffects.playIncorrect();
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      if (score >= 3) {
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch (e) {
          console.warn('Confetti error', e);
        }
      }
    }
  };

  const startNewQuiz = () => {
    const updatedHistory = [...historyIds, ...questions.map((q) => q.id)];
    setHistoryIds(updatedHistory);
    setQuestions(getRandomQuizSet(QUESTIONS_PER_ROUND, updatedHistory));
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setRoundNumber((prev) => prev + 1);
    soundEffects.playClick();
  };

  const earnedBadge = [...BADGES].reverse().find((b) => score >= b.threshold) || BADGES[0];

  return (
    <section 
      id="quiz" 
      aria-labelledby="quiz-heading"
      className="py-14 sm:py-18 bg-[#0b0f17] relative border-b border-[#1e293b]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-xs font-semibold mb-3 border border-[#d4af37]/40 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isKn ? 'ರೋಮಾಂಚಕ ರಸಪ್ರಶ್ನೆ ಸ್ಪರ್ಧೆ' : 'Interactive Gamified Dialect Trivia'}</span>
          </div>
          <h2 id="quiz-heading" className="text-2xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight font-serif">
            {t.quizTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#cbd5e1]">
            {t.quizSubtitle}
          </p>
        </div>

        {/* Main Quiz Box */}
        <div className="max-w-3xl mx-auto bg-[#111726] border border-[#1e293b] rounded-3xl p-5 sm:p-8 shadow-xl relative">
          
          {!quizFinished ? (
            <div>
              {/* Progress Bar & Score header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1e293b] text-xs text-[#94a3b8]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#d4af37]">
                    {isKn ? `ಪ್ರಶ್ನೆ ${currentIdx + 1} / ${questions.length}` : `Question ${currentIdx + 1} of ${questions.length}`}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0b0f17] text-[#94a3b8] text-[10px] border border-[#1e293b]">
                    {isKn ? `ಸುತ್ತು #${roundNumber}` : `Round #${roundNumber}`}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="bg-[#0b0f17] px-3 py-1 rounded-full text-[#f8fafc] font-bold border border-[#1e293b]">
                    {isKn ? 'ಅಂಕ: ' : 'Score: '}{score}
                  </span>
                  <button
                    type="button"
                    onClick={startNewQuiz}
                    className="p-1 px-2 rounded bg-[#0b0f17] hover:bg-[#1e293b] text-[#94a3b8] hover:text-[#d4af37] border border-[#1e293b] transition-colors text-xs flex items-center gap-1"
                    title="Shuffle & Load New Random Questions"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t.btnShuffle}</span>
                  </button>
                </div>
              </div>

              {/* Progress line */}
              <div className="w-full bg-[#0b0f17] h-1.5 rounded-full my-4 overflow-hidden border border-[#1e293b]">
                <div
                  className="bg-[#d4af37] h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question & Quote Prompt */}
              <div className="my-5">
                <h3 className="text-base sm:text-lg font-bold text-[#f8fafc] mb-1 font-serif">
                  {isKn ? question.promptKannada : question.promptEnglish}
                </h3>
                <p className="text-xs text-[#94a3b8] mb-5">
                  {isKn ? question.promptEnglish : question.promptKannada}
                </p>

                {/* Dialect Quote Display Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#0b0f17] border border-[#d4af37]/30 text-center relative mb-5">
                  <p className="text-xl sm:text-3xl font-extrabold text-[#d4af37] font-serif mb-2">
                    {question.quoteKannada}
                  </p>
                  <p className="text-xs sm:text-sm text-[#cbd5e1] italic mb-3">
                    /{question.quotePhonetic}/
                  </p>

                  <button
                    type="button"
                    onClick={() => speakKannada(question.quoteKannada)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111726] hover:bg-[#161f30] border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold transition-all hover:scale-102"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{isKn ? 'ಸುಳಿವು ಆಲಿಸಿ' : 'Listen to Dialect Clue'}</span>
                  </button>
                </div>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {question.options.map((option) => {
                  const isSelected = selectedOption === option.id;
                  let btnStyle = 'bg-[#0b0f17] border-[#1e293b] hover:border-[#d4af37]/60 text-[#cbd5e1]';

                  if (isAnswered) {
                    if (option.isCorrect) {
                      btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'bg-red-950/60 border-red-500 text-red-200 font-bold';
                    } else {
                      btnStyle = 'bg-[#0b0f17]/40 border-[#1e293b] text-[#94a3b8]/40 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(option)}
                      disabled={isAnswered}
                      className={`p-3.5 sm:p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                    >
                      <span>{option.label}</span>
                      {isAnswered && option.isCorrect && (
                        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 shrink-0" />
                      )}
                      {isAnswered && isSelected && !option.isCorrect && (
                        <XCircle className="w-4 sm:w-5 h-4 sm:h-5 text-red-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Answer Explanation & Next Button */}
              {isAnswered && (
                <div className="p-4 rounded-xl bg-[#0b0f17] border border-[#1e293b] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-[#cbd5e1]">
                    <strong className="text-[#d4af37] block mb-1">
                      {isKn ? 'ಭಾಷಾ ಸುಳಿವು & ಹಿನ್ನೆಲೆ:' : 'Linguistic Detective Insight:'}
                    </strong>
                    {question.explanation}
                  </div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#E5A93C] text-[#0b0f17] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shrink-0 shadow-md"
                  >
                    <span>{currentIdx + 1 === questions.length ? t.btnViewResults : t.btnNext}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Results & Celebration Card */
            <div className="text-center py-5">
              <div className="text-5xl mb-2">{earnedBadge.icon}</div>
              <h3 className="text-xl sm:text-3xl font-black text-[#f8fafc] font-serif mb-1">
                {isKn ? 'ಅಭಿನಂದನೆಗಳು!' : 'Congratulations!'}
              </h3>
              <p className="text-xs sm:text-sm text-[#cbd5e1] mb-5">
                {isKn 
                  ? `ನೀವು #${roundNumber} ಸುತ್ತಿನಲ್ಲಿ ${questions.length} ಪ್ರಶ್ನೆಗಳಲ್ಲಿ ${score} ಅಂಕ ಗಳಿಸಿದ್ದೀರಿ!` 
                  : `You scored ${score} out of ${questions.length} in Round #${roundNumber}!`}
              </p>

              {/* Badge Certificate */}
              <div className="p-5 rounded-2xl bg-[#0b0f17] border border-[#d4af37]/40 max-w-md mx-auto mb-6 shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] block mb-1">
                  {isKn ? 'ಗಳಿಸಿದ ಅಧಿಕೃತ ಬಿರುದು' : 'OFFICIAL BADGE AWARDED'}
                </span>
                <h4 className="text-lg sm:text-xl font-black text-[#d4af37] font-serif">
                  {earnedBadge.title}
                </h4>
                <p className="text-xs text-[#cbd5e1] mt-1.5 font-medium">
                  {earnedBadge.desc}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={startNewQuiz}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#E5A93C] text-[#0b0f17] font-bold text-xs sm:text-sm shadow-lg hover:brightness-110 transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>{t.btnPlayAgain}</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
