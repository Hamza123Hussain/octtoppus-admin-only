import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-2">
      {' '}
      <Image width={250} height={250} src="/Logo.png" alt="Logo" />
      <h1 className=" text-3xl font-extrabold">Admin Panel</h1>
    </div>
  )
}

export default Header
