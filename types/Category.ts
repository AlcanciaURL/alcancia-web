import Transaction from './Transaction'
import Workspace from './Workspace'

type Category = {
  id: number
  name: string
  workspace: Workspace
  workspaceId: number
  transaction: Transaction[]
}

export default Category
