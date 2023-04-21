import React from 'react'

type ConfirmButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  text: string
}

const ConfirmButton = ({
  type = 'submit',
  onClick,
  text,
}: ConfirmButtonProps) => {
  return (
    <button
      className="bg-[#329F5B] hover:bg-[#CCDBD2] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default ConfirmButton
