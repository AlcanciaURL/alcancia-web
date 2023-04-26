import Navbar from '@/components/navbar/Navbar'
import GraficaDashboard from '@/components/dashboard/graficadash/GraficaDashboard'
import AhorroGastos from '@/components/dashboard/ahorrogastos/AhorroGastos'
import AccesosRapidos from '@/components/dashboard/accesosrapidos/AccesosRapidos'
import HistorialMovimiento from '@/components/dashboard/historial/HistorialMovimientos'
import Planes from '@/components/plans/Plans'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen grid grid-rows-2 pt-2 sm:p-2">
        <div className="w-screen h-screen grid grid-cols1 sm:grid-cols-3 gap-4">
          <GraficaDashboard />
          <AhorroGastos />
          <AccesosRapidos />
        </div>
        <div className="w-screen h-screen grid grid-cols1 sm:grid-cols-2 gap-4 pt-2">
          <HistorialMovimiento />
          <Planes />
        </div>
      </div>
    </div>
  )
}
export default Dashboard
