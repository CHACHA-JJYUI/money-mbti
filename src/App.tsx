import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import { StartScreen } from './screens/StartScreen';
import { QuestionScreen } from './screens/QuestionScreen';
import { LoadingScreen } from './screens/LoadingScreen';
import { ResultScreen } from './screens/ResultScreen';
import { DetailScreen } from './screens/DetailScreen';

export default function App() {
  const {
    screen,
    currentQuestion,
    totalQuestions,
    questions,
    selectedOption,
    resultType,
    compatibilityType,
    incompatibilityType,
    startQuiz,
    answerQuestion,
    goToPrevQuestion,
    showResult,
    showDetail,
    goBackToResult,
    restart,
  } = useQuiz();

  const handleShare = () => {
    if (!resultType) return;

    const shareText = `나의 소비 유형은 ${resultType.emoji} ${resultType.code} "${resultType.name}"! ${resultType.tagline}`;

    if (navigator.share) {
      navigator.share({
        title: 'MoneyMBTI - 나의 소비 유형 테스트',
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText + '\n' + window.location.href)
        .then(() => alert('결과가 복사되었어요! 붙여넣기로 공유해보세요.'))
        .catch(() => {});
    }
  };

  switch (screen) {
    case 'start':
      return <StartScreen onStart={startQuiz} />;

    case 'question':
      return (
        <QuestionScreen
          question={questions[currentQuestion]}
          current={currentQuestion}
          total={totalQuestions}
          selectedOption={selectedOption}
          onAnswer={answerQuestion}
          onBack={goToPrevQuestion}
        />
      );

    case 'loading':
      return <LoadingScreen onComplete={showResult} />;

    case 'result':
      if (!resultType) return null;
      return (
        <ResultScreen
          resultType={resultType}
          compatibilityType={compatibilityType}
          onDetail={showDetail}
          onRestart={restart}
          onShare={handleShare}
        />
      );

    case 'detail':
      if (!resultType) return null;
      return (
        <DetailScreen
          resultType={resultType}
          compatibilityType={compatibilityType}
          incompatibilityType={incompatibilityType}
          onBack={goBackToResult}
          onRestart={restart}
          onShare={handleShare}
        />
      );

    default:
      return null;
  }
}
