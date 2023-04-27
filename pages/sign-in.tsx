import Navbarlogin from '@/components/navbarlogin/Navbarlogin'
import Empty from '@/layouts/Empty'
import { ReactNode, useContext, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useAuth from '@/hooks/useAuth'
import { SnackbarContext } from '@/context/SnackbarProvider'
import { useRouter } from 'next/router'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Debe tener más de 3 carácteres')
    .required('Debe de ingresar un nombre'),
  lastName: yup
    .string()
    .min(2, 'Debe tener más de 2 carácteres')
    .required('Debe de ingresar un apellido'),
  email: yup
    .string()
    .email('El correo no es válido')
    .min(11, 'Debe tener más de 11 carácteres')
    .required('Es necesario ingresar un correo'),
  password: yup
    .string()
    .min(8, 'La contraseña debe de tener mínimo 8 carácteres')
    .max(32, 'La contraseña no puede tener más de 32 carácteres')
    .required('Debe ingresar una contraseña'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'La contraseña no coincide')
    .required('Debe confirmar esta contraseña'),
})

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const router = useRouter()
  const { signUp } = useAuth()
  const { openSnackbar } = useContext(SnackbarContext)

  useEffect(() => {
    console.log(errors)
  }, [errors])

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await signUp({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    })
    if (response.status === 'success') {
      router.push('/log-in')
      openSnackbar({
        message: response.message,
        severity: response.status,
      })
    } else {
      openSnackbar({
        message: response.message,
        severity: response.status,
      })
    }
  }

  return (
    <div>
      <Navbarlogin></Navbarlogin>
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-[#F0F7F4] rounded-xl shadow-sm p-10 pt-20 border-8 border-[#B3BFB8] sm:w-[40%] w-[100%]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-dashed border-2 border-[#329F5B] raunded-xl p-3 "
          >
            <label className="block mb-2 text-base font-medium text-[#3C493F] ">
              Nombre
            </label>
            <input
              {...register('firstName')}
              className="bg-[#CCDBD2] appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
              type="text"
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <label className="block mb-2 text-base font-medium text-[#3C493F] ">
              Apellido
            </label>
            <input
              {...register('lastName')}
              className="bg-[#CCDBD2] appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
              type="text"
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
            <label className="block mb-2 text-base font-medium text-[#3C493F] ">
              Correo electrónico
            </label>
            <input
              {...register('email')}
              className="bg-[#CCDBD2] appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
              type="text"
            />
            {errors.email && <p>{errors.email.message}</p>}
            <label className="block mb-2 text-base font-medium text-[#3C493F] ">
              Contraseña
            </label>
            <input
              className="bg-[#CCDBD2] appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
              {...register('password')}
              type="password"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <label className="block mb-2 text-base font-medium text-[#3C493F] ">
              Confirmar contraseña
            </label>
            <input
              {...register('confirmPassword')}
              className="bg-[#CCDBD2] appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
              type="password"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <div className="flex items-center justify-center pt-5">
              <button
                className="bg-[#329F5B] hover:bg-[#CCDBD2] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

SignIn.layout = function layout(page: ReactNode) {
  return <Empty>{page}</Empty>
}

export default SignIn
