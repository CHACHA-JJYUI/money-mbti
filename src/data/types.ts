export interface MoneyType {
  code: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  stats: {
    saving: number;
    impulse: number;
    investing: number;
    planning: number;
    flex: number;
  };
  tip: {
    summary: string;
    actions: string[];
    warning: string;
  };
  compatibility: string;
  incompatibility: string;
  celebrity: string;
  axisDetails: {
    SP: { label: string; score: number; description: string };
    CI: { label: string; score: number; description: string };
    RE: { label: string; score: number; description: string };
    AD: { label: string; score: number; description: string };
  };
}

export const moneyTypes: Record<string, MoneyType> = {
  SCRA: {
    code: 'SCRA',
    name: '전략적 절약왕',
    emoji: '🎯',
    tagline: '1원도 허투루 안 쓰는 당신, 근데 투자는 의외로 과감해요',
    description: '계획적으로 모으고, 가성비를 찾고, 공격적으로 투자하는 전략가 타입이에요.',
    stats: { saving: 95, impulse: 10, investing: 80, planning: 95, flex: 10 },
    tip: {
      summary: '저축 습관은 만점! 하지만 공격적 투자 비중을 한번 점검해보세요.',
      actions: [
        '모은 돈을 한 곳에 몰아넣지 말고, 여러 곳에 나눠두는 습관을 들여보세요',
        '매달 돈을 넣는 금액의 상한선을 정해두면 마음이 편해져요',
        '3개월에 한 번, 내 돈이 어디에 있는지 전체 점검하는 날을 정해보세요',
      ],
      warning: '절약만 하다 보면 삶의 질이 떨어질 수 있어요. 월 "나를 위한 예산"을 따로 정해보는 건 어때요?',
    },
    compatibility: 'PIED',
    incompatibility: 'PIEA',
    celebrity: '워런 버핏',
    axisDetails: {
      SP: { label: '저축형 (S)', score: 87, description: '월급날이 곧 저축날. 자동이체 설정해둔 당신, 빈 통장을 두고 못 자는 타입이에요.' },
      CI: { label: '계획형 (C)', score: 92, description: '장보기 전 리스트 필수. 충동구매? 그게 뭐죠? 엑셀이 제일 편한 사람이에요.' },
      RE: { label: '가성비형 (R)', score: 78, description: '최저가 비교는 기본, 쿠폰 없이 결제 못 해요. 가격 대비 만족도가 핵심이에요.' },
      AD: { label: '공격투자형 (A)', score: 65, description: '안전한 것만 하기엔 인생이 짧잖아요. 높은 수익률에 가슴이 뛰는 타입이에요.' },
    },
  },
  SCRD: {
    code: 'SCRD',
    name: '알뜰 수호자',
    emoji: '🛡️',
    tagline: '안전 제일! 철벽 방어 재테크의 달인',
    description: '저축하고, 계획 세우고, 가성비 따지고, 원금 보장 좋아하는 철통 방어형이에요.',
    stats: { saving: 95, impulse: 5, investing: 30, planning: 95, flex: 5 },
    tip: {
      summary: '안정적인 재테크의 달인! 하지만 인플레이션을 이기려면 소액 투자도 필요해요.',
      actions: [
        '월 5만 원이라도 여윳돈을 따로 모아두는 자동이체를 시작해보세요',
        '비상금 3~6개월치는 안전하게, 나머지는 좀 더 늘릴 수 있는 곳에 나눠보세요',
        '연 1회 "돈 공부의 날"을 정해서 새로운 재테크 방법을 알아보세요',
      ],
      warning: '원금만 지키다 보면 물가 상승에 돈의 가치가 줄어들 수 있어요. 작은 모험도 필요해요!',
    },
    compatibility: 'PIEA',
    incompatibility: 'PIED',
    celebrity: '유재석',
    axisDetails: {
      SP: { label: '저축형 (S)', score: 90, description: '통장에 돈이 쌓이는 걸 보면 행복한 사람. 저축이 곧 취미예요.' },
      CI: { label: '계획형 (C)', score: 88, description: '지출 내역 하나하나 기록하는 꼼꼼파. 예산 초과는 절대 용납 불가!' },
      RE: { label: '가성비형 (R)', score: 85, description: '같은 물건이면 당연히 싼 곳에서! 할인 정보 수집이 특기예요.' },
      AD: { label: '방어투자형 (D)', score: 92, description: '원금 보장이 제1원칙. 예적금과 채권이 가장 편안한 투자처예요.' },
    },
  },
  SCED: {
    code: 'SCED',
    name: '현명한 향유자',
    emoji: '🌿',
    tagline: '아끼면서도 즐길 건 즐기는 균형 잡힌 소비러',
    description: '저축도 하고 계획도 세우지만, 경험에는 아끼지 않는 현명한 타입이에요.',
    stats: { saving: 85, impulse: 15, investing: 35, planning: 90, flex: 30 },
    tip: {
      summary: '경험에 투자하는 안목이 훌륭해요! 같은 경험을 더 저렴하게 하는 방법도 있어요.',
      actions: [
        '여행은 비수기를 노리면 같은 경험을 절반 가격에 할 수 있어요',
        '문화생활 구독 서비스(밀리, 클래스101 등)로 경험 단가를 낮춰보세요',
        '경험 일기를 써보세요. 어떤 경험이 가장 만족도가 높았는지 패턴이 보여요',
      ],
      warning: '모든 경험에 돈을 쓸 필요는 없어요. 무료 전시, 공원 산책도 훌륭한 경험이에요!',
    },
    compatibility: 'PIRA',
    incompatibility: 'PIED',
    celebrity: '손석희',
    axisDetails: {
      SP: { label: '저축형 (S)', score: 82, description: '기본적으로 저축은 챙기는 사람. 하지만 특별한 경험에는 지갑을 열어요.' },
      CI: { label: '계획형 (C)', score: 86, description: '여행도, 소비도 계획적으로. 하지만 계획 안에 "즐거움 예산"이 있어요.' },
      RE: { label: '경험형 (E)', score: 70, description: '가격보다 가치를 보는 사람. 좋은 경험이라면 기꺼이 투자해요.' },
      AD: { label: '방어투자형 (D)', score: 80, description: '투자도 안정적으로. 큰 모험보다는 확실한 수익을 선호해요.' },
    },
  },
  SCEA: {
    code: 'SCEA',
    name: '모험가 저축러',
    emoji: '🧭',
    tagline: '철저히 모으고, 과감히 투자하는 모험가',
    description: '경험을 중시하면서도 공격적으로 투자하는, 도전적인 저축가예요.',
    stats: { saving: 80, impulse: 15, investing: 85, planning: 85, flex: 35 },
    tip: {
      summary: '저축하면서 과감하게 투자하는 모험가! 경험 소비와 투자 균형이 핵심이에요.',
      actions: [
        '돈을 불리는 통장과 경험 예산을 별도 통장으로 분리해서 관리해보세요',
        '여윳돈이 생길 때마다 일부를 "경험 통장"으로 옮겨보세요',
        '3개월에 한 번 내 돈이 잘 불고 있는지 돌아보세요',
      ],
      warning: '경험 소비까지 투자 마인드로 접근하지 마세요. 가끔은 수익률 없는 즐거움도 필요해요!',
    },
    compatibility: 'PIRD',
    incompatibility: 'SCRD',
    celebrity: '일론 머스크',
    axisDetails: {
      SP: { label: '저축형 (S)', score: 78, description: '기본 저축은 하지만, 투자할 종잣돈을 모으는 게 목표예요.' },
      CI: { label: '계획형 (C)', score: 82, description: '투자 계획은 철저하게! 리서치 없이 투자하지 않아요.' },
      RE: { label: '경험형 (E)', score: 68, description: '돈으로 살 수 없는 경험의 가치를 아는 사람이에요.' },
      AD: { label: '공격투자형 (A)', score: 75, description: '높은 수익률에 도전하는 걸 즐기는 타입. 리스크도 기회!' },
    },
  },
  SIRA: {
    code: 'SIRA',
    name: '본능의 투자러',
    emoji: '⚡',
    tagline: '저축은 하는데 소비는 직감으로! 투자는 과감하게',
    description: '기본적으로 모으는 건 잘하지만, 가끔 직감적 소비를 하고 투자에 공격적인 타입이에요.',
    stats: { saving: 75, impulse: 45, investing: 80, planning: 50, flex: 30 },
    tip: {
      summary: '직감이 뛰어난 투자자! 하지만 충동 소비는 직감이 아니라 감정이에요.',
      actions: [
        '10만 원 이상 소비는 "24시간 룰"을 적용해보세요. 하루 뒤에도 사고 싶으면 사는 거예요',
        '장바구니에 넣고 3일 기다리기를 습관화하면 30%는 안 사게 돼요',
        '돈 불리기와 소비를 분리하세요. 불리기는 분석으로, 소비는 예산 안에서!',
      ],
      warning: '"이건 직감이야"라는 말로 충동구매를 합리화하고 있진 않은지 돌아봐보세요!',
    },
    compatibility: 'PCED',
    incompatibility: 'SCRD',
    celebrity: '김범수 (카카오 창업자)',
    axisDetails: {
      SP: { label: '저축형 (S)', score: 72, description: '자동이체는 설정해둔 실용파. 하지만 가끔 통장이 텅 비기도...' },
      CI: { label: '충동형 (I)', score: 55, description: '"이건 사야 해" 하는 순간이 자주 오는 타입. 직감을 믿어요.' },
      RE: { label: '가성비형 (R)', score: 65, description: '평소엔 가성비를 따지지만, 꽂히면 가격은 신경 안 써요.' },
      AD: { label: '공격투자형 (A)', score: 78, description: '투자에서만큼은 과감한 결단을 내리는 타입이에요.' },
    },
  },
  SIRD: {
    code: 'SIRD',
    name: '안전한 직감러',
    emoji: '🔒',
    tagline: '모으는 건 잘하는데 가끔 충동이... 투자는 안전하게!',
    description: '저축은 하지만 충동 소비의 유혹에 약하고, 투자는 안전 제일인 타입이에요.',
    stats: { saving: 70, impulse: 50, investing: 25, planning: 45, flex: 35 },
    tip: {
      summary: '저축도 하고 안전 투자도 잘해요! 가끔 찾아오는 충동만 잘 다스리면 완벽해요.',
      actions: [
        '매달 "충동 예산" 5만 원을 따로 정해두세요. 이 안에서는 마음껏 써도 OK!',
        '온라인 쇼핑 앱의 알림을 꺼두면 충동의 80%를 차단할 수 있어요',
        '"이번 달 안 산 목록"을 만들어보세요. 아낀 돈을 보면 뿌듯해져요',
      ],
      warning: '충동을 너무 억제하면 스트레스가 쌓여요. 작은 충동은 허용하는 게 건강해요!',
    },
    compatibility: 'PCEA',
    incompatibility: 'PIEA',
    celebrity: '백종원',
    axisDetails: {
      SP: { label: '저축형 (S)', score: 68, description: '기본적으로 저축하려고 노력하지만, 가끔 유혹에 져요.' },
      CI: { label: '충동형 (I)', score: 58, description: '계획은 세우는데... 세일이 시작되면 계획이 무너져요.' },
      RE: { label: '가성비형 (R)', score: 62, description: '가성비를 중요하게 여기지만, 좋아하는 건 비싸도 사요.' },
      AD: { label: '방어투자형 (D)', score: 85, description: '투자는 안전하게! 원금 보장이 마음 편한 타입이에요.' },
    },
  },
  SIED: {
    code: 'SIED',
    name: '감성 저축러',
    emoji: '🌸',
    tagline: '모으면서도 경험에 약한 감성파',
    description: '저축 습관은 있지만, 특별한 경험 앞에서는 지갑이 열리는 감성적인 타입이에요.',
    stats: { saving: 65, impulse: 55, investing: 30, planning: 40, flex: 50 },
    tip: {
      summary: '감성과 저축을 동시에 추구하는 당신! 경험 예산을 정하면 둘 다 잡을 수 있어요.',
      actions: [
        '월 "경험 예산"을 정해두세요 (월급의 10~15% 추천). 이 안에서는 죄책감 없이!',
        '같은 경험도 얼리버드·쿠폰을 활용하면 30% 이상 아낄 수 있어요',
        '특별한 경험은 미리 계획해서 돈을 모아가는 재미도 있어요',
      ],
      warning: '경험에 감정이 실리면 예산을 초과하기 쉬워요. 감정 소비와 계획 소비를 구분해보세요!',
    },
    compatibility: 'PCRA',
    incompatibility: 'SCRA',
    celebrity: '아이유',
    axisDetails: {
      SP: { label: '저축형 (S)', score: 62, description: '저축은 하고 싶은데... 경험의 유혹이 너무 강해요.' },
      CI: { label: '충동형 (I)', score: 60, description: '"지금 아니면 못 해!" 하는 FOMO가 강한 타입이에요.' },
      RE: { label: '경험형 (E)', score: 75, description: '인생은 경험! 특별한 순간을 위해 기꺼이 투자해요.' },
      AD: { label: '방어투자형 (D)', score: 78, description: '모험보다는 안정. 예적금이 제일 편해요.' },
    },
  },
  SIEA: {
    code: 'SIEA',
    name: '자유로운 투자가',
    emoji: '🦅',
    tagline: '직감적으로 소비하고, 과감하게 투자하는 자유로운 영혼',
    description: '저축은 하지만 충동적이고, 경험 중심에 공격적 투자까지 하는 자유로운 타입이에요.',
    stats: { saving: 55, impulse: 65, investing: 85, planning: 35, flex: 60 },
    tip: {
      summary: '열정적인 자유로운 영혼! 하지만 비상금 없이 날다가 추락할 수 있어요.',
      actions: [
        '월급 들어오면 제일 먼저 비상금 통장에 20%를 자동이체하세요',
        '돈 불리는 통장과 생활비 통장을 완전히 분리해서 손실이 생활에 영향 안 주게 하세요',
        '1년에 한 번 "재정 건강 검진일"을 정해서 전체 자산을 점검해보세요',
      ],
      warning: '자유로운 건 좋지만, "미래의 나"도 자유로울 수 있게 최소한의 안전망은 갖춰두세요!',
    },
    compatibility: 'PCRD',
    incompatibility: 'SCRD',
    celebrity: '손정의',
    axisDetails: {
      SP: { label: '저축형 (S)', score: 55, description: '저축하려고 노력하지만, 기회가 오면 과감히 써요.' },
      CI: { label: '충동형 (I)', score: 68, description: '직감이 시키면 바로 행동! 후회는 나중에 하는 타입.' },
      RE: { label: '경험형 (E)', score: 80, description: '돈은 다시 벌 수 있지만, 경험은 지금뿐이라고 생각해요.' },
      AD: { label: '공격투자형 (A)', score: 82, description: '큰 수익을 위해 큰 리스크를 감수하는 대담한 투자자예요.' },
    },
  },
  PCRA: {
    code: 'PCRA',
    name: '계획적 플렉서',
    emoji: '💎',
    tagline: '쓸 때 확실히 쓰지만 다 계산된 거예요',
    description: '소비를 즐기면서도 계획적이고, 가성비를 따지며, 투자에도 적극적인 타입이에요.',
    stats: { saving: 30, impulse: 20, investing: 75, planning: 85, flex: 70 },
    tip: {
      summary: '쓸 때 확실히 쓰되 다 계산된 플렉서! 소비 총량만 관리하면 완벽해요.',
      actions: [
        '월 소비 한도를 정해두고, 그 안에서는 자유롭게 플렉스하세요',
        '큰 소비 후엔 다음 달 예산을 자동으로 줄이는 "균형 규칙"을 만들어보세요',
        '가성비로 산 것 중 실제로 잘 쓰는 것만 남기는 "1개월 정리"를 해보세요',
      ],
      warning: '"계획된 소비"라고 합리화하는 게 너무 많진 않은지 한 달 지출을 솔직하게 돌아봐보세요!',
    },
    compatibility: 'SIED',
    incompatibility: 'PIEA',
    celebrity: '제니 (BLACKPINK)',
    axisDetails: {
      SP: { label: '소비형 (P)', score: 72, description: '인생은 즐겨야 해! 하지만 무작정 쓰지는 않아요.' },
      CI: { label: '계획형 (C)', score: 80, description: '쇼핑도 전략적으로! 위시리스트와 가격 추적은 기본이에요.' },
      RE: { label: '가성비형 (R)', score: 70, description: '비싼 거 살 때도 가성비를 따져요. 세일 기간을 노리죠!' },
      AD: { label: '공격투자형 (A)', score: 68, description: '번 만큼 투자도 적극적으로! 수익률이 곧 동기부여예요.' },
    },
  },
  PCRD: {
    code: 'PCRD',
    name: '실용주의 소비러',
    emoji: '📊',
    tagline: '가성비 최고! 쓸 때는 쓰되 현명하게',
    description: '소비를 즐기지만 계획적이고, 가성비를 따지며, 투자는 안정적인 현실주의자예요.',
    stats: { saving: 25, impulse: 20, investing: 30, planning: 80, flex: 65 },
    tip: {
      summary: '실용주의의 정석! 하지만 가성비만 쫓다 보면 놓치는 것도 있어요.',
      actions: [
        '1년에 1~2번은 "가성비 무시 데이"를 정해서 경험에 투자해보세요',
        '리뷰 비교에 쓰는 시간도 비용이에요. "30분 룰" — 30분 내 결정 안 되면 패스!',
        '안전하게 모아둔 돈의 이자를 매년 체크해보세요. 물가보다 높은지가 중요해요',
      ],
      warning: '너무 실용적이면 재미가 없어져요. 가끔은 비효율적인 즐거움도 인생의 일부예요!',
    },
    compatibility: 'SIEA',
    incompatibility: 'PIEA',
    celebrity: '홍진경',
    axisDetails: {
      SP: { label: '소비형 (P)', score: 68, description: '소비하는 것 자체를 즐기지만, 항상 "이게 합리적인가" 따져봐요.' },
      CI: { label: '계획형 (C)', score: 78, description: '쇼핑 전 비교 분석은 필수! 리뷰도 꼼꼼히 보는 타입.' },
      RE: { label: '가성비형 (R)', score: 82, description: '같은 돈이면 더 좋은 걸! 가격 대비 만족도가 소비의 기준이에요.' },
      AD: { label: '방어투자형 (D)', score: 75, description: '투자보다는 소비에 돈을 쓰고, 투자는 안전하게 하는 편이에요.' },
    },
  },
  PCED: {
    code: 'PCED',
    name: '계획적 경험러',
    emoji: '🎪',
    tagline: '경험을 위해 계획적으로 소비하는 라이프 디자이너',
    description: '소비와 경험을 즐기면서 계획적이고, 투자는 안정적인 라이프스타일 설계자예요.',
    stats: { saving: 20, impulse: 25, investing: 25, planning: 80, flex: 75 },
    tip: {
      summary: '라이프 디자이너! 경험은 최고인데, 비상금이 부족하면 경험도 못 해요.',
      actions: [
        '월급의 최소 10%는 "무조건 저축"으로 자동이체하고 나머지로 경험하세요',
        '경험 캘린더를 만들어서 월별로 어떤 경험을 할지 미리 계획하세요',
        '무료/저렴한 문화 경험(공공 강좌, 무료 전시 등)을 적극 활용해보세요',
      ],
      warning: '지금 당장의 경험에만 집중하면 5년 후의 큰 경험(여행, 집 등)을 놓칠 수 있어요!',
    },
    compatibility: 'SIRA',
    incompatibility: 'SCRA',
    celebrity: '유이',
    axisDetails: {
      SP: { label: '소비형 (P)', score: 75, description: '소비 자체가 삶의 즐거움! 하지만 계획 안에서 즐겨요.' },
      CI: { label: '계획형 (C)', score: 76, description: '여행이든 소비든 플랜이 있어요. 즉흥은 거의 없어요.' },
      RE: { label: '경험형 (E)', score: 78, description: '물건보다 경험! 멋진 여행이나 맛집 탐방이 최고예요.' },
      AD: { label: '방어투자형 (D)', score: 72, description: '투자는 소극적인 편. 돈은 즐기기 위해 있다고 생각해요.' },
    },
  },
  PCEA: {
    code: 'PCEA',
    name: '대담한 라이프러',
    emoji: '🚀',
    tagline: '인생을 풍요롭게! 소비도 투자도 과감하게',
    description: '계획적이지만 소비와 경험, 공격적 투자를 모두 즐기는 대담한 라이프스타일러예요.',
    stats: { saving: 15, impulse: 25, investing: 80, planning: 75, flex: 80 },
    tip: {
      summary: '대담하게 사는 당신! 에너지는 최고인데, 속도 조절이 핵심이에요.',
      actions: [
        '매주 금요일 "재정 체크 5분"을 만들어 이번 주 소비를 돌아보세요',
        '돈 불리기와 소비를 합쳐 월 수입의 70%를 넘기지 않는 규칙을 세워보세요',
        '비상금 3개월치는 절대 안 건드리는 "성역"으로 분리해두세요',
      ],
      warning: '소비도 공격적, 투자도 공격적이면 한 번의 실패에 모든 게 무너질 수 있어요. 방어벽 하나는 세워두세요!',
    },
    compatibility: 'SIRD',
    incompatibility: 'SCRD',
    celebrity: '박서준',
    axisDetails: {
      SP: { label: '소비형 (P)', score: 78, description: '좋은 것, 좋은 경험에 돈을 아끼지 않는 소비 긍정파!' },
      CI: { label: '계획형 (C)', score: 72, description: '나름 계획은 세우지만, 좋은 기회가 오면 계획을 수정해요.' },
      RE: { label: '경험형 (E)', score: 82, description: '경험이 곧 자산! 여행, 문화, 맛집에 아낌없이 투자해요.' },
      AD: { label: '공격투자형 (A)', score: 76, description: '투자도 공격적으로! 높은 수익률을 쫓는 타입이에요.' },
    },
  },
  PIRA: {
    code: 'PIRA',
    name: '가성비 헌터',
    emoji: '🏹',
    tagline: '직감으로 딜을 잡고, 과감하게 투자하는 헌터',
    description: '충동적이지만 가성비를 놓치지 않고, 투자에서는 공격적인 행동파예요.',
    stats: { saving: 15, impulse: 70, investing: 78, planning: 30, flex: 60 },
    tip: {
      summary: '가성비의 달인! 하지만 "싸니까 사는" 함정에 빠지지 않게 조심하세요.',
      actions: [
        '"사기 전 체크" 3초: ①필요한가? ②이번 달에 쓸 건가? ③없으면 불편한가?',
        '세일 앱 알림을 끄고, 진짜 필요할 때만 검색해서 사세요',
        '충동으로 산 물건 중 한 달 후에도 쓰는 비율을 체크해보세요. 현실을 알게 돼요',
      ],
      warning: '가성비 좋은 걸 10개 사는 것보다, 진짜 좋은 걸 1개 사는 게 더 가성비 높을 수 있어요!',
    },
    compatibility: 'SCED',
    incompatibility: 'SCRD',
    celebrity: '김구라',
    axisDetails: {
      SP: { label: '소비형 (P)', score: 80, description: '쓰고 싶을 때 쓰는 소비파! 하지만 나름 가성비는 챙겨요.' },
      CI: { label: '충동형 (I)', score: 72, description: '세일! 할인! 이런 단어에 즉각 반응하는 타입이에요.' },
      RE: { label: '가성비형 (R)', score: 68, description: '충동적이지만 가격은 비교해요. "이 가격에 이 퀄리티?" 가 입버릇.' },
      AD: { label: '공격투자형 (A)', score: 74, description: '투자에서도 "이 가격이면 사야지!" 하는 가치 투자파.' },
    },
  },
  PIRD: {
    code: 'PIRD',
    name: '소확행 추구러',
    emoji: '☕',
    tagline: '작지만 확실한 행복! 가성비 소비의 달인',
    description: '충동적이지만 가성비를 찾고, 투자는 안전하게 하는 소확행 추구 타입이에요.',
    stats: { saving: 10, impulse: 70, investing: 20, planning: 25, flex: 55 },
    tip: {
      summary: '작은 행복의 전문가! 소확행도 모이면 꽤 큰 돈이에요.',
      actions: [
        '한 달 소확행 지출을 합산해보세요. 생각보다 클 거예요 (보통 20~30만 원)',
        '월 "소확행 예산"을 정해두고 그 안에서 행복하세요 (5~10만 원 추천)',
        '편의점 대신 마트, 카페 대신 텀블러 — 작은 대체로 큰 차이를 만들 수 있어요',
      ],
      warning: '소확행을 포기하라는 게 아니에요! 예산 안에서 더 만족스러운 소확행을 고르는 거예요.',
    },
    compatibility: 'SCEA',
    incompatibility: 'SCRA',
    celebrity: '송민호',
    axisDetails: {
      SP: { label: '소비형 (P)', score: 82, description: '편의점 신상, 카페 신메뉴, 작은 행복에 지갑을 열어요.' },
      CI: { label: '충동형 (I)', score: 75, description: '"이건 사야 해" 가 하루에도 몇 번씩. 장바구니가 항상 차 있어요.' },
      RE: { label: '가성비형 (R)', score: 60, description: '충동적이지만 비싼 건 못 사요. 만원의 행복을 찾는 타입!' },
      AD: { label: '방어투자형 (D)', score: 80, description: '투자는 무서워요. 적금이 제일 마음 편해요.' },
    },
  },
  PIED: {
    code: 'PIED',
    name: 'YOLO 감성러',
    emoji: '🎉',
    tagline: '인생은 한 번! 경험이 곧 자산인 감성파',
    description: '소비를 즐기고, 충동적이고, 경험을 중시하며, 투자는 안정적인 YOLO 타입이에요.',
    stats: { saving: 10, impulse: 80, investing: 20, planning: 15, flex: 90 },
    tip: {
      summary: 'YOLO 정신 최고! 하지만 "미래의 나"도 YOLO 할 수 있게 해주세요.',
      actions: [
        '월급 들어오면 제일 먼저 10%를 자동이체하세요. 나머지로 YOLO!',
        '"이번 달 최고의 경험 1개"를 고르는 습관을 들이세요. 모든 경험을 다 할 필요는 없어요',
        '친구와의 약속에서 가끔은 "무료 옵션"(공원, 집 요리 등)을 제안해보세요',
      ],
      warning: '30대의 YOLO는 멋있지만, 40대에 YOLO 하려면 30대에 최소한의 저축은 필요해요!',
    },
    compatibility: 'SCRA',
    incompatibility: 'SCRD',
    celebrity: '지코',
    axisDetails: {
      SP: { label: '소비형 (P)', score: 88, description: '돈은 쓰라고 있는 거! 인생에서 즐거움이 제일 중요해요.' },
      CI: { label: '충동형 (I)', score: 85, description: '"지금 이 순간" 이 중요한 사람. 기분이 시키면 바로 결제!' },
      RE: { label: '경험형 (E)', score: 90, description: '물건보다 추억! 여행, 콘서트, 맛집이 삶의 에너지예요.' },
      AD: { label: '방어투자형 (D)', score: 70, description: '투자? 잘 모르겠고, 일단 지금을 즐기자는 마인드예요.' },
    },
  },
  PIEA: {
    code: 'PIEA',
    name: '인생은 모험',
    emoji: '🎰',
    tagline: '쓰는 것도 과감, 투자도 과감! 올인하는 모험가',
    description: '소비도 충동적, 경험 중시, 투자도 공격적인 가장 대담한 타입이에요.',
    stats: { saving: 5, impulse: 90, investing: 90, planning: 10, flex: 95 },
    tip: {
      summary: '가장 대담한 모험가! 열정은 자산이지만, 안전망 없는 모험은 도박이에요.',
      actions: [
        '월 소득의 20%는 "절대 안 건드리는 통장"에 자동이체하세요. 나머지로 모험!',
        '돈을 넣는 한도를 미리 정해두세요. "여기까지만" 라인을 넘으면 무조건 멈추기',
        '큰 소비 전 "1주일 쿨다운"을 하세요. 1주일 후에도 원하면 진짜 원하는 거예요',
      ],
      warning: '인생은 모험이지만, 모험을 계속하려면 기본 체력(비상금)이 필요해요. 체력 0이면 게임오버!',
    },
    compatibility: 'SCRD',
    incompatibility: 'SCRA',
    celebrity: '래퍼 딘',
    axisDetails: {
      SP: { label: '소비형 (P)', score: 92, description: '지금 행복하지 않으면 무슨 의미? 원하면 사는 거예요!' },
      CI: { label: '충동형 (I)', score: 90, description: '계획? 그건 재미없잖아요. 직감이 최고의 가이드예요.' },
      RE: { label: '경험형 (E)', score: 92, description: '한 번뿐인 인생, 최대한 많은 경험을 하고 싶은 타입이에요.' },
      AD: { label: '공격투자형 (A)', score: 88, description: '하이리스크 하이리턴! 잃어도 다시 벌면 된다는 마인드.' },
    },
  },
};
