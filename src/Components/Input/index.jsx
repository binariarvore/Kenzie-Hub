import { forwardRef } from 'react';
import Div from './styles';

const Input = forwardRef(({ label, type, id, placeholder, ...rest }, ref) => {
  return (
    <Div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </Div>
  );
});

export default Input;
