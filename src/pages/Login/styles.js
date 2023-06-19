import styled from 'styled-components';
import { Button } from '../Register/Form/styles';

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: var(--Color-Primary);
  font-family: var(--Font-Default);
`;

export const P = styled.p`
  color: var(--Grey-0);
  font-weight: bold;
  font-size: 1rem;
  font-family: var(--Font-Default);
  text-align: center;
`;

export const Small = styled.small`
  font-size: 12px;
  font-family: var(--Font-Default);
  text-align: center;
  color: var(--Grey-1);
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border-radius: 3px;
  padding: 2rem 1rem;
  background-color: var(--Grey-3);
`;

export const RegisterButton = styled(Button)`
  background: var(--Grey-1);
  color: var(--Grey-0);
  margin: 0;
  width: 100%;

  &:hover {
    background: var(--Grey-2);
  }
`;
