import Input from '@/components/controls/Input'
import { SnackbarContext } from '@/context/SnackbarProvider'
import useAuth from '@/hooks/useAuth'
import { auth } from '@/services/Firebase'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import ConfirmButton from '../controls/ConfirmButton'
import { GoogleAuthProvider } from 'firebase/auth'

const LogInForm = () => {
  const { register, handleSubmit } = useForm()
  const { login } = useAuth()
  const router = useRouter()
  const { openSnackbar } = useContext(SnackbarContext)
  const provider = new GoogleAuthProvider()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
    })
  }, [])

  const onSubmit = async (data) => {
    const response = await login(data.email, data.password)
    if (response.status === 'success' && response.data) {
      console.log(response.data)
      openSnackbar({
        message: response.message,
        severity: response.status,
      })
      router.push('/home')
    } else {
      openSnackbar({
        message: response.message,
        severity: response.status,
      })
    }
  }

  const google = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }

  return (
    <>
      <div>
        <h1>Ingresar</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-dashed border-2 border-[#329F5B] raunded-xl p-3 ">
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
      </form>
      <button onClick={() => google()}>Google</button>
    </>
  )
}

export default LogInForm
