"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./Exp";
import "./track.css";

export default function Track() {
  // 1) Criar referência
  const titleRef = useRef(null);

  useEffect(() => {
    // 2) Registrar o plugin do ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 3) Definir animação
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current, // elemento que dispara
          start: "top 80%",          // quando chegar a 80% da tela
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="homepage-track">
      <div className="title-track" ref={titleRef}>
        Experiência
      </div>
      <Experience />
    </div>
  );
}
