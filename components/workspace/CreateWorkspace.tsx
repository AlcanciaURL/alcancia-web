import { SnackbarContext } from '@/context/SnackbarProvider'
import useWorkspaces from '@/hooks/useWorkspaces'
import { moneyFormat } from '@/services/Filters'
import Workspace from '@/types/Workspace'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

type Props = {
  workspace: Workspace
  refresh: () => void
}

const CreateWorkspace = ({ workspace, refresh }: Props) => {
  const [currentEditingWorkspace, setcurrentEditingWorkspace] = useState<
    Workspace | undefined
  >()
  const [edit, setEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const { updateWorkspace } = useWorkspaces()
  const { openSnackbar } = useContext(SnackbarContext)
  const router = useRouter()

  useEffect(() => {
    if (workspace !== currentEditingWorkspace) {
      setcurrentEditingWorkspace(undefined)
      setEdit(false)
    }
  }, [workspace])

  const handleEdit = async () => {
    if (edit && currentEditingWorkspace) {
      const response = await updateWorkspace(workspace.id, value)
      if (response.status === 'success') {
        openSnackbar({
          message: response.message,
          severity: response.status,
        })
        refresh()
      }
    }
    setEdit(true)
    setcurrentEditingWorkspace(workspace)
  }

  return (
    <div className="bg-[white] rounded-lg border-dashed shadow-xl border-2 border-[#329F5B]">
      {workspace.name && (
        <div className="grid grid-cols-1 p-2 gap-3 place-items-center">
          <div className=" w-20 h-20 rounded-full border-2 border-[#969696] text-xl flex justify-center items-center text-[#969696]">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="flex flex-col justify-center items-center">
            {edit ? (
              <input
                className="bg-[#CCDBD2] appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            ) : (
              <span>{workspace.name}</span>
            )}
            <div className="flex justify-around items-center">
              <button
                onClick={() => handleEdit()}
                className="mx-1 text-xs text-[#329F5B] hover:bg-[#329F5B] hover:text-white rounded-lg p-2"
              >
                {edit ? 'Guardar' : 'Editar'}
              </button>
              {edit && (
                <button
                  onClick={() => setEdit(false)}
                  className="w-1/2 mx-1 text-xs text-red-400 hover:bg-[#9f3232] hover:text-white rounded-lg p-2"
                >
                  Cancelar
                </button>
              )}
            </div>
          </div>
          <div>
            <h1>Monto actual: {moneyFormat('GTQ', workspace.currentAmount)}</h1>
          </div>
          <div>
            <button onClick={() => router.push(`/workspace/${workspace.id}`)} className="bg-[#D9D9D9] p-2 mt-3 rounded-lg  hover:bg-maingreen hover:text-white align-middle text-center">
              Ingresar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateWorkspace
