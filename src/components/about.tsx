import "../style/hero.css";
import Image from "next/image";
function About(){
    return(
        <div className="header-container">
            <div className="header-boxes-container">
                <div >
                <Image className="profile-picture" src={"/profile picture.jpg"} 
                width={200}
                height={200}
                alt="Profile"/>
                </div>
                <div className="hero-right-div">
                <h1 className="title-hero">About Us</h1>
                    <p className="description-hero">I am suddent of GIAIC Governor Initiative for ARTIFICIAL INTELLIGENCE, WEB 3.0 & METAVERSE</p>             
                </div>
            </div>
        </div>
    )
}
export default About;