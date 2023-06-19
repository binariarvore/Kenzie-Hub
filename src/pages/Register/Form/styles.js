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
  gap: 0.5rem;
  width: 100%;
  border-radius: 3px;
  padding: 1rem;
  background-color: var(--Grey-3);
`;

export const Button = styled.button`
  color: var(--Grey-1);
  font-family: var(--Font-Default);
  font-weight: 700;
  background: var(--Color-Primary-Negative);
  padding: 0.7rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 15px;

  :hover {
    background: var(--Color-Primary);
    color: var(--Grey-0);
  }
`;

export const Error = styled.p`
  font-size: 10px;
  font-family: var(--Font-Default);
  color: var(--Color-Primary);
  animation: ${slideIn} 0.5s ease-out;
`;
