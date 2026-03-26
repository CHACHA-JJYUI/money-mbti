import React from 'react';
import type { MoneyType } from '../data/types';
import { RadarChart } from '../components/RadarChart';

interface ResultScreenProps {
  resultType: MoneyType;
  compatibilityType: MoneyType | null;
  onDetail: () => void;
  onRestart: () => void;
  onShare: () => void;
}

export function ResultScreen({
  resultType,
  compatibilityType,
  onDetail,
  onRestart,
  onShare,
}: ResultScreenProps) {
  return (
    <>
      <div className="nav">
        <span className="nav-title">나의 소비 유형</span>
      </div>

      <div className="screen fade-in">
        {/* 결과 카드 */}
        <div className="result-card">
          <p className="result-subtitle">당신의 소비 유형은</p>
          <div className="result-emoji">{resultType.emoji}</div>
          <div className="result-code">{resultType.code}</div>
          <h2 className="result-name">{resultType.name}</h2>
          <p className="result-tagline">{resultType.tagline}</p>

          <div className="radar-container">
            <RadarChart stats={resultType.stats} size={220} />
          </div>
        </div>

        {/* 궁합 유형 */}
        {compatibilityType && (
          <div className="compat-card">
            <p className="compat-label">💕 찰떡궁합</p>
            <p className="compat-name">
              {compatibilityType.emoji} {compatibilityType.code} "{compatibilityType.name}"
            </p>
            <p className="compat-desc">
              서로 부족한 부분을 채워주는 환상의 조합이에요
            </p>
          </div>
        )}

        {/* 상세 분석 버튼 */}
        <button className="detail-btn" onClick={onDetail}>
          <div className="detail-btn-title">🔓 내 소비 DNA 자세히 보기</div>
          <div className="detail-btn-sub">항목별 점수, 절약 꿀팁, 상극 유형까지!</div>
        </button>

        {/* 다시 테스트 */}
        <div style={{ textAlign: 'center', marginTop: 4 }}>
          <button className="btn-text" onClick={onRestart}>
            🔄 다시 테스트하기
          </button>
        </div>

        {/* 배너 광고 자리 */}
        <div className="banner-ad">광고 영역</div>
      </div>

      {/* 하단 CTA */}
      <div className="bottom-cta">
        <div className="bottom-cta-row">
          <button className="btn-primary" onClick={onShare}>
            결과 공유하기
          </button>
          <button className="btn-secondary" onClick={onShare}>
            비교하기
          </button>
        </div>
      </div>
    </>
  );
}
