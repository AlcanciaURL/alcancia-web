import Navbar from '@/components/navbar/Navbar'
import img from '@/imagenes/piggy.png'
import Image from 'next/image'
import { FaCommentsDollar } from 'react-icons/fa';

const Principal = () => {
    return (
        <div>
            <Navbar />
            <div className="w-[100%] h-[100vh] grid grid-rows-2 bg-[pink]">
                <div className="bg-grey w-[100%] h-[100%] grid grid-cols-1 sm:grid-cols-2 place-content-center gap-4 text-left border-b-[12px] border-verde">
                    <div className="p-8">
                        <h1 className="text-3xl sm:text-6xl text-verde font-bold">Administra tu dinero de la mejor manera</h1>
                    </div>
                    <div className="w-[100%] h-[100%] grid place-content-center">
                        <div className="bg-verde w-[100px] h-[100px] sm:w-[250px] sm:h-[250px] rounded-full">
                            <Image src={img} alt="Mi imagen" width={400} height={400} />
                        </div>
                    </div>
                </div>
                <div className="bg-secondary w-[100%] h-[100%] grid grid-cols-1 sm:grid-cols-2 place-content-center gap-4 text-left p-10">
                    <div className="w-[100%] h-[100%] grid place-content-center border-2 ">
                        <h1 className="text-3xl sm:text-9xl text-texto font-bold "><FaCommentsDollar /></h1>

                    </div>
                    <div className="p-8">
                        <h1 className="text-3xl sm:text-6xl text-texto font-bold">Lleva tus registros exactos</h1>
                        <p>Vealo todo de un vistazo cuando vincule sus cuentas de efectivo, tarjetas de credito, inversiones y facturas</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Principal