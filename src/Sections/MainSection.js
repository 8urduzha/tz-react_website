import eclipse1 from "../Assets/eclipse1.png"
import eclipse2 from "../Assets/eclipse2.png"
import eclipse3 from "../Assets/eclipse3.png"
import phones from "../Assets/threeIphones.png"
import smileIcon from "../Assets/emoji.svg"
import messageIcon from "../Assets/conversation.svg"

export function MainSection() {
    return(
        <div className="section">
            <div className="container">
                <div className="content-block">
                    <div className="top-part">
                        <h2 className="h2">
                            Caratteristiche e funzionalità
                        </h2>
                        <h3 className="h3">
                            è molto semplice usare Scevoo. <br/> Entri nel ristorante, scansioni il codice QR e sfogli il menu
                        </h3>
                    </div>
                    <div className="middle-part">
                        <div className="steps-block">
                            <div className="step-box">
                                <div className="step-img-block">
                                    <img src={eclipse1} alt="" className="step-img"/>
                                </div>
                                <div className="step-info">
                                    <p className="step-name">Apri</p>
                                    <p className="step-description">
                                        Non è necessario scaricare una app. Scansiona il codice QR con la fotocamera dello smartphone.
                                    </p>
                                </div>
                            </div>
                            <div className="step-box">
                                <div className="step-img-block">
                                    <img src={eclipse2} alt="" className="step-img"/>
                                </div>
                                <div className="step-info">
                                    <p className="step-name">Scegli</p>
                                    <p className="step-description">
                                        Sfoglia comodamente il tuo menu dal tavolo. Nella tua lingua e con le tue preferenze alimentari.
                                    </p>
                                </div>
                            </div>
                            <div className="step-box">
                                <div className="step-img-block">
                                    <img src={eclipse3} alt="" className="step-img"/>
                                </div>
                                <div className="step-info">
                                    <p className="step-name">Invia ordine</p>
                                    <p className="step-description">
                                        Non è necessario scaricare una app. Scansiona il codice QR con la fotocamera dello smartphone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-part">
                        <div className="info-block">
                            <div className="left-block">
                                <img src={phones} alt="" className="phones-img"/>
                            </div>
                            <div className="right-block">
                                <div className="info-grid">
                                    <div className="info-box">
                                        <div className="icon-part">
                                            <img src={smileIcon} alt="" className="emoji"/>
                                        </div>
                                        <div className="text-part">
                                            <p className="box-info-name">
                                                Delivery & <br/>Takeaway
                                            </p>
                                            <p className="box-info-description">
                                                Lorem Ipsum is simply dummy text
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon-part">
                                            <img src={smileIcon} alt="" className="emoji"/>
                                        </div>
                                        <div className="text-part">
                                            <p className="box-info-name">
                                                Il tuo menu<br/>in 5 lingue
                                            </p>
                                            <p className="box-info-description">
                                                Lorem Ipsum is simply dummy text
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon-part">
                                            <img src={messageIcon} alt="" className="emoji"/>
                                        </div>
                                        <div className="text-part">
                                            <p className="box-info-name">
                                                Modifica dei<br/>contenuti
                                            </p>
                                            <p className="box-info-description">
                                                Lorem Ipsum is simply dummy text
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon-part">
                                            <img src={smileIcon} alt="" className="emoji"/>
                                        </div>
                                        <div className="text-part">
                                            <p className="box-info-name">
                                                Utilizzo<br/>smart
                                            </p>
                                            <p className="box-info-description">
                                                Lorem Ipsum is simply dummy text
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon-part">
                                            <img src={smileIcon} alt="" className="emoji"/>
                                        </div>
                                        <div className="text-part">
                                            <p className="box-info-name">
                                                Sistema di<br/>ordinazione
                                            </p>
                                            <p className="box-info-description">
                                                Lorem Ipsum is simply dummy text
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon-part">
                                            <img src={messageIcon} alt="" className="emoji"/>
                                        </div>
                                        <div className="text-part">
                                            <p className="box-info-name">
                                                Qr Code<br/>abbinato
                                            </p>
                                            <p className="box-info-description">
                                                Lorem Ipsum is simply dummy text
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}