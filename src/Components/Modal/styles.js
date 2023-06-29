import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  inset: 0;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  font-family: var(--Font-Default);
  background: white;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: var(--Grey-2);

  p {
    font-weight: bold;
    font-size: 12px;
    color: var(--Grey-0);
  }

  button {
    color: var(--Grey-1);
    font-size: 1rem;
  }
`;
