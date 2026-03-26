import { useState, useCallback } from 'react';
import { questions, type AxisValue } from '../data/questions';
import { moneyTypes } from '../data/types';
import { calculateType } from '../utils/calculateType';

export type Screen = 'start' | 'question' | 'loading' | 'result' | 'detail';

export function useQuiz() {
  const [screen, setScreen] = useState<Screen>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<AxisValue, number>>[]>([]);
  const [resultCode, setResultCode] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const totalQuestions = questions.length;

  const startQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResultCode('');
    setSelectedOption(null);
    setScreen('question');
  }, []);

  const answerQuestion = useCallback((optionIndex: number) => {
    const question = questions[currentQuestion];
    const option = question.options[optionIndex];

    setSelectedOption(optionIndex);

    setTimeout(() => {
      const newAnswers = [...answers, option.scores];
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentQuestion + 1 >= totalQuestions) {
        // 마지막 질문 → 로딩 화면
        const code = calculateType(newAnswers);
        setResultCode(code);
        setScreen('loading');
      } else {
        setCurrentQuestion(prev => prev + 1);
      }
    }, 400);
  }, [currentQuestion, answers, totalQuestions]);

  const goToPrevQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setAnswers(prev => prev.slice(0, -1));
    }
  }, [currentQuestion]);

  const showResult = useCallback(() => {
    setScreen('result');
  }, []);

  const showDetail = useCallback(() => {
    setScreen('detail');
  }, []);

  const goBackToResult = useCallback(() => {
    setScreen('result');
  }, []);

  const restart = useCallback(() => {
    setScreen('start');
    setCurrentQuestion(0);
    setAnswers([]);
    setResultCode('');
    setSelectedOption(null);
  }, []);

  const resultType = resultCode ? moneyTypes[resultCode] : null;
  const compatibilityType = resultType ? moneyTypes[resultType.compatibility] : null;
  const incompatibilityType = resultType ? moneyTypes[resultType.incompatibility] : null;

  return {
    screen,
    currentQuestion,
    totalQuestions,
    questions,
    selectedOption,
    resultType,
    resultCode,
    compatibilityType,
    incompatibilityType,
    startQuiz,
    answerQuestion,
    goToPrevQuestion,
    showResult,
    showDetail,
    goBackToResult,
    restart,
  };
}
