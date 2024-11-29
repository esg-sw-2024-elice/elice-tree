import * as S from './Landing.styles';
import { useState, useEffect } from 'react';
import imageCarousel1 from '@/assets/images/bg-landing.png';
import imageCarousel2 from '@/assets/images/bg-landing2.png';
import imageCarousel3 from '@/assets/images/bg-landing3.png';
import {
  TEXT_LANDING_CONTENT,
  TEXT_LANDING_HEADING1_INTRODUCE,
  TEXT_LANDING_IMAGE_CAROUSEL_ALTERNATIVE,
} from '@/constants';

const images = [imageCarousel1, imageCarousel2, imageCarousel3];

export default function Landing() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIdx]);

  const handleNext = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length);
  };

  return (
    <S.DivContainer>
      <S.DivWrapperImage>
        <S.ImageCarousel
          src={images[currentIdx]}
          alt={TEXT_LANDING_IMAGE_CAROUSEL_ALTERNATIVE(currentIdx)}
        />
        <S.ButtonArrow className="left" onClick={handlePrev}>
          ◀
        </S.ButtonArrow>
        <S.ButtonArrow className="right" onClick={handleNext}>
          ▶
        </S.ButtonArrow>
      </S.DivWrapperImage>
      <S.DivWrapperContent>
        <S.Heading1Introduce>{TEXT_LANDING_HEADING1_INTRODUCE}</S.Heading1Introduce>
        <S.ParagraphContent>{TEXT_LANDING_CONTENT}</S.ParagraphContent>
      </S.DivWrapperContent>
    </S.DivContainer>
  );
}
