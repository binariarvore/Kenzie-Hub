import Container from '../../styles/Grid';
import { RegisterHeader } from './styles';
import RegisterForm from './Form';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container>
      <RegisterHeader>
        <h1>Kenzie Hub</h1>
        <Link to='/'>
          <button>Voltar</button>
        </Link>
      </RegisterHeader>
      <RegisterForm />
    </Container>
  );
};

export default Register;
