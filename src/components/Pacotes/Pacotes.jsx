import React from "react";
import pacote1 from "../../images/img-1.jpg";
import pacote2 from "../../images/img-2.jpg";
import pacote3 from "../../images/img-3.jpg";
import pacote4 from "../../images/img-4.jpg";
import pacote5 from "../../images/img-5.jpg";
import pacote6 from "../../images/img-6.jpg";
import "./Pacotes.css"

const Pacotes = () =>{
    return(
        <section className="pacotes" id="pacotes">

        <h1>Pacotes de viagens</h1>

        <div className="pacote">
            <img src={pacote1} alt="" />
            <h2>Pacote</h2>
            <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
            <h3>R$350,00</h3>
            <button>Explorar</button>

        </div>

        <div className="pacote">
            <img src={pacote2} alt="" />
            <h2>Pacote</h2>
            <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
            <h3>R$400,00</h3>
            <button>Explorar</button>

        </div>

        <div className="pacote">
            <img src={pacote3} alt="" />
            <h2>Pacote</h2>
            <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
            <h3>R$120,00</h3>
            <button>Explorar</button>

        </div>


        <div className="pacote">
            <img src={pacote4} alt="" />
            <h2>Pacote</h2>
            <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
            <h3>R$200,00</h3>
            <button>Explorar</button>
        </div>

        <div className="pacote">
            <img src={pacote5} alt="" />
            <h2>Pacote</h2>
            <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
            <h3>R$375,00</h3>
            <button>Explorar</button>

        </div>

        <div className="pacote">
            <img src={pacote6} alt="" />
            <h2>Pacote</h2>
            <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
            <h3>R$578,00</h3>
            <button>Explorar</button>

        </div>




        </section>
    )
}

export default Pacotes