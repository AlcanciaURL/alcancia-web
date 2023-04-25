import { auth } from '@/services/Firebase'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'
import HookResponse from '@/types/HookResponse'
import { useEffect, useState } from 'react'

const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  const login = async (
    email: string,
    password: string
  ): Promise<HookResponse<User>> => {
    try {
      setLoading(true)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      setCurrentUser(user)
      setLoading(false)
      return {
        status: 'success',
        message: 'Usuario identificado correctamente',
        data: user,
      }
    } catch (error: any) {
      setLoading(false)
      return {
        status: 'error',
        message: 'Correo o contraseña incorrecta',
      }
    }
  }

  return {
    login,
    loading,
    currentUser
  }
}

export default useAuth
