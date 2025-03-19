import Experience from './Exp';
import './track.css'
import Image from "next/image";
export default function Track() {
    return (
        <div className="homepage-track">
            {/* <div className="homepage-first-area-left-side">
                <Image src="/avatar2.jpg" width={400} height={400} className="track-image" alt="about"/>
            </div> */}
                <div className="title-track">Experiência</div>
                <Experience />
        </div>
    )
}