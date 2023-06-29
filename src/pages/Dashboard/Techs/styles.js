import styled from 'styled-components';

export const Ul = styled.ul`
  width: 100%;
  padding: 1rem;
  background-color: var(--Grey-3);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
`;

export const Li = styled.li`
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--Grey-4);
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: var(--Grey-2);
  }

  span {
    color: var(--Grey-1);
    font-family: var(--Font-Default);
    font-size: 12px;
  }
`;
