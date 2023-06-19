import { z } from 'zod';

const schema = z.object({
  email: z
    .string()
    .nonempty('Campo obrigatório')
    .email('Insirta um e-mail correto'),
  password: z.string().nonempty('Campo obrigatório'),
});

export default schema;
