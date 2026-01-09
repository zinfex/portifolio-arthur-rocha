"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./skill.css";

export default function Skills() {
    const skillsRef = useRef(null);

    
    useEffect(() => {
        // 2) Registrar plugin do ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
    
        // 3) Animação de entrada
        gsap.fromTo(
          skillsRef.current,
          { opacity: 0, y: 50 }, // estado inicial
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: skillsRef.current, // elemento que dispara
              start: "top 80%",          // quando o topo dele chegar a 80% da tela
           
            },
          }
        );
      }, []);

    return (
        <div className='skills' ref={skillsRef}>
            <i className="devicon-nextjs-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-nodejs-plain-wordmark"></i>
            <i className="devicon-typescript-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-docker-plain-wordmark"></i>
            <i className="devicon-supabase-plain"></i>
            <i className="devicon-mysql-plain-wordmark"></i>
            <i className="devicon-mongodb-plain-wordmark"></i>
        </div>
    )
}