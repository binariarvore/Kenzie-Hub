import Input from '../../../Components/Input';
import Select from '../../../Components/Select';
import { Button, Error, Form } from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from './schema';
import { useUserContext } from '../../../Providers/UserContext';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { userRegister } = useUserContext();

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
      >
        <option value='Primeiro módulo (Introdução ao Frontend)'>
          Primeiro módulo
        </option>
        <option value='Segundo módulo (Frontend Avançado)'>
          Segundo módulo
        </option>
        <option value='Terceiro módulo (Introdução ao Backend)'>
          Terceiro módulo
        </option>
        <option value='Quarto módulo (Backend Avançado)'>Quarto módulo</option>
      </Select>
      <Button type='submit'>Cadastrar</Button>
    </Form>
  );
};

export default RegisterForm;
