import Invitation from "./Invitation"
import UserWorkspace from "./UserWorkspace"

type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  userworkspace: UserWorkspace[]
  intitations: Invitation[]
  invitationsSend: Invitation[]
}

export default User
