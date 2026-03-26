import type { AxisValue } from '../data/questions';

export interface Scores {
  S: number;
  P: number;
  C: number;
  I: number;
  R: number;
  E: number;
  A: number;
  D: number;
}

export function calculateType(answers: Partial<Record<AxisValue, number>>[]): string {
  const totals: Scores = { S: 0, P: 0, C: 0, I: 0, R: 0, E: 0, A: 0, D: 0 };

  for (const answer of answers) {
    for (const [key, value] of Object.entries(answer)) {
      totals[key as AxisValue] += value;
    }
  }

  const sp = totals.S >= totals.P ? 'S' : 'P';
  const ci = totals.C >= totals.I ? 'C' : 'I';
  const re = totals.R >= totals.E ? 'R' : 'E';
  const ad = totals.A >= totals.D ? 'A' : 'D';

  return `${sp}${ci}${re}${ad}`;
}

export function getAxisScores(answers: Partial<Record<AxisValue, number>>[]): {
  SP: number; CI: number; RE: number; AD: number;
} {
  const totals: Scores = { S: 0, P: 0, C: 0, I: 0, R: 0, E: 0, A: 0, D: 0 };

  for (const answer of answers) {
    for (const [key, value] of Object.entries(answer)) {
      totals[key as AxisValue] += value;
    }
  }

  // 각 축의 비율을 0~100으로 변환 (첫번째 값 기준)
  const normalize = (a: number, b: number) => Math.round((a / (a + b || 1)) * 100);

  return {
    SP: normalize(totals.S, totals.P),
    CI: normalize(totals.C, totals.I),
    RE: normalize(totals.R, totals.E),
    AD: normalize(totals.A, totals.D),
  };
}
