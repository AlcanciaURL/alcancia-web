import { moneyFormat } from '@/services/Filters'
import Workspace from '@/types/Workspace'
import { FaWallet } from 'react-icons/fa'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import format from 'date-fns/format'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Últimas 10 movimientos',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

type Props = {
  workspace: Workspace
}

const GraficaDashboard = ({ workspace }: Props) => {
  return (
    <div className="w-full h-[350px] grid grid-cols-1 border p-4 rounded-lg bg-[#F0F7F4]">
      {workspace.transaction && (
        <>
          <div className="w-full grid grid-cols-3  h-[70px]">
            <div className="text-4xl text-[#71717a] flex items-center justify-center border-2 ">
              <FaWallet />
            </div>
            <div className="text-xl text-[#71717a] pl-4 col-span-2 h-full flex items-center">
              <p className="font-semibold">Monto actual:</p>
              <p className="font-regular pl-4">
                {moneyFormat(
                  'GTQ',
                  workspace.transaction
                    .map((transaction) => transaction.amount)
                    .reduce((a, b) => {
                      return a + b
                    }, 0)
                )}
              </p>
            </div>
          </div>
          <div className="w-full h-full overflow-city">
            <Line
              options={options}
              data={{
                labels: workspace.transaction.map((transaction) =>
                  format(new Date(transaction.date), 'dd/MM/yyyy')
                ),
                datasets: [
                  {
                    label: 'Transacción (Q)',
                    data: workspace.transaction.map(
                      (transaction) => transaction.amount / 100
                    ),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  },
                ],
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default GraficaDashboard
