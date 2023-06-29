import Modal from '../../../../Components/Modal';
import { ModalHeader } from '../../../../Components/Modal/styles';
import { useTechContext } from '../../../../Providers/TechContext';
import NewTech from './Form';

const CreateTechModal = () => {
  const { modalCreate, setModalCreate } = useTechContext();

  return (
    <Modal callback={() => setModalCreate(null)} state={modalCreate}>
      <ModalHeader>
        <p>Cadastrar tecnologia</p>
        <button onClick={() => setModalCreate(null)}>X</button>
      </ModalHeader>
      <NewTech />
    </Modal>
  );
};

export default CreateTechModal;
