import React from "react";
import "./Aventuras.css"
import category1 from "../../images/category-1.jpg"
import category2 from "../../images/category-2.jpg"
import category3 from "../../images/category-3.jpg"
import category4 from "../../images/category-4.jpg"

const Aventura = () =>{
    return(
        <section className="categorias">

            <h1>Ideias para se aventurar</h1>
                <div className="category">
                    <img src={category1} alt="" />
                    <h3>Bungee Jump</h3>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>

                    <button>Leia mais</button>
                </div>

                <div className="category">
                    <img src={category2} alt="" />
                    <h3>Zip lines</h3>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>

                    <button>Leia mais</button>
                </div>

                <div className="category">
                    <img src={category3} alt="" />
                    <h3>Surf</h3>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>

                    <button>Leia mais</button>
                </div>

                <div className="category">
                    <img src={category4} alt="" />
                    <h3>Canoagem</h3>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>

                    <button>leia mais</button>
                </div>
        </section>
    )
}

export default Aventura