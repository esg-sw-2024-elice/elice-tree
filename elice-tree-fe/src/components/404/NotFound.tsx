import { TEXT_404_PARAGRAPH_DESCRIPTION, TEXT_404_HEADING1_TITLE } from '@/constants';
import * as S from './NotFound.styles';

export default function NotFound() {
  return (
    <S.DivContainer>
      <S.Heading1Title>{TEXT_404_HEADING1_TITLE}</S.Heading1Title>
      <S.ParagraphDescription>{TEXT_404_PARAGRAPH_DESCRIPTION}</S.ParagraphDescription>
    </S.DivContainer>
  );
}
