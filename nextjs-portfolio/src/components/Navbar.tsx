import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className= 'flex justify-between items-center w-full h-full 2xl:px-16'>
            <Image src="/../public/assets/RM.png" alt="/" width='150' height='50'/>
            <div  className='mr-6'>
                <ul className='hidden md:flex'>
                    <Link href="/"><li className='ml-10 text-sm uppercase hover:border-b'>Home</li></Link>
                    <Link href="/"><li className='ml-10 text-sm uppercase hover:border-b'>About</li></Link>
                    <Link href="/"><li className='ml-10 text-sm uppercase hover:border-b'>Skills</li></Link>
                    <Link href="/"><li className='ml-10 text-sm uppercase hover:border-b'>Projects</li></Link>
                    <Link href="/"><li className='ml-10 text-sm uppercase hover:border-b'>Contact</li></Link>
                </ul>
                <div className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        <div className='fixed left-0 top-0 w-full h-screen bg-black/60'>
            <div className='fixed left-0 top-0 px-10 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] ease-in duration-500'>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/../public/assets/RM.png' alt='/' width='100' height='25'/>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-2 mb-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='text-sm lg:text-base'>Let's build something <span className='text-red-500'>legendary</span> together</p>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar