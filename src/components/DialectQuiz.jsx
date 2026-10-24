import React, { useState } from 'react';
import { QUIZ_QUESTIONS, BADGES } from '../data/quizData';
import { soundEffects, speakKannada } from '../utils/audioHelper';
import { HelpCircle, CheckCircle, XCircle, Award, Volume2, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DialectQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];

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
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.warn('Confetti error', e);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const earnedBadge = [...BADGES].reverse().find((b) => score >= b.threshold) || BADGES[0];

  return (
    <section id="quiz" className="py-16 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Gamified Dialect Trivia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kannada">
            ಯಾವ ಕನ್ನಡ? — Dialect Detective Game
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Test your ear for Karnataka's linguistic flavors! Identify the regional origin of phrases, idioms, and local expressions.
          </p>
        </div>

        {/* Main Quiz Box */}
        <div className="max-w-3xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {!quizFinished ? (
            <div>
              {/* Progress Bar & Score header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-amber-400">
                  Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <span className="bg-slate-800 px-3 py-1 rounded-full text-white font-bold">
                  Score: {score}
                </span>
              </div>

              {/* Progress line */}
              <div className="w-full bg-slate-800 h-1.5 rounded-full my-4 overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question & Quote Prompt */}
              <div className="my-6">
                <h3 className="text-lg font-bold text-white mb-2 font-kannada">
                  {question.promptKannada}
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  {question.promptEnglish}
                </p>

                {/* Dialect Quote Display Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-950 to-amber-500/10 border border-amber-500/30 text-center relative mb-6">
                  <p className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-kannada mb-2">
                    {question.quoteKannada}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 italic mb-4">
                    {question.quotePhonetic}
                  </p>

                  <button
                    onClick={() => speakKannada(question.quoteKannada)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-300 text-xs font-semibold transition-all hover:scale-105"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Listen to Dialect Clue</span>
                  </button>
                </div>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {question.options.map((option) => {
                  const isSelected = selectedOption === option.id;
                  let btnStyle = 'bg-slate-950 border-slate-800 hover:border-amber-500/60 text-slate-200';

                  if (isAnswered) {
                    if (option.isCorrect) {
                      btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'bg-red-950/60 border-red-500 text-red-200 font-bold';
                    } else {
                      btnStyle = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option)}
                      disabled={isAnswered}
                      className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                    >
                      <span>{option.label}</span>
                      {isAnswered && option.isCorrect && (
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                      {isAnswered && isSelected && !option.isCorrect && (
                        <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Answer Explanation & Next Button */}
              {isAnswered && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-300">
                    <strong className="text-amber-400 block mb-1">Linguistic Detective Insight:</strong>
                    {question.explanation}
                  </div>
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shrink-0 shadow-md shadow-amber-500/20"
                  >
                    <span>{currentIdx + 1 === QUIZ_QUESTIONS.length ? 'View Final Results' : 'Next Clue'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Results & Celebration Card */
            <div className="text-center py-6">
              <div className="text-5xl mb-3">{earnedBadge.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-kannada mb-2">
                ಅಭಿನಂದನೆಗಳು! (Congratulations!)
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                You scored <strong className="text-amber-400 text-lg font-bold">{score}</strong> out of {QUIZ_QUESTIONS.length}!
              </p>

              {/* Badge Certificate */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 via-slate-950 to-red-600/20 border border-amber-500/50 max-w-md mx-auto mb-8 shadow-2xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  OFFICIAL BADGE AWARDED
                </span>
                <h4 className="text-xl font-black text-amber-200 font-kannada">
                  {earnedBadge.title}
                </h4>
                <p className="text-xs text-slate-300 mt-2 font-medium">
                  {earnedBadge.desc}
                </p>
              </div>

              <button
                onClick={restartQuiz}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all hover:scale-105"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Play Again & Improve Score</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
