import Category from './Category'
import User from './User'
import Workspace from './Workspace'

type Transaction = {
  id: number
  description: string
  amount: number
  category: Category
  categoryId: number
  workspace: Workspace
  workspaceId: number
  user: User
  userId: string
}

export default Transaction
