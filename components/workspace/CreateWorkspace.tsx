import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CreateWorkspace = () => {
  return (
    <div className="bg-[white] rounded-lg border-dashed shadow-xl border-2 border-[#329F5B]">
      <div className="grid grid-cols-1 p-2 gap-3 place-items-center">
        <div className=" w-20 h-20 rounded-full border-2 border-[#969696] text-xl flex justify-center items-center text-[#969696]">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>
          <span>NOMBRE GRUPO</span>
          <button className="ml-5 text-xs text-[#329F5B] hover:bg-[#329F5B] hover:text-white rounded-lg p-2">
            Editar
          </button>
        </div>
        <div>
          <h1>
            Monto actual: [Q999999]
          </h1>
        </div>
        <div>
          <button className="bg-[#D9D9D9] p-2 mt-3 rounded-lg  hover:bg-maingreen hover:text-white align-middle text-center">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateWorkspace
