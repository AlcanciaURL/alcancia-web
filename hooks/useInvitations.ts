import HookResponse from '@/types/HookResponse'
import axios from 'axios'

type CreateInvitation = {
  userId: string
  email: string
  workspaceId: number
}

const API_URL = process.env.NEXT_PUBLIC_API_URL

const useInvitations = () => {
  const createInvitation = async ({
    email,
    userId,
    workspaceId,
  }: CreateInvitation): Promise<HookResponse> => {
    try {
      const { data } = await axios.post(`${API_URL}/user/email`, {
        email,
      })
      if (typeof data === 'string') {
        return {
          status: 'error', 
          message: 'Este correo no está registrado'
        }
      }
      await axios.post(`${API_URL}/invitation`, {
        invitedUserId: data.id,
        userId,
        workspaceId,
      })
      return {
        status: 'success',
        message: 'Invitación creada correctamente',
      }
    } catch (error) {
      console.log(error)
      return {
        status: 'error',
        message: 'Hubo un error desconocido',
      }
    }
  }

  const deleteInvitation = async (id: number) => {
    try {
      const { data } = await axios.delete(`${API_URL}/invitation/${id}`)
      return {
        status: 'success',
        message: 'Invitación rechazada',
      }
    } catch (error) {
      console.log(error)
      return {
        status: 'error',
        message: 'Hubo un error desconocido',
      }
    }
  }

  return {
    createInvitation,
    deleteInvitation,
  }
}

export default useInvitations
