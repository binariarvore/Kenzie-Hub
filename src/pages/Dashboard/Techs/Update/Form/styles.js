import styled from 'styled-components';

export const DivBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button:nth-child(1) {
    width: 60%;
    background-color: var(--Color-Primary-Negative);

    :hover {
      background-color: var(--Color-Primary);
    }
  }

  button:nth-child(2) {
    width: 35%;
    background-color: var(--Grey-1);

    :hover {
      background-color: var(--Grey-2);
    }
  }
`;
