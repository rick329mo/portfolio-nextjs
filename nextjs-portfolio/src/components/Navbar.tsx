import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(prevNav => !prevNav)

    return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className= 'flex justify-between items-center w-full h-full p-5 2xl:px-16'>
            <Image src="/../public/assets/RM.png" alt="/" width='125' height='50'/>
            <div>
                <ul className='hidden md:flex'>
                    <Link href="/"><li className='ml-10 text-sm uppercase hover:underline'>Home</li></Link>
                    <Link href="/"><li className='ml-10 text-sm uppercase hover:underline'>About</li></Link>
                    <Link href="/"><li className='ml-10 text-sm uppercase hover:underline'>Skills</li></Link>
                    <Link href="/"><li className='ml-10 text-sm uppercase hover:underline'>Projects</li></Link>
                    <Link href="/"><li className='ml-10 text-sm uppercase hover:underline'>Contact</li></Link>
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ''}>
            <div className={nav ? 'fixed left-0 top-0 px-10 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/../public/assets/RM.png' alt='/' width='100' height='25'/>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-2 mb-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='py-2 w-[90%] md:w-[95%]'>Let's build something <span className='text-red-500'>legendary</span> together</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:underline'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:underline'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:underline'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:underline'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:underline'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-red-500 mb-5'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar