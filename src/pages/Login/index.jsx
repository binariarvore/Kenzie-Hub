import Container from '../../styles/Grid';
import { H1, Div, P, RegisterButton, Small } from './styles';
import Form from './Form';
import { Link } from 'react-router-dom';

const Login = ({ setUser }) => {
  return (
    <Container>
      <H1>Kenzie Hub</H1>
      <Div>
        <P>Login</P>
        <Form setUser={setUser} />
        <Small>Ainda não possui uma conta?</Small>
        <Link to='/register'>
          <RegisterButton>Cadastra-se</RegisterButton>
        </Link>
      </Div>
    </Container>
  );
};

export default Login;
