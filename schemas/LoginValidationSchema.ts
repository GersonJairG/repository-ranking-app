import * as yup from 'yup'

export const LoginValidationSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required'),
  password: yup.string()
    .min(6, 'Password has to be longer than 6 characters!')  
    .required('Password is required')
})
