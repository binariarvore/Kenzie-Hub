import { Form, Error } from './styles';
import { useForm } from 'react-hook-form';
import Input from '../../../../../Components/Input';
import Select from '../../../../../Components/Select';
import { useTechContext } from '../../../../../Providers/TechContext';
import schema from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

const NewTech = () => {
  const { techRegister } = useTechContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <Form onSubmit={handleSubmit(techRegister)}>
      <Input
        type='text'
        label='Nome'
        id='title'
        placeholder='Digite aqui o nome da tecnologia'
        {...register('title')}
      />
      {errors.title ? <Error>{errors.title.message}</Error> : null}
      <Select label='Selecionar status' id='status' {...register('status')}>
        <option value='Iniciante'>Iniciante</option>
        <option value='Intermediário'>Intermediário</option>
        <option value='Avançado'>Avançado</option>
      </Select>
      {errors.status ? <Error>{errors.status.message}</Error> : null}
      <button type='submit'>Cadastrar tecnologia</button>
    </Form>
  );
};

export default NewTech;
