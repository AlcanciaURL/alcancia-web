import { FaRegMinusSquare } from 'react-icons/fa';

const Planes = () => {
    return (
        <div className="w-[100%] h-[350px] rounded-lg bg-[#F0F7F4] border overflow-hidden">
            <div className="text-xl text-[#71717a] text-center bg-[#D9D9D9] h-[30px]">
                <p>Últimos 10 movimientos</p>
            </div>
            <div className=" h-[320px] text-lg text-[#71717a] text-center grid grid-cols-1 w-[100%] ">
                <div className="flex items-center justify-center hover:bg-secondary ">
                    <FaRegMinusSquare />
                    ¡Parece que no hay ningún plan!
                </div>

                {/* DIV EN CASO DE QUE SI HAY MOVIEMIENTOS
                <div className="flex items-center justify-center hover:bg-secondary">
                    <p>Movimiento</p>
                </div>
                */}
            </div>
        </div>

    )
}
export default Planes