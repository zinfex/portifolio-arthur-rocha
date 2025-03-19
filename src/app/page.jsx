'use client'

import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import Projects from "@/components/Projects/Projects";
import Track from "@/components/Track/Track";
import { PiReadCvLogo } from "react-icons/pi";
import { useState, useEffect } from "react";

export default function Home() {

  const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 5) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 50) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);


	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};


  return (
    <div className="page-content">
      <div className="content-wrapper">
        <div className="homepage-logo-container">
          <div style={logoStyle}>
            <Image src="/picture.png" width={logoSize} height={logoSize} link={false} className="logo" alt="about"/>
          </div>
        </div>

        <div className="homepage-container">
          <div className="homepage-first-area">
            <div className="homepage-first-area-left-side">
              <div className="title homepage-title">
                Desenvolvedor Full-stack web, e gestor de automações.
              </div>
              <div className='subtitle homepage-subtitle'>
                I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
              </div>
            </div>
            <div className="homepage-first-area-right-side">
              <Image src="/avatar.jpg" width={400} height={400} className="homepage-image" alt="about"/>
            </div>
          </div>

          <div className="homepage-cv">
            <a href="/cv_Arthur_Rocha.pdf" download="cv_Arthur_Rocha.pdf" target="_blank">Download CV <PiReadCvLogo size={20}/> </a>
          </div>


          <div className="homepage-socials">
              <a href="https://www.linkedin.com/in/rocha-dev/" target="_blank"><FaLinkedinIn /></a>
              <a href="https://github.com/zinfex" target="_blank"><FaGithub /></a>
              <a href="https://www.instagram.com/arthurochaz/" target="_blank"><FaInstagram /></a>
              <a href="mailto:zinfegr@gmail.com"><MdOutlineEmail size={27}/></a>
          </div>

          
          <hr style={{marginTop: 50}}/>

          <Track />

          <Projects />
        </div>
      </div>
    </div>
  );
}
