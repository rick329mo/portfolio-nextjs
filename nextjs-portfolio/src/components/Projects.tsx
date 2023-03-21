import React from 'react'
import ProjectTile from './ProjectTile'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-4 py-16'>
            <p className='text-xl tracking-widest uppercase text-red-500'>Projects</p>
            <h2 className='py-4 text-gray-700'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectTile title='Budgeting App' backgroundImg= '/../public/assets/project_img/budgets.png' projectUrl='/budget'/>
                <ProjectTile title='Budgeting App' backgroundImg= '/../public/assets/project_img/budgets.png' projectUrl='/budget'/>
                <ProjectTile title='Budgeting App' backgroundImg= '/../public/assets/project_img/budgets.png' projectUrl='/budget'/>
                <ProjectTile title='Budgeting App' backgroundImg= '/../public/assets/project_img/budgets.png' projectUrl='/budget'/>
            </div>
        </div>

    </div>
  )
}

export default Projects