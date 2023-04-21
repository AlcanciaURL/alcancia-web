
const AccesosRapidos = () => {
    return (
        <div className="w-[100%] h-[350px] rounded-lg bg-[#F0F7F4] border overflow-hidden">
            <div className="text-xl text-[#71717a] text-center bg-[#D9D9D9] h-[30px]">
                <p>Acceso Rápido</p>
            </div>
            <div className=" h-[320px] text-lg text-[#71717a] text-center grid grid-cols-1 w-[100%] flex">
                <div className="flex items-center justify-center hover:bg-[#CCDBD2] ">
                    <p>Acreditar</p>
                </div>
                <div className="flex items-center justify-center hover:bg-[#CCDBD2]">
                    <p>Debitar</p>
                </div>
                <div className="flex items-center justify-center hover:bg-[#CCDBD2]">
                    <p>Plan Ahorro</p>
                </div>
            </div>
        </div>

    )
}
export default AccesosRapidos