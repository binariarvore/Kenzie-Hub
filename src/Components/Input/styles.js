import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  label {
    font-size: 12px;
    font-family: var(--Font-Default);
    color: var(--Grey-1);
  }

  input,
  select {
    width: 100%;
    padding: 0.7rem;
    background-color: var(--Grey-2);
    font-size: 12px;
    border: none;
    border-radius: 5px;
    color: var(--Grey-0);
  }

  select {
    color: var(--Grey-1);
  }
`;

export default Div;
