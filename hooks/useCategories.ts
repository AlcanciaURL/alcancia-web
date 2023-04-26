import HookResponse from '@/types/HookResponse'
import axios from 'axios'

type CreateCategory = {
  workspaceId: number
  name: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL

const useCategories = () => {
  const createCategory = async ({
    name,
    workspaceId,
  }: CreateCategory): Promise<HookResponse> => {
    try {
      const { data } = await axios.post(`${API_URL}/category`, {
        name,
        workspaceId,
      })
      return {
        status: 'success',
        message: 'Categoría creada correctamente',
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
    createCategory,
  }
}

export default useCategories
