import { z } from 'zod';

const schema = z
  .object({
    name: z.string().min(3, 'Campo obrigatório'),
    email: z.string().nonempty('Campo obrigatório').email('E-mail inválido'),
    password: z
      .string()
      .min(8, {
        message: 'A senha é obrigatória e precisa de mínimo 8 caracteres',
      })
      .regex(/(?=.?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
      .regex(/(?=.?[a-z])/, 'É necessário ao menos uma letra minúscula')
      .regex(/(?=.?[0-9])/, 'É necessário pelo menos um número')
      .regex(
        /(?=.[)!}{,.^?~=@+-_/*-+.|])/,
        'É necessário pelo menos um caracter especial'
      ),
    confirm: z.string().nonempty('Campo obrigatório'),
    bio: z.string().nonempty('Campo obrigatório'),
    contact: z.string().nonempty('Campo obrigatório'),
    course_module: z.string().nonempty('Campo obrigatório'),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: 'As senhas precisam corresponderem',
    path: ['confirm'],
  });

export default schema;
