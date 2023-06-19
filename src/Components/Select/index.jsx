import Div from '../Input/styles';
import { forwardRef } from 'react';

const Select = forwardRef(({ label, id, ...rest }, ref) => {
  return (
    <Div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select id={id} name={id} ref={ref} {...rest}>
        <option value='Primeiro módulo (Introdução ao Frontend)'>
          Primeiro módulo
        </option>
        <option value='Segundo módulo (Frontend Avançado)'>
          Segundo módulo
        </option>
        <option value='Terceiro módulo (Introdução ao Backend)'>
          Terceiro módulo
        </option>
        <option value='Quarto módulo (Backend Avançado)'>Quarto módulo</option>
      </select>
    </Div>
  );
});

export default Select;
