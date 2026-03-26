import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <>
      <div className="nav">
        <span className="nav-title">MoneyMBTI</span>
      </div>
      <div className="screen-center">
        <div className="start-emoji fade-in">💰</div>
        <h1 className="start-title fade-in" style={{ animationDelay: '0.1s' }}>
          나의 소비 유형은<br />뭘까요?
        </h1>
        <p className="start-desc fade-in" style={{ animationDelay: '0.2s' }}>
          12개 질문에 답하면<br />당신의 돈 성격이 보여요
        </p>
        <div className="badge fade-in" style={{ animationDelay: '0.3s' }}>
          👥 23,847명 참여
        </div>
      </div>
      <div className="bottom-cta">
        <button className="btn-primary" onClick={onStart}>
          테스트 시작하기
        </button>
      </div>
    </>
  );
}
