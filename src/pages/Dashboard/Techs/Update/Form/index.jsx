import { useForm } from 'react-hook-form';
import { useTechContext } from '../../../../../Providers/TechContext';
import { Form, Error } from '../../Create/Form/styles';
import Input from '../../../../../Components/Input';
import Select from '../../../../../Components/Select';
import { DivBtn } from './styles';

const UpdateForm = () => {
  const { register, handleSubmit } = useForm();
  const { modalUpdate, techUpdate, techDelete } = useTechContext();

  return (
    <Form>
      <Input
        label='Nome'
        id='techName'
        placeholder={modalUpdate.title}
        className='no-drop'
        disabled
      />
      <Select label='Selecionar status' id='status' {...register('status')}>
        <option value='Iniciante'>Iniciante</option>
        <option value='Intermediário'>Intermediário</option>
        <option value='Avançado'>Avançado</option>
      </Select>
      <DivBtn>
        <button onClick={handleSubmit(techUpdate)} type='submit'>
          Salvar alterações
        </button>
        <button onClick={(e) => techDelete(e)}>Excluir</button>
      </DivBtn>
    </Form>
  );
};
export default UpdateForm;
