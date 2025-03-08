import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='p-10 md:p-24 text-white -mb-40' id='Projects'>
        <h1 className='text-3xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5px'>
            <ProjectCard title="Ecommerce Website" main="this is a ecommerce website created in nextjs and used some component library"/>
            <ProjectCard title="Tic-Tac-Toe" main="this is a tictactoe website created in nextjs and used some component library"/>
            <ProjectCard title="Netflix Clone" main="this is a blogging website created in nextjs and used some component library"/>
        </div>
    </div>
  )
}

export default Projects