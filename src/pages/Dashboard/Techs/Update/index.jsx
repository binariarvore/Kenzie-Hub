import { useTechContext } from '../../../../Providers/TechContext';
import Modal from '../../../../Components/Modal';
import { ModalHeader } from '../../../../Components/Modal/styles';
import UpdateForm from './Form';

const UpdateModal = () => {
  const { modalUpdate, setModalUpdate } = useTechContext();

  return (
    <Modal callback={() => setModalUpdate(null)} state={modalUpdate}>
      <ModalHeader>
        <p>Tecnologia Detalhes</p>
        <button onClick={() => setModalUpdate(null)}>X</button>
      </ModalHeader>
      <UpdateForm />
    </Modal>
  );
};

export default UpdateModal;
