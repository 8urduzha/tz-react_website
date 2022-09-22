import background from "../Assets/formBg.png"
import arrowImg from "../Assets/arrow.png";

export function FormSection() {
    return (
        <div className="section" style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
                <div className="content-block">
                    <div className="form-top-part">
                        <h2 className="h2">
                            Contattaci
                        </h2>
                        <h3 className="h3">
                            Compila il form sottostante <br/>e richiedi subito il tuo Scevoo
                        </h3>
                    </div>
                    <div className="form-middle-part">
                        <form action="" className="form">
                            <input type="text" className="form-input" placeholder="Nome e cognome"/>
                            <input type="email"className="form-input" placeholder="E-mail *" required/>
                            <input type="tel" className="form-input" placeholder="Telefono"/>
                            <input type="text" className="form-input"  placeholder="Nome dell’attività *" required/>
                            <select name="select" className="form-input" required>
                                <option value="" selected disabled hidden>Tipo di attività *</option>
                                <option value="value1">Value 1</option>
                                <option value="value2">Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                            <input type="text" className="form-input" placeholder="Città"/>
                            <div className="checkWrapper">
                                <input className="checkboxCustom" type="checkbox" name="privacy" required/>
                                <label htmlFor="privacy" className="wrapperLabel"><strong> Accetto <a href="#" className="red-link">Termini e condizioni</a> e <a href="#" className="red-link">Privacy</a></strong></label>
                            </div>
                            <button className="form-button">
                                <a href="#" className="form-btn-text">
                                    Ordina Ora
                                    <img className="arrowImg" src={arrowImg} alt="arrow"/>
                                </a>
                            </button>
                            <div className="form-description">
                                <p className="small-description">
                                    I campi contrassegnati con * sono obbligatori
                                </p>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}