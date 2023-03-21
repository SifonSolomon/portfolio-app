import "./intro.css"
import Me from "../../img/me.JPG"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Sifon Solomon</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                </div>
            </div>
            <p className="i-desc">
                I design and implement visually appealing, responsive and interactive user interfaces for websites and applications.
                 </p>
                 </div>
                 </div>
            <div className="i-right">
                <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro