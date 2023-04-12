
const Navbar = () => {
    return (
        <div className="flex justify-between w-100% h-[44px] bg-[#329F5B] md:pr-14">
            <div className=" md:justify-start text-white text-2xl font-bold  tracking-wide pl-4 ">
                <span className="inline-block align-middle drop-shadow-xl">Savings Vault</span>
                <button className="inline-block align-middle font-semibold text-lg pl-20"> Inicio</button>
                <button className="inline-block align-middle font-semibold text-lg pl-4"> Cuentas</button>
                <button className="inline-block align-middle font-semibold text-lg pl-4"> Movimientos</button>
            </div>
            <div>
                <button className="text-white text-lg h-full px-6 font-semibold hover:bg-[#38BC7D] hover:drop-shadow-sm">Perfil</button>
                <button className="text-white text-lg h-full px-6 font-semibold hover:bg-[#38BC7D] hover:drop-shadow-sm">Salir</button>

            </div>
        </div>
    )
}
export default Navbar