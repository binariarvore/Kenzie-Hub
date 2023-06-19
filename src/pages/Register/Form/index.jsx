import Input from '../../../Components/Input';
import Select from '../../../Components/Select';
import api from '../../../services/api';
import { Button, Error, Form } from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from './schema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const userRegister = async (formData) => {
    try {
      await api.post('/users', formData);
      toast.success('Conta criada com sucesso!');
      navigate('/');
    } catch (error) {
      toast.error('Ops! Algo deu errado');
    }
  };

  return (
    <Form onSubmit={handleSubmit(userRegister)}>
      <Input
        type='text'
        label='Nome'
        id='name'
        placeholder='Digite aqui seu nome'
        {...register('name')}
      />
      {errors.name ? <Error>{errors.name.message}</Error> : null}
      <Input
        type='email'
        label='Email'
        id='email'
        placeholder='Digite aqui seu email'
        {...register('email')}
      />
      {errors.email ? <Error>{errors.email.message}</Error> : null}
      <Input
        type='password'
        label='Senha'
        id='password'
        placeholder='Digite aqui sua senha'
        {...register('password')}
      />
      {errors.password ? <Error>{errors.password.message}</Error> : null}
      <Input
        type='password'
        label='Confirmar Senha'
        id='confirm'
        placeholder='Digite aqui sua senha'
        {...register('confirm')}
      />
      {errors.confirm ? <Error>{errors.confirm.message}</Error> : null}
      <Input
        type='text'
        label='Bio'
        id='bio'
        placeholder='Fale sobre você'
        {...register('bio')}
      />
      {errors.bio ? <Error>{errors.bio.message}</Error> : null}
      <Input
        type='text'
        label='Contato'
        id='contact'
        placeholder='Opção de contato'
        {...register('contact')}
      />
      {errors.contact ? <Error>{errors.contact.message}</Error> : null}
      <Select
        label='Selecionar módulo'
        id='course_module'
        {...register('course_module')}
      />
      <Button type='submit'>Cadastrar</Button>
    </Form>
  );
};

export default RegisterForm;
