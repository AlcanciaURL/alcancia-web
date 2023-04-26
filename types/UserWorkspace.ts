import User from './User'
import Workspace from './Workspace'

type UserWorkspace = {
  id: number
  userId: string
  user: User
  workpaceId: number
  workspace: Workspace
}

export default UserWorkspace
