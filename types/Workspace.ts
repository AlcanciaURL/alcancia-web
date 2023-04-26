import Category from './Category'
import Invitation from './Invitation'
import Objective from './Objective'
import Transaction from './Transaction'
import UserWorkspace from './UserWorkspace'

type Workspace = {
  id: number
  name: string
  currentAmount: number
  userWorkspace: UserWorkspace[]
  transaction: Transaction[]
  categoryWorkspace: Category[]
  objective: Objective[]
  invitation: Invitation[]
}

export default Workspace
