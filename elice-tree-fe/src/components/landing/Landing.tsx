import * as S from './Landing.styles';
import { useState, useEffect } from 'react';
import imageCarousel1 from '@/assets/images/bg-landing.png';
import imageCarousel2 from '@/assets/images/bg-landing2.png';
import imageCarousel3 from '@/assets/images/bg-landing3.png';

const images = [imageCarousel1, imageCarousel2, imageCarousel3];

export default function Landing() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.DivContainer>
      <S.PicContainer src={images[currentIdx]} alt="Img for landing page" />
      <S.ContentWrapper>
        <S.Heading1Introduce>우리의 지구를 위해 함께</S.Heading1Introduce>
        <S.Content>
          Elice-Tree 는 모두가 참여할 수 있는 탄소배출 감소를 통해 지속가능한 발전을 이루고자 하는
          혁신적인 플랫폼입니다. 기업과 개인이 일상에서 쉽게 간과할 수 있는 탄소배출 문제를 파악하고
          이를 효과적으로 줄이기 위한 솔루션을 제공합니다.
          <br />
          <br />
          Elice Tree는 사용자 친화적인 인터페이스를 통해 기업과 개인의 탄소배출 현황을 체계적으로
          분석하고, 이를 바탕으로 맞춤형 체크리스트와 실행 가능한 실천 방안을 제시합니다. 특히, 회사
          내에서 발생하는 불필요한 탄소배출 사례들을 구체적으로 모색하고 이를 줄이기 위한 구체적인
          실천 목록을 제공합니다. 또한, 사용자들은 탄소저감 캠페인에 직접 참여하거나 자신만의 실천
          기록을 관리하며, 이러한 작은 변화가 환경에 미치는 긍정적인 영향을 확인할 수 있습니다.
          <br />
          <br /> Elice Tree는 단순히 정보를 제공하는 것을 넘어, 모든 사용자가 친환경적인 습관을
          형성하고 실질적인 변화를 만들어낼 수 있도록 돕습니다. 우리와 함께 작은 실천을 통해 더 큰
          변화를 만들어 나가세요.
          <br />
          <br /> 지속가능한 미래는 여러분의 손끝에서 시작됩니다! 🌍✨
        </S.Content>
      </S.ContentWrapper>
    </S.DivContainer>
  );
}
