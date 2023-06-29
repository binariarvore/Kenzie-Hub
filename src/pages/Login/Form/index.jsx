import { LoginButton, LoginForm } from './styles';
import { Error } from '../../Register/Form/styles';
import Input from '../../../Components/Input';
import { useForm } from 'react-hook-form';
import schema from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserContext } from '../../../Providers/UserContext';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { userLogin } = useUserContext();

  return (
    <LoginForm onSubmit={handleSubmit(userLogin)}>
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
      <LoginButton type='submit'>Entrar</LoginButton>
    </LoginForm>
  );
};

export default Form;
