import styled from 'styled-components';
import Container from '../../styles/Grid';

export const Nav = styled.nav`
  height: 10vh;
  width: 100%;
  border-bottom: 1px solid var(--Grey-2);
  display: flex;
  align-items: center;
`;

export const NavContainer = styled(Container)`
  flex-direction: row;
  max-width: 1000px;
  justify-content: space-between;

  h1 {
    color: var(--Color-Primary);
    font-family: var(--Font-Default);
    font-size: 20px;
  }

  button {
    color: var(--Grey-0);
    background: var(--Grey-3);
    padding: 0.5rem 1.3rem;
    border-radius: 5px;
    font-family: var(--Font-Default);
    font-size: 12px;
  }
`;

export const Header = styled.header`
  height: 15vh;
  width: 100%;
  border-bottom: 1px solid var(--Grey-2);
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled(Container)`
  flex-direction: row;
  max-width: 1000px;
  justify-content: space-between;
  flex-wrap: wrap;

  h2 {
    color: var(--Grey-0);
    font-family: var(--Font-Default);
    font-size: 18px;
  }

  p {
    color: var(--Grey-1);
    font-family: var(--Font-Default);
    font-size: 12px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem;

  h2 {
    color: var(--Grey-0);
    font-size: 18px;
    font-family: var(--Font-Default);
  }

  p {
    font-size: 1rem;
    color: var(--Grey-0);
    font-family: var(--Font-Default);
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 600;
  }
`;

export const OpenModal = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: var(--Grey-3);
  color: var(--Grey-0);
  font-family: var(--Font-Default);
  font-weight: 500;
  font-size: 20px;
  transition: 0.3s;

  :hover {
    background: var(--Grey-2);
  }
`;
