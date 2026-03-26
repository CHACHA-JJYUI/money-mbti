import React, { useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="screen-center">
      <div className="loading-emoji">🔮</div>
      <h2 className="loading-title">소비 성향을<br />분석하고 있어요</h2>
      <div className="loading-dots">
        <div className="loading-dot" />
        <div className="loading-dot" />
        <div className="loading-dot" />
      </div>
      <p className="loading-sub" style={{ marginTop: 16 }}>잠시만 기다려주세요...</p>
    </div>
  );
}
