import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full md:h-screen p-4 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-red-500'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// I am not your average developer</p>
                <p className='py-2 text-gray-600'>I have spent my entire career in the sales and insurance industries. In this time I learned
                    not only how to be a great communicator, but also a <span className='italic'>leader</span>. 
                    I have always had a knack for technology and working with computers, but never expected to develop a love for them.
                    In January of 2022 I stumbled upon a YouTube video about coding and on a whim, decided to listen in.
                </p>
                <p className='py-2 text-gray-600'>My intruige turned into a several month binge on all things HTML, CSS, and JavaScript. It wasn't until my brother-in-law
                     (also in the industry) recommended that I try a bootcamp that I decided to turn this into a career. After several months 
                     of working through Scrimba's Front-End Developer Career-Path, I finally finished and earned my certificate.
                </p>
                <p className='py-2 text-gray-600'>But I didn't stop there.</p>
                <p className='py-2 text-gray-600'>Since then, I have learned modern technologies such as Tailwind.css, Next.js, and Firebase. As I continue along my coding
                    journey, I hope to become part of a team that holds the same values of hard-work, open communication, and teamwork that have
                    been the cornerstone of my education.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Feel free to check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src="/../public/assets/rick.jpg" alt="/" width='400' height='100' className='rounded-xl '/>
            </div>
        </div>
    </div>
  )
}

export default About