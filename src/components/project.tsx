import "../style/hero.css";
import Image from "next/image";
function Project(){
    return(
        <div className="header-container">
            <div className="header-boxes-container">
                <div >
                <Image className="profile-picture" src={"/Resuem builder.jpg"} 
                width={600}
                height={600}
                alt="Profile"/>
                </div>
                <div className="hero-right-div">
                <h1 className="title-hero">Build a Static/Dynamic Resume</h1>
                    <p className="description-hero">In my  first milestone of Q2 i build Static/Dynamic Resume</p>             
                </div>
            </div>
        </div>
    )
}
export default Project;