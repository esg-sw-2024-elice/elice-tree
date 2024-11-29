import * as S from './SignUp.styles';
import { useRef } from 'react';
import Input from './shared/Input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import {
  KEYS_ROUTE,
  MSG_ERROR_VALIDATION_USER_ID,
  MSG_ERROR_VALIDATION_USER_PASSWORD,
  MSG_SUCCESS_TO_SIGNUP,
  TEXT_SIGNUP_BUTTON_GO_TO_SIGNIN,
  TEXT_SIGNUP_BUTTON_SIGNUP,
  TEXT_SIGNUP_IMAGE_LOGO_ELICE_ALTERNATIVE,
  TEXT_SIGNUP_INPUT_PASSWORD_PLACEHOLDER,
  TEXT_SIGNUP_PARAGRAPH_DESCRIPTION,
  TEXT_SINGUP_HEADING1_TITLE,
} from '@/constants';
import imgLogoElice from '@/assets/images/logo-elice.png';

export default function SignUp() {
  const refUserId = useRef<HTMLInputElement>(null);
  const refUserPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const handleClickBtnSignUp = () => {
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
    if (!signUp(enteredUserId, enteredUserPassword)) {
      return;
    }
    alert(MSG_SUCCESS_TO_SIGNUP);
    navigate(KEYS_ROUTE.SIGNIN());
  };
  const handleClickBtnGoToSignIn = () => navigate(KEYS_ROUTE.SIGNIN());
  return (
    <S.DivContainer>
      <S.DivContainerSignUpForm>
        <S.ImageLogoElice src={imgLogoElice} alt={TEXT_SIGNUP_IMAGE_LOGO_ELICE_ALTERNATIVE} />
        <S.DivWrapperInput>
          <Input ref={refUserId} type="text" placeholder="ID" onPressEnter={handleClickBtnSignUp} />
          <Input
            ref={refUserPassword}
            type="password"
            placeholder={TEXT_SIGNUP_INPUT_PASSWORD_PLACEHOLDER}
            onPressEnter={handleClickBtnSignUp}
          />
        </S.DivWrapperInput>
      </S.DivContainerSignUpForm>
      <S.Heading1Title>{TEXT_SINGUP_HEADING1_TITLE}</S.Heading1Title>
      <S.ParagraphDescription>{TEXT_SIGNUP_PARAGRAPH_DESCRIPTION}</S.ParagraphDescription>
      <S.ButtonSignUp onClick={handleClickBtnSignUp}>{TEXT_SIGNUP_BUTTON_SIGNUP}</S.ButtonSignUp>
      <S.ButtonGoToSignIn onClick={handleClickBtnGoToSignIn}>
        {TEXT_SIGNUP_BUTTON_GO_TO_SIGNIN}
      </S.ButtonGoToSignIn>
    </S.DivContainer>
  );
}
