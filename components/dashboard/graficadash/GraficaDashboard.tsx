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

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: [1, 2, 3, 4, 5, 4, 2],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

type Props = {
  workspace: Workspace
}

const GraficaDashboard = ({ workspace }: Props) => {
  return (
    <div className="w-full h-[350px] grid grid-cols-1 border p-4 rounded-lg bg-[#F0F7F4]">
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
                })
            )}
          </p>
        </div>
      </div>
      <div className="w-full h-full overflow-city">
        <Line options={options} data={data} />
      </div>
    </div>
  )
}

export default GraficaDashboard
