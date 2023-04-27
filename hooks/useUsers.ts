import HookResponse from '@/types/HookResponse'
import User from '@/types/User'
import axios from 'axios'
import { useState } from 'react'

type CreateUser = {
  id: string
  firstName: string
  lastName: string
  email: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL

const useUsers = () => {
  const [user, setUser] = useState<User>({} as User)

  const createUser = async ({
    id,
    firstName,
    lastName,
    email,
  }: CreateUser): Promise<HookResponse> => {
    try {
      const { data } = await axios.post(`${API_URL}/user`, {
        id,
        firstName,
        lastName,
        email,
      })
      return {
        status: 'success',
        message: 'Usuario creado correctamente',
      }
    } catch (error) {
      console.log(error)
      return {
        status: 'error',
        message: 'Hubo un error desconocido',
      }
    }
  }

  const getUser = async (id: string): Promise<HookResponse<User>> => {
    try {
      const { data } = await axios.get(`${API_URL}/user/${id}`)
      setUser(data)
      return {
        status: 'success',
        message: 'Datos obtenidos satisfactoriamente',
      }
    } catch (error) {
      console.log(error)
      return {
        status: 'error',
        message: 'Hubo un error desconocido',
      }
    }
  }

  const getUsers = () => {}

  return {
    createUser,
    getUser,
    getUsers,
    user,
  }
}

export default useUsers
