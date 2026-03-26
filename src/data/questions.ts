export type Axis = 'SP' | 'CI' | 'RE' | 'AD';
export type AxisValue = 'S' | 'P' | 'C' | 'I' | 'R' | 'E' | 'A' | 'D';

export interface AnswerOption {
  text: string;
  scores: Partial<Record<AxisValue, number>>;
}

export interface Question {
  id: number;
  axis: Axis;
  text: string;
  options: AnswerOption[];
}

export const questions: Question[] = [
  // S/P 축 (저축 vs 소비)
  {
    id: 1,
    axis: 'SP',
    text: '월급날! 첫 번째로 하는 일은?',
    options: [
      { text: '저축 통장으로 자동이체 확인', scores: { S: 3 } },
      { text: '위시리스트 장바구니 결제', scores: { P: 3 } },
      { text: '일단 맛있는 거 먹으러', scores: { P: 1 } },
      { text: '이번 달 지출 계획표 작성', scores: { S: 1 } },
    ],
  },
  {
    id: 2,
    axis: 'SP',
    text: '갑자기 보너스 50만 원이 들어왔다면?',
    options: [
      { text: '바로 적금/투자', scores: { S: 3 } },
      { text: '갖고 싶던 거 구매', scores: { P: 3 } },
      { text: '반은 저축, 반은 소비', scores: { S: 1 } },
      { text: '친구들이랑 한턱', scores: { P: 1 } },
    ],
  },
  {
    id: 3,
    axis: 'SP',
    text: '통장 잔고가 예상보다 많을 때\n기분은?',
    options: [
      { text: '"오! 더 모아야지"', scores: { S: 3 } },
      { text: '"이 정도면 써도 되겠다"', scores: { P: 3 } },
      { text: '"왜 이렇게 많지? 뭐 빠뜨렸나"', scores: { S: 1 } },
      { text: '"기념으로 나한테 선물"', scores: { P: 1 } },
    ],
  },
  // C/I 축 (계획 vs 충동)
  {
    id: 4,
    axis: 'CI',
    text: '쇼핑할 때 나의 패턴은?',
    options: [
      { text: '며칠 전부터 비교 리서치', scores: { C: 3 } },
      { text: '눈에 보이면 바로 결제', scores: { I: 3 } },
      { text: '장바구니에 넣고 하루 고민', scores: { C: 1 } },
      { text: '세일 알림 뜨면 즉시 클릭', scores: { I: 1 } },
    ],
  },
  {
    id: 5,
    axis: 'CI',
    text: '여행 계획을 세울 때?',
    options: [
      { text: '엑셀로 일정표 + 예산표 작성', scores: { C: 3 } },
      { text: '비행기부터 끊고 생각', scores: { I: 3 } },
      { text: '대충 숙소만 잡고 나머지는 현지에서', scores: { I: 1 } },
      { text: '여행 블로그 5개 이상 참고', scores: { C: 1 } },
    ],
  },
  {
    id: 6,
    axis: 'CI',
    text: '편의점에서 1+1 상품을\n봤을 때?',
    options: [
      { text: '필요한 거면 사고, 아니면 패스', scores: { C: 3 } },
      { text: '일단 득템!', scores: { I: 3 } },
      { text: '유통기한 확인하고 결정', scores: { C: 1 } },
      { text: '없어도 되는데... 괜찮을듯?', scores: { I: 1 } },
    ],
  },
  // R/E 축 (가성비 vs 경험)
  {
    id: 7,
    axis: 'RE',
    text: '카페 선택 기준은?',
    options: [
      { text: '가격 대비 양이 많은 곳', scores: { R: 3 } },
      { text: '분위기 좋고 인스타 감성', scores: { E: 3 } },
      { text: '집에서 가장 가까운 곳', scores: { R: 1 } },
      { text: '한정판 메뉴 나온 곳', scores: { E: 1 } },
    ],
  },
  {
    id: 8,
    axis: 'RE',
    text: '생일 선물 고를 때?',
    options: [
      { text: '가격 비교해서 최저가로', scores: { R: 3 } },
      { text: '비싸도 특별한 경험 선물', scores: { E: 3 } },
      { text: '쿠폰/할인 적용 가능한 걸로', scores: { R: 1 } },
      { text: '돈보다 정성이 중요', scores: { E: 1 } },
    ],
  },
  {
    id: 9,
    axis: 'RE',
    text: '10만 원이 생기면?',
    options: [
      { text: '평소 사고 싶던 가성비 아이템 여러 개', scores: { R: 3 } },
      { text: '한 번도 안 해본 특별한 경험', scores: { E: 3 } },
      { text: '실용적인 생활용품 업그레이드', scores: { R: 1 } },
      { text: '친구와 함께하는 특별한 하루', scores: { E: 1 } },
    ],
  },
  // A/D 축 (공격 투자 vs 방어 투자) — 일상 상황으로!
  {
    id: 10,
    axis: 'AD',
    text: '친구가 "이거 하면 돈 된대!"\n라고 하면?',
    options: [
      { text: '뭔데? 나도 바로 해볼래!', scores: { A: 3 } },
      { text: '그런 말 안 믿어, 위험해', scores: { D: 3 } },
      { text: '조금만 해볼까... 잃어도 괜찮을 만큼만', scores: { A: 1 } },
      { text: '좀 더 알아보고 안전한 거 할래', scores: { D: 1 } },
    ],
  },
  {
    id: 11,
    axis: 'AD',
    text: '여윳돈 100만 원이 있다면\n어디에 넣을래?',
    options: [
      { text: '요즘 핫한 곳에 투자! 대박 가능성!', scores: { A: 3 } },
      { text: '적금이 제일 마음 편해', scores: { D: 3 } },
      { text: '여러 곳에 나눠서 조금씩', scores: { D: 1 } },
      { text: '좀 모험적이지만 관심 가는 곳에', scores: { A: 1 } },
    ],
  },
  {
    id: 12,
    axis: 'AD',
    text: '"원금은 보장 안 되지만\n수익이 클 수 있어요"라는 말에?',
    options: [
      { text: '수익이 얼마나 큰데? 관심 있어!', scores: { A: 3 } },
      { text: '원금 보장 안 되면 절대 안 해', scores: { D: 3 } },
      { text: '잃어도 되는 돈으로만 해볼까', scores: { A: 1 } },
      { text: '안전하면서 조금이라도 이자 더 주는 건 없어?', scores: { D: 1 } },
    ],
  },
];
