import * as S from './Modal.styles';
import { createPortal } from 'react-dom';
import { FormEvent, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { TEXT_MODAL_BUTTON_CONFIRM } from '@/constants';

export type TDialog = 'success' | 'error' | 'notification';

export type TActionsModal = {
  show: (title: string, msg: string) => void;
};

export default forwardRef<
  TActionsModal,
  { type?: TDialog; onConfirm?: () => Promise<void>; onClose?: () => Promise<void> }
>(function Modal({ type = 'notification', onConfirm, onClose }, ref) {
  const refDialog = useRef<HTMLDialogElement>(null);
  const [title, setTitle] = useState('');
  const [msg, setMsg] = useState('');
  const [labelBtnConfirm, setLabelBtnConfirm] = useState(TEXT_MODAL_BUTTON_CONFIRM);
  const handleClose = async () => {
    if (onClose) {
      await onClose();
    }
    refDialog.current?.close();
  };
  const handleClickBackdrop = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (e.target === refDialog.current) {
      handleClose();
    }
  };
  const handleConfirm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      if (onConfirm) {
        await onConfirm();
      }
      handleClose();
    })();
  };
  useImperativeHandle(ref, () => ({
    show(_title, _msg) {
      setTitle(_title);
      setMsg(_msg);
      setLabelBtnConfirm(TEXT_MODAL_BUTTON_CONFIRM);
      refDialog.current?.showModal();
      console.log(refDialog.current?.open);
      setTimeout(() => {
        console.log(refDialog.current?.open);
      }, 500);
    },
  }));
  return createPortal(
    <S.DialogContainer ref={refDialog} onClick={handleClickBackdrop}>
      <S.DivContainer>
        <S.Heading1Title $type={type}>{title}</S.Heading1Title>
        <S.ParagraphMessage $type={type}>{msg}</S.ParagraphMessage>
        <S.FormDialog method="dialog" onSubmit={handleConfirm}>
          <S.ButtonConfirm type="submit" $type={type}>
            {labelBtnConfirm}
          </S.ButtonConfirm>
        </S.FormDialog>
      </S.DivContainer>
    </S.DialogContainer>,
    document.getElementById('global-modal') as HTMLElement,
  );
});
