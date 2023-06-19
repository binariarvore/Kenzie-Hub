import { Nav, NavContainer, Header, HeaderContainer, Section } from './styles';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('@Kenziehub:Token', '');
    localStorage.setItem('@Kenziehub:UserID', '');
    navigate('/');
  };
  return (
    <>
      <Nav>
        <NavContainer>
          <h1>Kenzie Hub</h1>
          <button onClick={() => logout()}>Sair</button>
        </NavContainer>
      </Nav>
      <Header>
        <HeaderContainer>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </HeaderContainer>
      </Header>
      <Section>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </Section>
    </>
  );
};

export default Dashboard;
