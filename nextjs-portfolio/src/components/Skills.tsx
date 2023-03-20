import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-4'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest text-red-500 uppercase'>Skills</p>
            <h2 className='py-4 text-gray-700'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div>
                            <Image src='/../public/assets/skills/html.png' alt='/' width= '64' height= '64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML5</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div>
                            <Image src='/../public/assets/skills/css.png' alt='/' width= '64' height= '64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS3</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div>
                            <Image src='/../public/assets/skills/javascript.png' alt='/' width= '64' height= '64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript (ES7+)</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div>
                            <Image src='/../public/assets/skills/react.png' alt='/' width= '64' height= '64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div>
                            <Image src='/../public/assets/skills/tailwind.png' alt='/' width= '64' height= '64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind.css</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div>
                            <Image src='/../public/assets/skills/nextjs.png' alt='/' width= '64' height= '64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div>
                            <Image src='/../public/assets/skills/firebase.png' alt='/' width= '64' height= '64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div>
                            <Image src='/../public/assets/skills/typescript.png' alt='/' width= '64' height= '64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TypeScript</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills