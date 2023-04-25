import { ReactNode } from 'react'
import LogInForm from '@/components/auth/LogInForm'
import Input from '@/components/controls/Input'
import Navbarlogin from '@/components/navbarlogin/Navbarlogin'
import Empty from '@/layouts/Empty'

const LogIn = () => {
  return (
    <>
      <Navbarlogin />
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-[#F0F7F4] rounded-lg shadow-sm p-10 border-8 border-[#B3BFB8] sm:w-[30%] w-[100%]">
          <LogInForm />
        </div>
      </div>
    </>
  )
}

LogIn.layout = function layout(page: ReactNode) {
  return <Empty>{page}</Empty>
}

export default LogIn
