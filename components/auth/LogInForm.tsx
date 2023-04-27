import Input from '@/components/controls/Input'
import { SnackbarContext } from '@/context/SnackbarProvider'
import useAuth from '@/hooks/useAuth'
import { auth } from '@/services/Firebase'
import { signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { useForm } from 'react-hook-form'
import ConfirmButton from '../controls/ConfirmButton'
import { GoogleAuthProvider } from 'firebase/auth'
import GoogleLogo from '../assets/GoogleLogo'

const LogInForm = () => {
  const { register, handleSubmit } = useForm()
  const { login, loginGoogle } = useAuth()
  const router = useRouter()
  const { openSnackbar } = useContext(SnackbarContext)

  const onSubmit = async (data: any) => {
    const response = await login(data.email, data.password)
    if (response.status === 'success' && response.data) {
      console.log(response.data)
      openSnackbar({
        message: response.message,
        severity: response.status,
      })
      router.push('/workspaces')
    } else {
      openSnackbar({
        message: response.message,
        severity: response.status,
      })
    }
  }

  const google = async () => {
    const response = await loginGoogle()
    if (response.status === 'success' && response.data) {
      console.log(response.data)
      openSnackbar({
        message: response.message,
        severity: response.status,
      })
      router.push('/workspaces')
    } else {
      openSnackbar({
        message: response.message,
        severity: 'error',
      })
    }
  }

  return (
    <>
      <button
        onClick={() => google()}
        className="w-full mb-4 flex justify-center items-center bg-maingreen hover:bg-[#CCDBD2] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
      >
        <div>Ingresar con Google</div>
        <div className="w-8 h-8 bg-white p-1 ml-4 rounded">
          <GoogleLogo />
        </div>
      </button>
      <div className="w-full h-[1px] my-6 bg-gray-400" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-dashed border-2 border-maingreen raunded-xl p-3 ">
          <Input label="Email" register={{ ...register('email') }} />
          <Input
            label="Contraseña"
            register={{ ...register('password') }}
            type="password"
          />
        </div>
        <div className="flex items-center justify-between pt-5">
          <ConfirmButton text="Iniciar Sesión" />
          {/* <a
            className="inline-block align-baseline font-semibold text-sm text-[#329F5B] hover:text-[#B3BFB8]"
            href="#"
            >
            ¿Olvisate tu contraseña?
          </a> */}
        </div>
        <div className="flex items-center justify-between pt-5">
          <button
            onClick={() => router.push('/sign-in')}
            type="button"
            className="w-full bg-gray-200 text-gray-800 hover:bg-[#CCDBD2] font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Registrarse
          </button>
        </div>
      </form>
    </>
  )
}

export default LogInForm
