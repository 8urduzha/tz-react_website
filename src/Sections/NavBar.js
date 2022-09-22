import logo from '../Assets/logo.png'
import arrowImg from '../Assets/arrow.png'
export function NavBar() {

    return(
        <div className="nav-bar">
            <div className="nav-container">
                <div className="nav-content-block">
                    <img src={logo} className="logo"/>
                    <div className="nav-block">
                        <div className="nav-items">
                            <a href="" className="nav-item">
                                Caratteristiche e funzionalità
                            </a>
                            <a href="" className="nav-item">
                                Prezzi
                            </a>
                            <a href="" className="nav-item">
                                Guarda la demo
                            </a>
                        </div>
                        <div className="nav-button">
                            <a href="#" className="nav-btn-text">
                                Ordina Ora

                                <img className="arrowImg" src={arrowImg} alt="arrow"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}