import * as S from './SignIn.styles';
import { useRef } from 'react';
import Input from './shared/Input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import {
  KEYS_ROUTE,
  MSG_ERROR_VALIDATION_USER_ID,
  MSG_ERROR_VALIDATION_USER_PASSWORD,
  MSG_SUCCESS_TO_SIGNIN,
  TEXT_SIGNIN_BUTTON_GO_TO_LANDING,
  TEXT_SIGNIN_BUTTON_GO_TO_SIGNUP,
  TEXT_SIGNIN_BUTTON_SIGNIN,
  TEXT_SIGNIN_PARAGRAPH_DESCRIPTION,
  TEXT_SIGNIN_HEADING1_TITLE,
  TEXT_SIGNIN_IMAGE_LOGO_ELICE_ALTERNATIVE,
  TEXT_SIGNIN_INPUT_PASSWORD_PLACEHOLDER,
} from '@/constants';
import imgLogoElice from '@/assets/images/logo-elice.png';

export default function SignIn() {
  const refUserId = useRef<HTMLInputElement>(null);
  const refUserPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const handleClickBtnSignIn = () => {
    const enteredUserId = refUserId.current?.value;
    const enteredUserPassword = refUserPassword.current?.value;
    if (!enteredUserId || enteredUserId.trim() === '') {
      alert(MSG_ERROR_VALIDATION_USER_ID);
      return;
    }
    if (!enteredUserPassword || enteredUserPassword.trim() === '') {
      alert(MSG_ERROR_VALIDATION_USER_PASSWORD);
      return;
    }
    if (!signIn(enteredUserId, enteredUserPassword)) {
      return;
    }
    alert(MSG_SUCCESS_TO_SIGNIN(enteredUserId));
    navigate(KEYS_ROUTE.LANDING());
  };
  const handleClickBtnGoToSignUp = () => {
    navigate(KEYS_ROUTE.SIGNUP());
  };
  const handleClickBtnGoToLanding = () => {
    navigate(KEYS_ROUTE.LANDING());
  };
  return (
    <S.DivContainer>
      <S.DivContainerSignInForm>
        <S.ImageLogoElice src={imgLogoElice} alt={TEXT_SIGNIN_IMAGE_LOGO_ELICE_ALTERNATIVE} />
        <S.DivWrapperInput>
          <Input ref={refUserId} type="text" placeholder="ID" onPressEnter={handleClickBtnSignIn} />
          <Input
            ref={refUserPassword}
            type="password"
            placeholder={TEXT_SIGNIN_INPUT_PASSWORD_PLACEHOLDER}
            onPressEnter={handleClickBtnSignIn}
          />
        </S.DivWrapperInput>
      </S.DivContainerSignInForm>
      <S.Heading1Title>{TEXT_SIGNIN_HEADING1_TITLE}</S.Heading1Title>
      <S.ParagraphDescription>{TEXT_SIGNIN_PARAGRAPH_DESCRIPTION}</S.ParagraphDescription>
      <S.ButtonSignIn onClick={handleClickBtnSignIn}>{TEXT_SIGNIN_BUTTON_SIGNIN}</S.ButtonSignIn>
      <S.ButtonGoToSignUp onClick={handleClickBtnGoToSignUp}>
        {TEXT_SIGNIN_BUTTON_GO_TO_SIGNUP}
      </S.ButtonGoToSignUp>
      <S.ButtonGoToLanding onClick={handleClickBtnGoToLanding}>
        {TEXT_SIGNIN_BUTTON_GO_TO_LANDING}
      </S.ButtonGoToLanding>
    </S.DivContainer>
  );
}
