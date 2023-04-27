import Navbar from '@/components/navbar/Navbar'
import SelectWorkspace from '@/components/workspace/SelectWorkspace'
import CreateWorkspace from '@/components/workspace/CreateWorkspace'
import { useContext, useEffect, useState } from 'react'
import Workspace from '@/types/Workspace'
import useUsers from '@/hooks/useUsers'
import { SessionContext } from '@/context/AuthProvider'
import { Divider } from '@mui/material'
import useInvitations from '@/hooks/useInvitations'
import { SnackbarContext } from '@/context/SnackbarProvider'
import useWorkspaces from '@/hooks/useWorkspaces'
import Invitation from '@/types/Invitation'

const Home = () => {
  const [workspace, setWorkspace] = useState<Workspace>({} as Workspace)
  const { session } = useContext(SessionContext)
  const { deleteInvitation } = useInvitations()
  const { getUser, user } = useUsers()
  const { openSnackbar } = useContext(SnackbarContext)
  const { joinWorkspace } = useWorkspaces()

  useEffect(() => {
    console.log(user)
    if (session.uid) {
      getUser(session.uid)
    }
  }, [session])

  const refresh = () => {
    if (session.uid) {
      getUser(session.uid)
    }
  }

  const handleAccept = async (invitation: Invitation) => {
    const response = await joinWorkspace(invitation.workspaceId, session.uid!)
    if (response.status === 'success') {
      await deleteInvitation(invitation.id)
      openSnackbar({
        message: 'Invitación aceptada',
        severity: response.status,
      })
    }
    refresh()
  }

  const handleReject = async (id: number) => {
    const response = await deleteInvitation(id)
    if (response.status === 'success') {
      openSnackbar({
        message: response.message,
        severity: response.status,
      })
    }
    refresh()
  }

  return (
    <div className="items-center justify-center h-screen">
      <Navbar></Navbar>
      <div className="h-full justify-center flex items-center ">
        <div className="bg-gray-100 rounded-lg border shadow-xl p-10 border-[#B3BFB8 grid grid-cols-2 gap-4 w-1/2">
          <SelectWorkspace
            selectWorkspace={(workspace) => setWorkspace(workspace)}
            user={user}
            refresh={refresh}
          />
          <CreateWorkspace workspace={workspace} refresh={refresh} />
          {user.invitations?.length > 0 && (
            <div className="absolute bottom-20 right-20 bg-gray-200 p-4 rounded">
              <h1 className="text-xl">Invitaciones</h1>
              <div className="my-2 h-[1px] bg-gray-700 w-full" />
              {user.invitations?.map((invitation) => (
                <div key={invitation.id}>
                  <div>
                    Espacio de trabajo:{' '}
                    <strong>{invitation.workspace.name}</strong>
                  </div>
                  <div>
                    Invitado por: {invitation.user.firstName}{' '}
                    {invitation.user.lastName}
                  </div>
                  <div>({invitation.user.email})</div>
                  <div className="">
                    <button
                      onClick={() => handleAccept(invitation)}
                      className="mx-1 text-xs text-[#329F5B] hover:bg-[#329F5B] hover:text-white rounded-lg p-2"
                    >
                      Aceptar
                    </button>
                    <button
                      onClick={() => handleReject(invitation.id)}
                      className="w-1/2 mx-1 text-xs text-red-400 hover:bg-[#9f3232] hover:text-white rounded-lg p-2"
                    >
                      Rechazar
                    </button>{' '}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
