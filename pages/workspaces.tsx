import Navbar from '@/components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import SelectWorkspace from '@/components/workspace/SelectWorkspace'
import CreateWorkspace from '@/components/workspace/CreateWorkspace'
import { useContext, useEffect, useState } from 'react'
import Workspace from '@/types/Workspace'
import useUsers from '@/hooks/useUsers'
import { SessionContext } from '@/context/AuthProvider'

const Home = () => {
  const [workspace, setWorkspace] = useState<Workspace>({} as Workspace)
  const { session } = useContext(SessionContext)
  const { getUser, user } = useUsers()

  useEffect(() => {
    if (session.uid) {
      getUser(session.uid)
    }
  }, [session])

  const refresh = () => {
    if (session.uid) {
      getUser(session.uid)
    }
  }

  return (
    <div className="items-center justify-center h-screen">
      <Navbar></Navbar>
      <div className="h-full justify-center flex items-center ">
        <div className="bg-gray-100 rounded-lg border shadow-xl p-10 border-[#B3BFB8 grid grid-cols-2 gap-4 w-1/2">
          <SelectWorkspace
            selectWorkspace={(workspace) => setWorkspace(workspace)}
            user={user}
            refresh={refresh}
          />
          <CreateWorkspace workspace={workspace} refresh={refresh} />
        </div>
      </div>
    </div>
  )
}

export default Home
