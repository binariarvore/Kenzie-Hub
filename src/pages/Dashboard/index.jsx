import {
  Nav,
  NavContainer,
  Header,
  HeaderContainer,
  Section,
  OpenModal,
  Div,
} from './styles';
import { useUserContext } from '../../Providers/UserContext';
import { useTechContext } from '../../Providers/TechContext';
import CreateTechModal from './Techs/Create';
import List from './Techs';

const Dashboard = () => {
  const { user, userLogout } = useUserContext();
  const { setModalCreate } = useTechContext();

  return (
    <>
      <Nav>
        <NavContainer>
          <h1>Kenzie Hub</h1>
          <button onClick={() => userLogout()}>Sair</button>
        </NavContainer>
      </Nav>
      <Header>
        <HeaderContainer>
          <h2>Olá, {user?.name}</h2>
          <p>{user?.course_module}</p>
        </HeaderContainer>
      </Header>
      <Section>
        <Div>
          <p>Tecnologias</p>
          <OpenModal onClick={() => setModalCreate(true)}>+</OpenModal>
        </Div>
        <List />
        <CreateTechModal />
      </Section>
    </>
  );
};

export default Dashboard;
