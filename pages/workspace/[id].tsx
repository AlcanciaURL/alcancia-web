import useWorkspaces from '@/hooks/useWorkspaces'
import { useEffect } from 'react'
import Navbar from '@/components/navbar/Navbar'
import GraficaDashboard from '@/components/dashboard/graficadash/GraficaDashboard'
import AhorroGastos from '@/components/dashboard/ahorrogastos/AhorroGastos'
import AccesosRapidos from '@/components/dashboard/accesosrapidos/AccesosRapidos'
import HistorialMovimiento from '@/components/dashboard/historial/HistorialMovimientos'
import Planes from '@/components/plans/Plans'

export async function getServerSideProps({ query }: { query: { id: string } }) {
  const { id } = query
  return {
    props: { id },
  }
}

type Props = {
  id: string
}

const Workspace = ({ id }: Props) => {
  const { getWorkspace, workspace } = useWorkspaces()

  useEffect(() => {
    getWorkspace(id)
  }, [])

  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen grid grid-rows-2 pt-2 sm:p-2">
        <div className="w-screen h-screen grid grid-cols1 sm:grid-cols-3 gap-4">
          <GraficaDashboard workspace={workspace} />
          <AhorroGastos workspace={workspace} />
          <AccesosRapidos workspace={workspace} refresh={() => getWorkspace(id)}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <HistorialMovimiento workspace={workspace} />
          <Planes workspace={workspace}/>
        </div>
      </div>
    </div>
  )
}

export default Workspace
