export const TEXT_HEADER_BUTTON_SIGNOUT = '로그아웃';

export const TEXT_HEADER_BUTTON_SIGNIN = '로그인';

export const TEXT_HEADER_NAVIGATION_INTRODUCE_SERVICE = '서비스 소개';

export const TEXT_HEADER_NAVIGATION_ADD_TREE = '나무 심기';

export const TEXT_HEADER_NAVIGATION_CAMPAIGN = '환경 살리기';

export const TEXT_404_HEADING1_TITLE = '404 Not Found';

export const TEXT_404_PARAGRAPH_DESCRIPTION = '요청하신 페이지를 찾을 수 없습니다.';

export const TEXT_LANDING_IMAGE_CAROUSEL_ALTERNATIVE = (idx: number) => `Image ${idx}`;

export const TEXT_LANDING_HEADING1_INTRODUCE = '서비스 소개';

export const TEXT_LANDING_CONTENT = `\
Elice-Tree 는 모두가 참여할 수 있는 탄소배출 감소를 통해 지속가능한 발전을 이루고자 하는 혁신적인 플랫폼입니다.
기업과 개인이 일상에서 쉽게 간과할 수 있는 탄소배출 문제를 파악하고 이를 효과적으로 줄이기 위한 솔루션을 제공합니다.
Elice Tree 는 사용자 친화적인 인터페이스를 통해 기업과 개인의 탄소배출 현황을 체계적으로 분석하고, 이를 바탕으로 맞춤형 체크리스트와 실행 가능한 실천 방안을 제시합니다.
특히, 회사 내에서 발생하는 불필요한 탄소배출 사례들을 구체적으로 모색하고 이를 줄이기 위한 구체적인 실천 목록을 제공합니다.
또한, 사용자들은 탄소저감 캠페인에 직접 참여하거나 자신만의 실천 기록을 관리하며, 이러한 작은 변화가 환경에 미치는 긍정적인 영향을 확인할 수 있습니다.
Elice Tree 는 단순히 정보를 제공하는 것을 넘어, 모든 사용자가 친환경적인 습관을 형성하고 실질적인 변화를 만들어낼 수 있도록 돕습니다.
우리와 함께 작은 실천을 통해 더 큰 변화를 만들어 나가세요.
지속가능한 미래는 여러분의 손끝에서 시작됩니다! 🌍✨\
`;

export const TEXT_SIGNIN_IMAGE_LOGO_ELICE_ALTERNATIVE = 'The logo image of elice';

export const TEXT_SIGNIN_INPUT_USER_ID_PLACEHOLDER = 'ID';

export const TEXT_SIGNIN_INPUT_PASSWORD_PLACEHOLDER = '****';

export const TEXT_SIGNIN_HEADING1_TITLE = `\
로그인 후
탄소배출감소에 동참하세요!\
`;

export const TEXT_SIGNIN_PARAGRAPH_DESCRIPTION = `\
로그인 후 무료로 체험하실 수 있어요.
멋진 환경 지킴이가 되어 보세요!\
`;

export const TEXT_SIGNIN_BUTTON_SIGNIN = '로그인';

export const TEXT_SIGNIN_BUTTON_GO_TO_SIGNUP = '아직 회원이 아니신가요?';

export const TEXT_SIGNIN_BUTTON_GO_TO_LANDING = '서비스 둘러보기';

export const TEXT_SIGNUP_IMAGE_LOGO_ELICE_ALTERNATIVE = 'The logo image of elice';

export const TEXT_SIGNUP_INPUT_USER_ID_PLACEHOLDER = 'ID';

export const TEXT_SIGNUP_INPUT_PASSWORD_PLACEHOLDER = '****';

export const TEXT_SINGUP_HEADING1_TITLE = `\
회원가입 후
탄소배출감소에 동참하세요!\
`;

export const TEXT_SIGNUP_PARAGRAPH_DESCRIPTION = `\
회원가입 후 무료로 체험하실 수 있어요.
멋진 환경 지킴이가 되어 보세요!\
`;

export const TEXT_SIGNUP_BUTTON_SIGNUP = '회원가입';

export const TEXT_SIGNUP_BUTTON_GO_TO_SIGNIN = '이미 회원이신가요?';

export const TEXT_TODOS_TITLE_PARAGRAPH = '탄소배출감소 동참하기';

export const TEXT_TODOS_NO_CONTENT = '할 일 나무를 심어보세요!';

export const TEXT_TODOS_DIV_TOTAL = (totalCarbon: number) => `\
총 ${totalCarbon.toFixed(2)} kg 의 탄소\
`;

export const TEXT_TODOS_FOOTER_SUMMARY = (userId: string, totalTree: number) => `\
${userId} 님은 
${totalTree} 그루의 나무를 심으셨어요!
`;

export const TEXT_TODOS_FOOTER_SUMMARY_EMPTY = '할 일 나무를 심고 탄소를 절약해보세요!';

export const TEXT_ADD_TODO_INPUT_PLACEHOLDER = '나무에 새길 할 일을 입력해보세요!';

export const TEXT_ADD_TODO_LABEL_INPUT_CARBON = '탄소 배출량(kg)';

export const TEXT_ADD_TODO_LABEL_INPUT_TREE = '나무 수(그루)';

export const TEXT_ADD_TODO_BUTTON_ADD = '나무 심기';

export const TEXT_TODO_REDUCTION = (tree: number, reduction: string) =>
  `${tree} 그루로 ${reduction} g 의 탄소 배출 감소`;

export const TEXT_TODO_BUTTON_DELETE = '삭제';

export const TEXT_MODAL_BUTTON_CONFIRM = '확인';
