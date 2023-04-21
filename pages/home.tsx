import Navbar from '@/components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
  return (
    <div className="bg-[white] ">
      <Navbar></Navbar>
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-[#F0F7F4] rounded-lg border shadow-sm p-10 pt-20 border-8 border-[#B3BFB8] sm:w-[65%] w-[100%]">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[white] rounded-lg border-dashed shadow-xl border-2 border-[#329F5B] shadow-[6px_9px_5px_0px_#a0aec0]">
              <div className="grid grid-cols-1 p-2 gap-3 place-items-center">
                <div className="bg-[#D9D9D9] rounded-lg flex justify-between pl-4 pr-4 w-[100%] items-center">
                  <span className="text-3xl text-[#969696] text-center p-2">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <span>Nombre de usuario</span>
                </div>
                <div className="">
                  <button className="bg-[#D9D9D9] w-12 h-12 rounded-full hover:bg-[#329F5B] hover:text-white align-middle font-bold text-lg">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[white] rounded-lg border-dashed shadow-xl border-2 border-[#329F5B] shadow-[6px_9px_5px_0px_#a0aec0]">
              <div className="grid grid-cols-1 p-2 gap-3 place-items-center">
                <button className=" w-20 h-20 rounded-full  border-2 border-[#969696] text-4xl text-[#969696]">
                  <FontAwesomeIcon icon={faUser} />
                </button>
                <div>
                  <span>Nombre de usuario</span>
                  <button className="ml-5 text-xs text-[#329F5B] hover:bg-[#329F5B] hover:text-white rounded-lg p-2">
                    Editar
                  </button>
                </div>
                <div className="bg-[#D9D9D9] rounded-lg flex justify-between p-4 w-[100%] items-center">
                  <label className="block mb-2 text-base font-medium text-[#3C493F] pr-4 ">
                    Email
                  </label>
                  <input
                    className="bg-[#CCDBD2] appearance-none rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 p-4 bg-[#D9D9D9] place-items-center rounded-lg">
                  <div className="grid grid-cols-1  bg-[#D9D9D9] place-items-center">
                    <label className="block mb-2 text-base font-medium text-[#3C493F] pr-4 w-[100%]">
                      Monto
                    </label>
                    <input
                      className="bg-[#CCDBD2] w-[100%] appearance-none rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
                      type="text"
                    />
                    <button className="bg-[#B3BFB8] p-2 mt-3 rounded-lg  hover:bg-[#329F5B] hover:text-white align-middle font-sm text-sm text-center">
                      Agregar
                    </button>
                  </div>
                  <div className="grid grid-cols-1 bg-[#D9D9D9] place-items-center">
                    <label className="block mb-2 text-base font-medium text-[#3C493F] pr-4 w-[100%]">
                      Debito
                    </label>
                    <input
                      className="bg-[#CCDBD2] w-[100%] appearance-none rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
                      type="text"
                    />
                    <button className="bg-[#B3BFB8] p-2 mt-3 rounded-lg  hover:bg-[#329F5B] hover:text-white align-middle font-sm text-sm text-center">
                      Agregar
                    </button>
                  </div>
                </div>
                <div>
                  <button className="bg-[#D9D9D9] p-2 mt-3 rounded-lg  hover:bg-[red] hover:text-white align-middle text-center">
                    Eliminar usuario
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
