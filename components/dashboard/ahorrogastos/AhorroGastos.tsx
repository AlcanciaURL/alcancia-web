import { moneyFormat } from '@/services/Filters'
import Workspace from '@/types/Workspace'
import { FaPiggyBank, FaHandHoldingUsd } from 'react-icons/fa'

type Props = {
  workspace: Workspace
}

const AhorroGastos = ({ workspace }: Props) => {
  return (
    <div className="w-[100%] h-[350px] grid grid-cols-2 gap-2 border p-4 rounded-lg bg-[#F0F7F4]">
      <div className="  text-4xl text-[#71717a] grid justify-items-start p-4 ">
        <div className="pl-2">
          <FaHandHoldingUsd />
        </div>
        <div className="text-2xl text-[#52525b] font-semibold pl-2">Gastos</div>
        <div className="text-2xl text-[#71717a] font-regular pl-2">
          {moneyFormat(
            'GTQ',
            workspace.transaction
              .map((transaction) => transaction.amount)
              .filter((amount) => amount < 0)
              .reduce((a, b) => {
                return a + b
              })
          )}
        </div>
      </div>
      <div className="w-[100%] grid place-items-center">
        <div>100%</div>
      </div>
      <div className="  text-3xl text-[#71717a] grid justify-items-start p-4">
        <div className="pl-2">
          <FaPiggyBank />
        </div>
        <div className="text-2xl text-[#52525b] font-semibold pl-2">
          Ingresos
        </div>
        <div className="text-2xl text-[#71717a] font-regular pl-2">
          {moneyFormat(
            'GTQ',
            workspace.transaction
              .map((transaction) => transaction.amount)
              .filter((amount) => amount > 0)
              .reduce((a, b) => {
                return a + b
              })
          )}
        </div>
      </div>
      <div className="w-[100%] grid place-items-center">
        <div>100%</div>
      </div>
    </div>
  )
}
export default AhorroGastos
