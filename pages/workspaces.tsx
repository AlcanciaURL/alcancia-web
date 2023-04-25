import Navbar from '@/components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import SelectWorkspace from '@/components/workspace/SelectWorkspace'
import CreateWorkspace from '@/components/workspace/CreateWorkspace'

const Home = () => {
  return (
    <div className="items-center justify-center h-screen">
      <Navbar></Navbar>
      <div className="h-full justify-center flex items-center ">
        <div className="bg-gray-100 rounded-lg border shadow-xl p-10 border-[#B3BFB8 grid grid-cols-2 gap-4 w-1/2">
          <SelectWorkspace />
          <CreateWorkspace />
        </div>
      </div>
    </div>
  )
}

export default Home
