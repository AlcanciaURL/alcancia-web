import Workspace from './Workspace'

type Objective = {
  id: number
  description: string
  amount: number
  initDate: Date
  endDate: Date
  workspace: Workspace
  workspaceId: number
}

export default Objective
