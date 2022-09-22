import arrowImg from "../Assets/arrow.png";
import phoneImg from "../Assets/iphone.png"
import arrowImg2 from "../Assets/arrow-red.png"
export function HeroSection(){
    return(
        <div className="hero-section">
            <div className="white-circle">

            </div>
            <div className="container">
                <div className="content-block">
                    <div className="hero-content">
                        <div className="left-block">
                            <h1 className="h1">
                                La Web App <br/>
                                pensata per la <br/>
                                ristorazione digitale
                            </h1>
                            <p className="hero-description">
                                Per capire le potenzialità della nostra web app
                                la cosa migliore è vedere una demo cliccando sul
                                bottone sottostante.
                            </p>
                            <div className="hero-btn">
                                <a href="#" className="nav-btn-text hero-btn-text">
                                    <strong>Ordina Ora</strong>

                                    <img className="arrowImg2" src={arrowImg2} alt="arrow"/>
                                </a>
                            </div>
                        </div>
                        <div className="right-block">
                            <img src={phoneImg} alt="" className="hero-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}