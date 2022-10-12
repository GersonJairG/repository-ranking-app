import * as yup from 'yup'

export const LoginValidationSchema = yup.object().shape({
  email: yup
  .string()
  .email('El email no es válido.')
  .required('El email es requerido.'),
  password: yup
  .string()
  .min(8, 'La contraseña debe poseer al menos 5 caracteres.')
  .required('La contraseña es requerida.'),
})
