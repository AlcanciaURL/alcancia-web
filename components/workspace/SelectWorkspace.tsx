import { SessionContext } from '@/context/AuthProvider'
import { SnackbarContext } from '@/context/SnackbarProvider'
import useUsers from '@/hooks/useUsers'
import useWorkspaces from '@/hooks/useWorkspaces'
import User from '@/types/User'
import Workspace from '@/types/Workspace'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'

type Props = {
  selectWorkspace: (workspace: Workspace) => void
  user: User
  refresh: () => void
}

const SelectWorkspace = ({ selectWorkspace, user, refresh }: Props) => {
  const { createWorkspace } = useWorkspaces()
  const { openSnackbar } = useContext(SnackbarContext)

  const handleCreateWorkspace = async () => {
    const response = await createWorkspace({ userId: user.id })
    if (response.status === 'success') {
      openSnackbar({
        message: response.message,
        severity: response.status,
      })
      refresh()
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-between items-center bg-white rounded-lg border-dashed shadow-xl border-2 border-[#329F5B] p-2 place-items-center">
      <div className="w-full min-h-[250px]">
        {user.userworkspace?.map((relation) => (
          <div
            key={relation.id}
            onClick={() => selectWorkspace(relation.workspace)}
          >
            <div className="bg-[#D9D9D9] rounded-lg flex justify-between mb-4 px-4 w-[100%] items-center hover:bg-maingreen hover:cursor-pointer">
              <span className="text-3xl text-[#969696] text-center p-2">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>{relation.workspace?.name ?? ''}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => handleCreateWorkspace()}
        className="bg-[#D9D9D9] px-2 py-1 rounded-full hover:bg-[#329F5B] hover:text-white font-bold text-md text-gray-700"
      >
        + Crear nuevo espacio
      </button>
    </div>
  )
}

export default SelectWorkspace
