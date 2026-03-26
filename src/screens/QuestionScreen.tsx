import React from 'react';
import type { Question } from '../data/questions';

interface QuestionScreenProps {
  question: Question;
  current: number;
  total: number;
  selectedOption: number | null;
  onAnswer: (index: number) => void;
  onBack: () => void;
}

export function QuestionScreen({
  question,
  current,
  total,
  selectedOption,
  onAnswer,
  onBack,
}: QuestionScreenProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <>
      <div className="nav">
        {current > 0 && (
          <button className="nav-back" onClick={onBack} aria-label="이전 질문">
            ←
          </button>
        )}
        <span className="nav-title"></span>
      </div>

      <div className="screen slide-enter" key={question.id}>
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="progress-text">{current + 1}/{total}</div>
        </div>

        <div className="question-label">Q{current + 1}.</div>
        <h2 className="question-text">{question.text}</h2>

        <div className="options-list">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-card ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => selectedOption === null && onAnswer(index)}
              disabled={selectedOption !== null}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
