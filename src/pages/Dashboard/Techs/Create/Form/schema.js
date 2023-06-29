import { z } from 'zod';

const schema = z.object({
  title: z.string().nonempty('Campo obrigatório'),
  status: z.string().nonempty('Campo obrigatório'),
});

export default schema;
