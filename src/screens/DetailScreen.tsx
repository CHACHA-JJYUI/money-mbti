import React, { useState } from 'react';
import type { MoneyType } from '../data/types';
import { moneyTypes } from '../data/types';

interface DetailScreenProps {
  resultType: MoneyType;
  compatibilityType: MoneyType | null;
  incompatibilityType: MoneyType | null;
  onBack: () => void;
  onRestart: () => void;
  onShare: () => void;
}

const axisColors: Record<string, string> = {
  SP: '#3182f6',
  CI: '#10b981',
  RE: '#14b8a6',
  AD: '#f59e0b',
};

const axisEmojis: Record<string, string> = {
  SP: '💰',
  CI: '📋',
  RE: '🏷️',
  AD: '📈',
};

export function DetailScreen({
  resultType,
  compatibilityType,
  incompatibilityType,
  onBack,
  onRestart,
  onShare,
}: DetailScreenProps) {
  const axes = ['SP', 'CI', 'RE', 'AD'] as const;
  const [showAllTypes, setShowAllTypes] = useState(false);
  const allTypesList = Object.values(moneyTypes);

  const handleShowAllTypes = () => {
    // 여기서 보상형 광고 호출 후 setShowAllTypes(true)
    // 프로토타입에서는 바로 보여줌
    setShowAllTypes(true);
  };

  return (
    <>
      <div className="nav">
        <button className="nav-back" onClick={onBack} aria-label="뒤로가기">
          ←
        </button>
        <span className="nav-title">{resultType.code} 상세 분석</span>
      </div>

      <div className="screen fade-in">
        {/* 항목별 상세 분석 */}
        <h3 className="detail-section-title">📊 나의 소비 DNA</h3>

        {axes.map((axis) => {
          const detail = resultType.axisDetails[axis];
          const color = axisColors[axis];
          return (
            <div className="axis-card" key={axis}>
              <div className="axis-header">
                <span className="axis-label">
                  {axisEmojis[axis]} {detail.label}
                </span>
                <span className="axis-score-text" style={{ color }}>
                  {detail.score}점
                </span>
              </div>
              <div className="score-bar-container">
                <div
                  className="score-bar-fill"
                  style={{
                    width: `${detail.score}%`,
                    background: color,
                  }}
                />
              </div>
              <p className="axis-desc">{detail.description}</p>
            </div>
          );
        })}

        {/* 맞춤 꿀팁 */}
        <h3 className="detail-section-title">💡 맞춤 꿀팁</h3>
        <div className="tip-card">
          <p className="tip-summary">{resultType.tip.summary}</p>
          <ul className="tip-actions">
            {resultType.tip.actions.map((action, i) => (
              <li key={i} className="tip-action-item">
                <span className="tip-action-num">{i + 1}</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
          <div className="tip-warning">
            <span className="tip-warning-icon">⚠️</span>
            <span>{resultType.tip.warning}</span>
          </div>
        </div>

        {/* 궁합 & 상극 */}
        <h3 className="detail-section-title">💕 궁합 & 상극</h3>

        {compatibilityType && (
          <div className="compat-card">
            <p className="compat-label">💕 찰떡궁합</p>
            <p className="compat-name">
              {compatibilityType.emoji} {compatibilityType.code} "{compatibilityType.name}"
            </p>
            <p className="compat-desc">서로 부족한 부분을 채워주는 환상의 조합이에요</p>
          </div>
        )}

        {incompatibilityType && (
          <div className="compat-card" style={{ borderLeft: '3px solid #f04452' }}>
            <p className="compat-label">⚡ 상극</p>
            <p className="compat-name">
              {incompatibilityType.emoji} {incompatibilityType.code} "{incompatibilityType.name}"
            </p>
            <p className="compat-desc">만나면 돈 이야기로 티격태격할 수 있어요</p>
          </div>
        )}

        {/* 유명인 */}
        <h3 className="detail-section-title">🌟 같은 유형 유명인</h3>
        <div className="celeb-card">
          <p className="celeb-text">
            {resultType.celebrity}도 {resultType.code}?! 🤔
          </p>
        </div>

        {/* 전체 유형 보기 */}
        {!showAllTypes ? (
          <button className="detail-btn" onClick={handleShowAllTypes}>
            <div className="detail-btn-title">🔓 16가지 전체 유형 보기</div>
            <div className="detail-btn-sub">내 친구는 어떤 유형일까?</div>
          </button>
        ) : (
          <>
            <h3 className="detail-section-title">🃏 16가지 소비 유형</h3>
            <div className="all-types-list">
              {allTypesList.map((t) => (
                <div
                  key={t.code}
                  className={`type-list-card ${t.code === resultType.code ? 'is-me' : ''}`}
                >
                  <div className="type-list-left">
                    <span className="type-list-emoji">{t.emoji}</span>
                    <div>
                      <div className="type-list-top">
                        <span className="type-list-code">{t.code}</span>
                        <span className="type-list-name">{t.name}</span>
                        {t.code === resultType.code && (
                          <span className="type-list-me-badge">나</span>
                        )}
                      </div>
                      <div className="type-list-tagline">{t.tagline}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* 배너 광고 자리 */}
        <div className="banner-ad">광고 영역</div>
      </div>

      {/* 하단 CTA */}
      <div className="bottom-cta">
        <div className="bottom-cta-row">
          <button className="btn-primary" onClick={onShare}>
            결과 공유하기
          </button>
          <button className="btn-secondary" onClick={onRestart}>
            다시 테스트
          </button>
        </div>
      </div>
    </>
  );
}
