import useKeydown from './Hooks/useKeyDown';
import useOutclick from './Hooks/useOutClick';
import { ModalBackdrop, ModalContainer } from './styles';

const Modal = ({ callback, state, children }) => {
  const modalRef = useOutclick(() => {
    callback();
  });

  useKeydown(() => {
    callback();
  });

  if (!state) {
    return null;
  }

  return (
    <ModalBackdrop>
      <ModalContainer ref={modalRef}>{children}</ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
