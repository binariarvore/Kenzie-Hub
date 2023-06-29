import Div from '../Input/styles';
import { forwardRef } from 'react';

const Select = forwardRef(({ label, id, children, ...rest }, ref) => {
  return (
    <Div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select id={id} name={id} ref={ref} {...rest}>
        {children}
      </select>
    </Div>
  );
});

export default Select;
