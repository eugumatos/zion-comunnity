import * as zod from "zod";

export const signInValidationSchema = zod.object({
  email: zod
    .string()
    .email({ message: "Formato de e-mail inválido" })
    .nonempty({ message: "O campo e-mail é obrigatório" }),

  password: zod
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" })
    .nonempty({ message: "O campo senha é obrigatório" })
});

export type SignInValidationFormData = zod.infer<typeof signInValidationSchema>;