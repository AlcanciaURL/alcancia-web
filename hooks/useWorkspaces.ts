import HookResponse from '@/types/HookResponse'
import User from '@/types/User'
import Workspace from '@/types/Workspace'
import axios from 'axios'
import { useState } from 'react'

type CreateWorkspace = {
  userId: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL

const useWorkspaces = () => {
  const [workspace, setWorkspace] = useState<Workspace>({} as Workspace)

  const createWorkspace = async ({
    userId,
  }: CreateWorkspace): Promise<HookResponse> => {
    try {
      const { data } = await axios.post(`${API_URL}/workspace`, {
        userId,
      })
      setWorkspace(data)
      return {
        status: 'success',
        message: 'Espacio de trabajo creado correctamente',
      }
    } catch (error) {
      console.log(error)
      return {
        status: 'error',
        message: 'Hubo un error desconocido',
      }
    }
  }

  const updateWorkspace = async (
    id: number,
    name: string
  ): Promise<HookResponse> => {
    try {
      const { data } = await axios.put(`${API_URL}/workspace/${id}`, {
        name,
      })
      return {
        status: 'success',
        message: 'Nombre guardado correctamente',
      }
    } catch (error) {
      console.log(error)
      return {
        status: 'error',
        message: 'Hubo un error desconocido',
      }
    }
  }

  const getWorkspace = async (id: string): Promise<HookResponse<Workspace>> => {
    try {
      const { data } = await axios.get(`${API_URL}/workspace/${id}`)
      setWorkspace(data)
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

  const joinWorkspace = async (workspaceId: number, userId: string) => {
    try {
      const { data } = await axios.put(`${API_URL}/workspace/users/${workspaceId}`,{
        userId
      })
      return {
        status: 'success',
        message: 'Usuario agregado satisfactoriamente',
      }
    } catch (error) {
      console.log(error)
      return {
        status: 'error',
        message: 'Hubo un error desconocido',
      }
    }
  }

  const getWorkspaces = () => {}

  return {
    createWorkspace,
    getWorkspace,
    getWorkspaces,
    workspace,
    joinWorkspace,
    updateWorkspace,
  }
}

export default useWorkspaces
