import React from "react";
import servico1 from "../../images/serv-1.png";
import servico2 from "../../images/serv-2.png";
import servico3 from "../../images/serv-3.png";
import servico4 from "../../images/serv-4.png";
import servico5 from "../../images/serv-5.png";
import servico6 from "../../images/serv-6.png";
import "./Oferecemos.css";

const Oferecemos = () =>{
    return(
        <section className="oferecemos" id="pacotes">

        <h1>O que oferecemos</h1>
            <div className="offer">

                <div className="service">
                    <img src={servico1} alt="" />
                    <h2>Guia completo</h2>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                    <button>Leia mais</button>

                </div>

                <div className="service">
                    <img src={servico2} alt="" />
                    <h2>Pacotes customizados</h2>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                    <button>Leia mais</button>

                </div>

                <div className="service">
                    <img src={servico3} alt="" />
                    <h2>Viagens em família</h2>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                    <button>Leia mais</button>

                </div>


                <div className="service">
                    <img src={servico4} alt="" />
                    <h2>Guias de trem</h2>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                    <button>Leia mais</button>
                </div>

                <div className="service">
                    <img src={servico5} alt="" />
                    <h2>Trilhas</h2>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                    <button>Leia mais</button>

                </div>

                <div className="service">
                    <img src={servico6} alt="" />
                    <h2>Pacote aventura</h2>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                    <button>Explorar</button>

                </div>

            </div>

        </section>
    )
}

export default Oferecemos