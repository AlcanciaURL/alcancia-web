import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SelectWorkspace = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center bg-white rounded-lg border-dashed shadow-xl border-2 border-[#329F5B] p-2 place-items-center">
      <div className="w-full">
        {
          <>
            <div className="bg-[#D9D9D9] rounded-lg flex justify-between mb-4 px-4 w-[100%] items-center hover:bg-maingreen hover:cursor-pointer">
              <span className="text-3xl text-[#969696] text-center p-2">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>NOMBRE GRUPO</span>
            </div>
          </>
        }
      </div>
      <button className="bg-[#D9D9D9] px-2 py-1 rounded-full hover:bg-[#329F5B] hover:text-white font-bold text-md text-gray-700">
        + Crear nuevo espacio
      </button>
    </div>
  )
}

export default SelectWorkspace
