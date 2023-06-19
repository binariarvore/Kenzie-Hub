import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  :root {
    --Color-Primary: #FF577F;
    --Color-Primary-Focus: #FF427F;
    --Color-Primary-Negative: #59323F;

    --Grey-0: #F8F9FA;
    --Grey-1: #868E96;
    --Grey-2: #343B41;
    --Grey-3: #212529;
    --Grey-4: #121214;

    --Font-Default: 'Inter', sans-serif;
  }

  body{
    background-color: var(--Grey-4);
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    border-radius: 3px;
    padding: 1rem;
    background-color: var(--Grey-3);
  }
`;

export default Global;
