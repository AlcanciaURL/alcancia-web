import HookResponse from '@/types/HookResponse'
import axios from 'axios'

type CreateTransaction = {
  description: string
  amount: number
  userId: string
  categoryId: number
  workspaceId: number
}

const API_URL = process.env.NEXT_PUBLIC_API_URL

const useTransactions = () => {
  const createTransaction = async ({
    amount,
    categoryId,
    description,
    userId,
    workspaceId,
  }: CreateTransaction): Promise<HookResponse> => {
    try {
      const { data } = await axios.post(`${API_URL}/transaction`, {
        description,
        amount,
        userId,
        categoryId,
        workspaceId,
      })
      return {
        status: 'success',
        message: 'Transacción creada correctamente',
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
    createTransaction,
  }
}

export default useTransactions
