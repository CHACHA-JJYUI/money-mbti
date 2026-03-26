import React from 'react';

interface RadarChartProps {
  stats: {
    saving: number;
    impulse: number;
    investing: number;
    planning: number;
    flex: number;
  };
  size?: number;
}

const labels = ['절약력', '충동', '투자', '계획', '플렉스'];

export function RadarChart({ stats, size = 200 }: RadarChartProps) {
  const padding = 40;
  const fullSize = size + padding * 2;
  const center = fullSize / 2;
  const radius = size * 0.38;
  const values = [stats.saving, stats.impulse, stats.investing, stats.planning, stats.flex];
  const count = values.length;
  const angleStep = (Math.PI * 2) / count;
  const startAngle = -Math.PI / 2;

  const getPoint = (index: number, value: number) => {
    const angle = startAngle + index * angleStep;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const gridLevels = [0.25, 0.5, 0.75, 1];

  const dataPoints = values.map((v, i) => getPoint(i, v));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg width={fullSize} height={fullSize} viewBox={`0 0 ${fullSize} ${fullSize}`}>
      {/* Grid */}
      {gridLevels.map((level) => {
        const points = Array.from({ length: count }, (_, i) => {
          const angle = startAngle + i * angleStep;
          const r = level * radius;
          return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
        });
        return (
          <polygon
            key={level}
            points={points.join(' ')}
            fill="none"
            stroke="#e5e8eb"
            strokeWidth="1"
          />
        );
      })}

      {/* Axes */}
      {Array.from({ length: count }, (_, i) => {
        const angle = startAngle + i * angleStep;
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={center + radius * Math.cos(angle)}
            y2={center + radius * Math.sin(angle)}
            stroke="#e5e8eb"
            strokeWidth="1"
          />
        );
      })}

      {/* Data area */}
      <path
        d={dataPath}
        fill="rgba(49, 130, 246, 0.15)"
        stroke="#3182f6"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="#3182f6" />
      ))}

      {/* Labels */}
      {labels.map((label, i) => {
        const angle = startAngle + i * angleStep;
        const labelR = radius + 28;
        const x = center + labelR * Math.cos(angle);
        const y = center + labelR * Math.sin(angle);
        const score = values[i];

        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="var(--font-family)"
          >
            <tspan x={x} dy="-7" fontSize="12" fill="#4e5968" fontWeight="600">{label}</tspan>
            <tspan x={x} dy="16" fontSize="11" fill="#3182f6" fontWeight="700">{score}점</tspan>
          </text>
        );
      })}
    </svg>
  );
}
