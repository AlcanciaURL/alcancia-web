import { auth } from '@/services/Firebase'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'
import HookResponse from '@/types/HookResponse'
import { useContext, useEffect, useState } from 'react'
import useUsers from './useUsers'
import { SessionContext } from '@/context/AuthProvider'

type CreateUser = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const useAuth = () => {
  const { createUser } = useUsers()

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
      console.log(error)
      return {
        status: 'error',
        message: 'Correo o contraseña incorrecta',
      }
    }
  }

  const signUp = async ({
    firstName,
    lastName,
    email,
    password,
  }: CreateUser): Promise<HookResponse> => {
    try {
      setLoading(true)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      if (user) {
        console.info('Started creating user')
        const response = await createUser({
          id: user.uid,
          firstName,
          email,
          lastName,
        })
        if (response.status === 'success') {
          return {
            status: 'success',
            message: 'Usuario registado correctamente',
          }
        }
        return {
          status: response.status,
          message: response.message,
        }
      }
      return {
        status: 'error',
        message: 'Error al guardar el usuario en Firebase',
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      return {
        status: 'error',
        message: 'Este correo ya esta en uso',
      }
    }
  }

  return {
    login,
    loading,
    currentUser,
    signUp,
  }
}

export default useAuth
