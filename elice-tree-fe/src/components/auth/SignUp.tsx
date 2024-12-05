import * as S from './SignUp.styles';
import { useRef } from 'react';
import Input from './shared/Input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import {
  KEYS_ROUTE,
  MSG_ERROR_FAIL_TO_SIGNUP,
  MSG_ERROR_VALIDATION_USER_ID,
  MSG_ERROR_VALIDATION_USER_PASSWORD,
  MSG_ERROR_VALIDATION_USER_PASSWORD_RULE,
  MSG_SUCCESS_TO_SIGNUP,
  TEXT_SIGNUP_BUTTON_GO_TO_SIGNIN,
  TEXT_SIGNUP_BUTTON_SIGNUP,
  TEXT_SIGNUP_IMAGE_LOGO_ELICE_ALTERNATIVE,
  TEXT_SIGNUP_INPUT_PASSWORD_PLACEHOLDER,
  TEXT_SIGNUP_INPUT_USER_ID_PLACEHOLDER,
  TEXT_SIGNUP_PARAGRAPH_DESCRIPTION,
  TEXT_SINGUP_HEADING1_TITLE,
} from '@/constants';
import imgLogoElice from '@/assets/images/logo-elice.png';
import Modal, { TActionsModal } from '@/components/shared/Modal';
import { validateIsEmpty, validatePassword } from '@/utils';

export default function SignUp() {
  const refModalSuccess = useRef<TActionsModal>(null);
  const refModalError = useRef<TActionsModal>(null);
  const refUserId = useRef<HTMLInputElement>(null);
  const refUserPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const handleShowModalSuccess = (title: string, msg: string) => {
    refModalSuccess.current?.show(title, msg);
  };
  const handleShowModalError = (title: string, msg: string) => {
    refModalError.current?.show(title, msg);
  };
  const handleClickBtnSignUp = () => {
    const enteredUserId = refUserId.current?.value;
    const enteredUserPassword = refUserPassword.current?.value;
    if (!validateIsEmpty(enteredUserId)) {
      handleShowModalError('Error', MSG_ERROR_VALIDATION_USER_ID);
      return;
    }
    if (!validateIsEmpty(enteredUserPassword)) {
      handleShowModalError('Error', MSG_ERROR_VALIDATION_USER_PASSWORD);
      return;
    }
    if (!validatePassword(enteredUserPassword!)) {
      handleShowModalError('Error', MSG_ERROR_VALIDATION_USER_PASSWORD_RULE);
      return;
    }
    if (!signUp(enteredUserId!, enteredUserPassword!)) {
      handleShowModalError('Error', MSG_ERROR_FAIL_TO_SIGNUP);
      return;
    }
    handleShowModalSuccess('Success', MSG_SUCCESS_TO_SIGNUP);
  };
  const handleSuccessToSignUp = async () => {
    navigate(KEYS_ROUTE.SIGNIN());
  };
  const handleClickBtnGoToSignIn = () => navigate(KEYS_ROUTE.SIGNIN());
  return (
    <S.DivContainer>
      <S.DivContainerSignUpForm>
        <S.ImageLogoElice src={imgLogoElice} alt={TEXT_SIGNUP_IMAGE_LOGO_ELICE_ALTERNATIVE} />
        <S.DivWrapperInput>
          <Input ref={refUserId} type="text" placeholder={TEXT_SIGNUP_INPUT_USER_ID_PLACEHOLDER} />
          <Input
            ref={refUserPassword}
            type="password"
            placeholder={TEXT_SIGNUP_INPUT_PASSWORD_PLACEHOLDER}
          />
        </S.DivWrapperInput>
      </S.DivContainerSignUpForm>
      <S.Heading1Title>{TEXT_SINGUP_HEADING1_TITLE}</S.Heading1Title>
      <S.ParagraphDescription>{TEXT_SIGNUP_PARAGRAPH_DESCRIPTION}</S.ParagraphDescription>
      <S.ButtonSignUp onClick={handleClickBtnSignUp}>{TEXT_SIGNUP_BUTTON_SIGNUP}</S.ButtonSignUp>
      <S.ButtonGoToSignIn onClick={handleClickBtnGoToSignIn}>
        {TEXT_SIGNUP_BUTTON_GO_TO_SIGNIN}
      </S.ButtonGoToSignIn>
      <Modal ref={refModalSuccess} type="success" onConfirm={handleSuccessToSignUp} />
      <Modal ref={refModalError} type="error" />
    </S.DivContainer>
  );
}
