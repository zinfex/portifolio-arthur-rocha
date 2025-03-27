"use client"; 

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBookReader } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import Image from "next/image";

export default function Experience() {
  // Array local com suas experiências
  const experiences = [
    {
      company: "Pixels - IW Training",
      title: "Curso presencial Fullstack Developer e Mobile Developer",
      years: "Janeiro/2023 - Janeiro/2024",
      icon: <FaBookReader />,
      technologies: ["JavaScript", "React", "Bootstrap", "SQL"], // Outras tecnologias (exemplo)
      image: "/exp1.jpg"
    },
    {
      company: "SpeedCloud - Hospedagem de Servidores",
      title: "Freelancer",
      years: "Março/2024 - Maio/2024",
      icon: <BsPersonWorkspace  />,
      technologies: ["PHP", "Github Actions" , "HTML", "CSS", "NOSQL"], // Outras tecnologias (exemplo)
      image: false
    },
    {
      company: "085 Digital",
      title: "Fullstack Web Junior e Gestor de Automações",
      years: "Março/2024 - Atualmente",
      icon:  <MdOutlineWork />,
      technologies: ["Node", "Next", "React", "Rest API's", "N8N"], // Outras tecnologias (exemplo)
      image: "/exp3.jpg"
    },
  ];

  return (
    <section id="resume" className="pb-5">
      {/* Título da seção */}
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
          </h1>
        </div>
      </div>

      {/* Timeline */}
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {experiences.map((work, i) => {
            const { company, title, years, technologies, icon, image } = work;

            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={years}
                iconStyle={{
                  background: "#224C93",
                  color: "#fff",
                  textAlign: "center",
                }}
                icon={icon}
                key={i}
              >

                {/* Título e empresa */}

                <div className="tracker-box" style={{ display:'flex' }}>

                {image && typeof image === "string" && (
                  <Image src={image} width={200} height={200} className="tracker-image" alt="Experiência" />
                )}


                  <div className="tracker-info">
                    <h3
                      className="vertical-timeline-element-title"
                      style={{ textAlign: "left" }}
                    >
                      {title}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{ textAlign: "left" }}
                    >
                      <span className="company">{company}</span>
                    </h4>

                    {/* Demais tecnologias */}
                    <div style={{ display: 'flex', gap: '5px', textAlign: "left", marginTop: "15px" }}>
                      {technologies.map((tech, index) => (
                        <div className="tecs-track" key={index}>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                
              </VerticalTimelineElement>
            );
          })}

        <VerticalTimelineElement
            iconStyle={{ background: "#224C93", color: "#fff", textAlign: "center" }}
            icon={<GiSandsOfTime />}
          />
   
        </VerticalTimeline>
      </div>
    </section>
  );
}
