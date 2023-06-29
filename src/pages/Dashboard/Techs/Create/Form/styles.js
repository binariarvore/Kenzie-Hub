import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--Grey-3);
  height: 100%;
  padding: 1rem;

  button {
    width: 100%;
    padding: 1rem;
    color: var(--Grey-0);
    background-color: var(--Color-Primary);
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    transition: 0.3s;

    :hover {
      background-color: var(--Color-Primary-Focus);
    }
  }

  .no-drop {
    cursor: no-drop;
  }
`;

export const Error = styled.p`
  font-size: 10px !important;
  font-family: var(--Font-Default) !important;
  color: var(--Color-Primary) !important;
  animation: ${slideIn} 0.5s ease-out !important;
`;
