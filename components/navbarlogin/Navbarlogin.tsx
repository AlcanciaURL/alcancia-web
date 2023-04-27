
const Navbarlogin = () => {
  return (
    <div className="flex justify-between w-100% h-[44px] bg-[#329F5B] md:pr-14">
      <div className=" md:justify-start text-white text-2xl font-bold  tracking-wide pl-4 ">
        <span className="inline-block align-middle drop-shadow-xl">Savings Vault</span>
      </div>
      <div>
      <button className="text-white text-lg h-full px-6 font-semibold hover:bg-[#38BC7D] hover:drop-shadow-sm">Ingresar</button>
      <button className="text-white text-lg h-full px-6 font-semibold hover:bg-[#38BC7D] hover:drop-shadow-sm">Registrarse</button>
      </div>
    </div>
  )
}
export default Navbarlogin