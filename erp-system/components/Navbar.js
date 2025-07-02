import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-full bg-purple-700 flex justify-between px-3 items-center text-white'>
        <div className="logo font-bold text-2xl">
            <Link href="/">Admin</Link>
        </div>
        <ul className='flex gap-4 justify-center items-center'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/info"><li>info</li></Link>
        </ul >
    </nav >
  )
}

export default Navbar

