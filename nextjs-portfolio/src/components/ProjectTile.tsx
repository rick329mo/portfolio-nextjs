import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectTile = ({title, backgroundImg, projectUrl}) => {
  return (
    <div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-red-600 to-red-400 text-white'>
            <Image src={backgroundImg} alt='/' width='800' height='400' className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-center'>React JS</p>
                <Link href={projectUrl}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectTile