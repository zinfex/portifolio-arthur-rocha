'use client'

import "./projects.css";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import { useState } from "react";
//stacks:
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";


export default function Projects() {
  const [projects, setProjects] = useState([
    {
      title: 'Simple Forms',
      description: 'Criador de formulários inovador, simples e prático',
      stacks: '',
      link: 'https://github.com/zinfex/portifolio'
    },
    {
      title: 'TempSync',
      stacks: '',
      description: 'Software de monitoramento de temperatura e umidade',
      link: 'https://github.com/zinfex/portifolio'
    },
    {
      title: 'BYD Site',
      stacks: '',
      description: 'Criei uma nova versão do site da marca de carros BYD',
      link: 'https://github.com/zinfex/portifolio'
    },
  ]);

  return (
    <div className="homepage-projects">
        <div className="all-projects-container">
            {projects.map((project, index) => {
            return (
                <div key={index} className="project-container">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="project-stacks">{project.stacks}</div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: 5}}>
                    <IoIosLink /> Ver Projeto
                    </a>
                </div>
            )
            })}
        </div>
    </div>
  );
}
