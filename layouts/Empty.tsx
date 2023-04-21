import { ReactNode } from 'react'

type EmptyProps = {
  children: ReactNode
}

const Empty = ({ children }: EmptyProps) => {
  return <div>{children}</div>
}

export default Empty
