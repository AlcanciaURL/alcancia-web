import Workspace from '@/types/Workspace'
import { FaRegMinusSquare } from 'react-icons/fa'

type Props = {
  workspace: Workspace
}

const Planes = ({ workspace }: Props) => {
  return (
    <div className="w-[100%] h-[350px] rounded-lg bg-[#F0F7F4] border overflow-hidden">
      {workspace.userWorkspace && (
        <>
          <div className="text-xl text-[#71717a] text-center bg-[#D9D9D9] h-[30px]">
            <p>Usuarios del espacio de trabajo</p>
          </div>
          <div className=" h-[320px] text-lg text-[#71717a] text-center grid grid-cols-1 w-[100%] flex">
            {workspace.userWorkspace?.map((userWorkspace) => (
              <div
                key={userWorkspace.id}
                className="flex items-center justify-center hover:bg-[#CCDBD2] flex-col"
              >
                <p>
                  {userWorkspace.user.firstName} {userWorkspace.user.lastName}
                </p>
                <p>({userWorkspace.user.email})</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
export default Planes
