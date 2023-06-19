import styled from 'styled-components';
import { Button, Form } from '../../Register/Form/styles';

export const LoginButton = styled(Button)`
  color: var(--Grey-0);
  background: var(--Color-Primary);

  &:hover {
    background: var(--Color-Primary-Focus);
  }
`;

export const LoginForm = styled(Form)`
  padding: 0;
`;
