import { FaWallet } from 'react-icons/fa';

const GraficaDashboard = () => {
    return (
        <div className="w-[100%] h-[350px] grid grid-cols-1 border p-4 rounded-lg bg-[#F0F7F4]">
            <div className="w-[100%] grid grid-cols-3  h-[70px]">
                <div className="text-4xl text-[#71717a] flex items-center justify-center border-2 ">
                    <FaWallet />

                </div>
                <div className="text-xl text-[#71717a] pl-4 col-span-2 h-[100%] flex items-center">
                    <p className="font-semibold">Monto actual:</p>
                    <p className="font-regular pl-4">Q999,999.99</p>
                </div>
            </div>
            <div className="w-[100%] h-[240px] bg-[grey] overflow-city"> Grafica</div>
        </div>
    )
}
export default GraficaDashboard