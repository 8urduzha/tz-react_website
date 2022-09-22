import qr from "../Assets/qr-code.png"
import done from "../Assets/done.svg"
import vase from "../Assets/vase.png"
import cloud from "../Assets/cloud.png"
import woman from "../Assets/woman.png"

export function CircleSection() {
    return (
        <div className="section circle-section">
            <div className="blue-circle">
                <div className="vase">
                    <img src={vase} alt="vase"/>
                </div>

                <div className="cloud">
                    <img src={cloud} alt="cloud"/>
                </div>

                <div className="cloud-xs">
                    <img src={cloud} alt="cloud"/>
                </div>

                <div className="darkBlueCircle">

                </div>

                <div className="woman">
                    <img src={woman} alt="woman"/>
                </div>
            </div>
            <div className="container">
                <div className="content-block">
                    <div className="qr-top-part">
                        <h2 className="h2">
                            Guarda la demo 🚀
                        </h2>
                        <h3 className="h3">
                            Scansiona il QR Code <br/> con lo smartphone
                        </h3>
                    </div>
                    <div className="qr-middle-part">
                        <img src={qr} alt="" className="qr"/>
                        <p className="h3">
                            e vedrai come appare <br/>il nostro menu digitale
                        </p>
                    </div>
                    <div className="qr-bottom-part">
                        <h2 className="h2">
                            Prezzi
                        </h2>
                        <h3 className="h3">
                            Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry
                        </h3>
                    </div>
                    <div className="card">
                        <div className="ul-card">
                            <img src={done} alt="" className="done-img"/>
                            <img src={done} alt="" className="done-img"/>
                            <img src={done} alt="" className="done-img"/>
                            <img src={done} alt="" className="done-img"/>
                            <img src={done} alt="" className="done-img"/>
                            <img src={done} alt="" className="done-img"/>
                        </div>
                        <p className="text4"><span className="price">29,90€</span> /mese<span className="star">*</span>
                        </p>
                        <p className="text5"><span className="star">*</span>Prezzi IVA esclusa. Paghi i primi 3 mesi ora
                            e puoi annullare quando vuoi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}