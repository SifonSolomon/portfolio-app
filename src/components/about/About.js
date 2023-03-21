import "./about.css"
import Hands from "../../img/hands.jpg"
const About = () => {
    return (
        <div className = "a">
            <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Hands} alt="" className="a-img"/>
            </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                I am a front-end developer with an understanding to create responsive, user-friendly websiites and applications.
                </p>
                <p className="a-desc">
                The ability to explore a creative outlet that is also productive with code is what led me to front-end development.
                I have a strong understanding of Html, Css, Javascript and Open Source. I also have experience in React and Vue. 
                </p>
            </div>

        </div>
    )
}

export default About