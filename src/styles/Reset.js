import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  
  button{
    cursor: pointer;
    background: transparent;
    border: none;
  };

  ul, ol{
    list-style: none;
  };
  
  a{
    text-decoration: none;
  };
`;

export default Reset;
