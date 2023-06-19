import styled from 'styled-components';

export const RegisterHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 20px;
    color: var(--Color-Primary);
    font-family: var(--Font-Default);
  }

  button {
    padding: 0.7rem 1rem;
    background: var(--Grey-3);
    color: var(--Grey-0);
    font-family: var(--Font-Default);
    font-size: 12px;
    border-radius: 5px;
  }
`;
