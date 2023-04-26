import User from './User'
import Workspace from './Workspace'

type Invitation = {
  id: number
  user: User
  userId: string
  invitedUser: User
  invitedUserId: string
  workspace: Workspace
  workspaceId: number
}

export default Invitation
