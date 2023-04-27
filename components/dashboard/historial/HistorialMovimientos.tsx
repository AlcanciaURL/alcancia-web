import { moneyFormat } from '@/services/Filters'
import Workspace from '@/types/Workspace'
import { FaFileAlt } from 'react-icons/fa'

type Props = {
  workspace: Workspace
}

const HistorialMovimiento = ({ workspace }: Props) => {
  return (
    <div className="w-[100%] h-[350px] rounded-lg bg-[#F0F7F4] border overflow-y-scroll">
      <div className="text-xl text-[#71717a] text-center bg-[#D9D9D9] h-[30px]">
        <p>Últimos 10 movimientos</p>
      </div>
      <div className=" h-[320px] text-lg text-[#71717a] text-center grid grid-cols-1 w-[100%] flex">
        {workspace.transaction === undefined ? (
          <div className="flex items-center justify-center hover:bg-[#CCDBD2] ">
            <FaFileAlt />
            ¡Parece que no hay movimientos!
          </div>
        ) : (
          <>
            {workspace.transaction.map((transaction, index) => (
              <div
                key={transaction.id}
                className="flex items-center justify-center flex-col hover:bg-[#CCDBD2]"
              >
                <p>
                  {index + 1} - Cantidad:{' '}
                  {moneyFormat('GTQ', transaction.amount)}
                </p>
                <p>
                  Categoría {transaction.category.name} - Descripción:{' '}
                  {transaction.description}
                </p>
                <p>
                  Realizado por: {transaction.user?.firstName}{' '}
                  {transaction.user?.lastName}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
export default HistorialMovimiento
