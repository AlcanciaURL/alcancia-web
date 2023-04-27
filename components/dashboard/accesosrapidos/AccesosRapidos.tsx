import { SessionContext } from '@/context/AuthProvider'
import { SnackbarContext } from '@/context/SnackbarProvider'
import useCategories from '@/hooks/useCategories'
import useInvitations from '@/hooks/useInvitations'
import useTransactions from '@/hooks/useTransactions'
import Workspace from '@/types/Workspace'
import { useContext, useEffect, useRef, useState } from 'react'

type Props = {
  workspace: Workspace
  refresh: () => void
}

const AccesosRapidos = ({ workspace, refresh }: Props) => {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState(-1)
  const [value, setValue] = useState<number | string>(0)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(-1)
  const [description, setDescription] = useState('')

  const { createCategory } = useCategories()
  const { createTransaction } = useTransactions()
  const { createInvitation } = useInvitations()
  const { openSnackbar } = useContext(SnackbarContext)
  const { session } = useContext(SessionContext)

  useEffect(() => {
    console.log(workspace)
  }, [workspace])

  const handleModal = (m: number) => {
    switch (m) {
      case 0:
        setTitle('Acreditar')
        setValue(0)
        break
      case 1:
        setTitle('Debitar')
        setValue(0)
        break
      case 2:
        setTitle('Crear categoría')
        setValue('')
        break
      case 3:
        setTitle('Listado de categorías')
        break
      case 4:
        setTitle('Ingresar correo')
        setValue('')
        break
      default:
        break
    }

    setMode(m)
    setDescription('')
    setCategory(-1)
    setOpen(true)
  }

  const completeTransaction = async () => {
    if (mode === 1 || mode === 0) {
      if (category === -1) {
        openSnackbar({
          message: 'Debe de elegir una categoría',
          severity: 'error',
        })
        return undefined
      }

      if (value === 0) {
        openSnackbar({
          message: 'No es posible hacer una transacción por Q0.00',
          severity: 'error',
        })
        return undefined
      }

      const response = await createTransaction({
        description: description,
        categoryId: category,
        amount:
          mode === 0
            ? typeof value === 'string'
              ? parseInt(value) * 100
              : value * 100
            : typeof value === 'string'
            ? parseInt(value) * -100
            : value * -100,
        workspaceId: workspace.id,
        userId: session.uid!,
      })
      if (response.status === 'success') {
        openSnackbar({
          message: response.message,
          severity: response.status,
        })
        setOpen(false)
        refresh()
      }
    } else if (mode === 2) {
      const response = await createCategory({
        name: typeof value === 'number' ? value.toString() : value,
        workspaceId: workspace.id,
      })
      if (response.status === 'success') {
        openSnackbar({
          message: response.message,
          severity: response.status,
        })
        setOpen(false)
        refresh()
      }
    } else if (mode === 4) {
      if (workspace.userWorkspace.find((userW) => userW.user.email === value) === undefined) {
        const response = await createInvitation({
          userId: session.uid!,
          email: typeof value === 'number' ? value.toString() : value,
          workspaceId: workspace.id,
        })
        if (response.status === 'success') {
          openSnackbar({
            message: response.message,
            severity: response.status,
          })
          setOpen(false)
          refresh()
        }
      } else {
        openSnackbar({
          message: 'Este usuario ya pertece al espacio de trabajo',
          severity: 'error',
        })
      }
    }
  }

  const outerRef = useRef(null)

  const handleClose = () => {
    setOpen(false)
  }

  const handleInnerClick = (event: any) => {
    event.stopPropagation()
  }

  return (
    <>
      <div className="w-full h-[350px] rounded-lg bg-[#F0F7F4] border overflow-hidden">
        <div className="text-xl text-[#71717a] text-center bg-[#D9D9D9] h-[30px]">
          <p>Acceso Rápido</p>
        </div>
        <div className=" h-[320px] text-lg text-[#71717a] text-center grid grid-cols-1 w-full ">
          <div
            className="flex cursor-pointer items-center justify-center hover:bg-[#CCDBD2]"
            onClick={() => handleModal(0)}
          >
            <p>Acreditar</p>
          </div>
          <div
            className="flex cursor-pointer items-center justify-center hover:bg-[#CCDBD2]"
            onClick={() => handleModal(1)}
          >
            <p>Debitar</p>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="cursor-pointer h-full w-full flex items-center justify-center hover:bg-[#CCDBD2]"
              onClick={() => handleModal(2)}
            >
              <p>
                Agregar categoría <br /> de transacción
              </p>
            </div>
            <div
              className="flex cursor-pointer w-full h-full items-center justify-center hover:bg-[#CCDBD2]"
              onClick={() => handleModal(3)}
            >
              <p>Ver categorías creadas</p>
            </div>
          </div>
          <div
            className="flex cursor-pointer w-full h-full items-center justify-center hover:bg-[#CCDBD2]"
            onClick={() => handleModal(4)}
          >
            <p>Invitar usuario</p>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="backdrop-blur-md absolute w-screen h-screen top-0 left-0 flex justify-center items-center"
          onClick={handleClose}
          ref={outerRef}
        >
          <div
            className="bg-gray-200 p-4 border-8 border-[#B3BFB8]"
            onClick={handleInnerClick}
          >
            <h1 className="text-3xl mb-2">{title}</h1>
            {(mode === 0 || mode === 1 || mode === 2 || mode === 4) && (
              <>
                <input
                  className="p-1 mb-4 bg-[#CCDBD2] appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
                  type={mode === 2 || mode === 4 ? 'text' : 'number'}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                {(mode === 0 || mode === 1) && (
                  <>
                    <select
                      value={category}
                      onChange={(e) => setCategory(parseInt(e.target.value))}
                      className="p-1 mb-4 bg-[#CCDBD2] rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
                    >
                      <option value="-1">Seleccione una categoría</option>
                      {workspace.categoryWorkspace?.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <textarea
                      className="p-1 mb-4 bg-[#CCDBD2] rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
                      placeholder="Descripción"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </>
                )}
                <button
                  className="bg-[#329F5B] w-full hover:bg-[#CCDBD2] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={completeTransaction}
                >
                  Aceptar
                </button>
              </>
            )}
            {mode === 3 &&
              workspace.categoryWorkspace?.map((category, index) => (
                <div key={category.id}>
                  {index + 1}. {category.name}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  )
}
export default AccesosRapidos
