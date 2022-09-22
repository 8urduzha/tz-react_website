import fb from "../Assets/fb.svg"
import inst from "../Assets/insta.svg"
import footerLogo from "../Assets/car.png"

export function FooterSection () {
    return (
        <div className="section footer-section">
            <div className="container">
                <div className="content-block">
                    <div className="footer-block">
                        <div className="left-part">
                            <img src={fb} alt="" className="fb-logo"/>
                            <img src={inst} alt="" className="inst-logo"/>
                        </div>
                        <div className="middle-part">
                            <img src={footerLogo} alt="" className="footer-logo"/>
                        </div>
                        <div className="right-part">
                            <a href="" className="rules"><strong>Termini e condizioni</strong></a>
                            <a href="" className="rules"><strong>Privacy Policy</strong></a>
                            <a href="" className="rules"><strong>Cookie Policy</strong> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}