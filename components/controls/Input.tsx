import { HTMLInputTypeAttribute } from 'react'

type InputProps = {
  label: string
  register: any
  type?: HTMLInputTypeAttribute
}

const Input = ({ label, register, type = 'text' }: InputProps) => {
  return (
    <>
      <label className="block mb-2 text-base font-medium text-[#3C493F] ">
        {label}
      </label>
      <input
        {...register}
        className="bg-[#CCDBD2] appearance-none rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#CCDBD2] focus:border-2"
        type={type}
      />
    </>
  )
}

export default Input
