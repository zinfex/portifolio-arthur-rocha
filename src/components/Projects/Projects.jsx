"use client";

import "./projects.css";
import { IoIosLink } from "react-icons/io";
import { useEffect, useRef } from "react";
//stacks:
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const titleRef2 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef2.current, // elemento que dispara
          start: "top 80%", // quando chegar a 80% da tela
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const projects = [
    {
      title: "Askwise",
      description: "Criador de formulários inovador, simples e prático",
      stacks: [<FaReact size={20} />, <IoLogoJavascript size={20} />],
      link: "https://github.com/zinfex/Askwise",
    },
    {
      title: "StatusHook",
      stacks: [
        <FaReact size={20} />,
        <SiTypescript size={20} />,
        <RiNodejsFill size={20} />,
      ],
      description: "Painel de monitoramento e gestão de automações",
      link: "https://github.com/zinfex/statushook-opensource",
    },
    {
      title: "BYD Site",
      stacks: [
        <RiNextjsFill size={20} />,
        <SiTypescript size={20} />,
        <RiTailwindCssFill size={20} />,
      ],
      description: "Criei uma nova versão do site da marca de carros BYD",
      link: "https://github.com/zinfex/BYD-NewSite",
    },
  ];

  return (
    <div className="homepage-projects" id="projetos">
      <div
        className="title-track title-track-projects"
        style={{ marginBottom: 0 }}
        ref={titleRef2}
      >
        Projetos
      </div>

      <div className="all-projects-container">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="project-container"
              onClick={() => window.open(project.link, "_blank")}
            >
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "space-between",
                }}
              >
                <a
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 5 }}
                >
                  <IoIosLink /> Ver Projeto
                </a>
                <div className="project-stacks">
                  {project.stacks.map((stackIcon, i) => (
                    <span
                      key={i}
                      style={{
                        marginRight: 8,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "6px",
                        borderRadius: "8px",
                        background: "rgba(34, 76, 147, 0.05)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {stackIcon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="all-projects-container-mobile">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project, index) => {
            return (
              <SwiperSlide>
                <div
                  key={index}
                  className="project-container-mobile"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "space-between",
                    }}
                  >
                    <a
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 5 }}
                    >
                      <IoIosLink /> Ver Projeto
                    </a>
                    <div className="project-stacks">
                      {project.stacks.map((stackIcon, i) => (
                        <span
                          key={i}
                          style={{
                            marginRight: 8,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "6px",
                            borderRadius: "8px",
                            background: "rgba(34, 76, 147, 0.05)",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {stackIcon}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
