import { ReactNode, useContext, useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { SessionContext } from 'context/AuthProvider'

type Props = {
  children: ReactNode
}

const Default = ({ children }: Props) => {
  const router = useRouter()

  const { session } = useContext(SessionContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (session.uid) {
      setLoading(false)
    } else if (session.uid === null) {
      router.push('/log-in')
    }
  }, [session])

  return (
    <div>
      {!loading && (
        <div className="bg-[#F3F4F6] h-screen overflow-y-auto overflow-x-hidden">
          <div>{children}</div>
        </div>
      )}
    </div>
  )
}

export default Default
