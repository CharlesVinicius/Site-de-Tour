import React from "react";
import image from "../../images/footer-bg.jpg"
import "./Footer.css"

const Footer = () =>{
    return(
        <footer className="footer">

            <div className="socialmedia">
                <h3>Redes sociais</h3>
                <ul>
                    <li><i class="fab fa-instagram"></i> Instagram</li>
                    <li><i class="fab fa-facebook"></i> Facebook</li>
                    <li><i class="fab fa-twitter"></i> Twitter</li>
                </ul>
            </div>

            <div className="linksPrivacy">
                <h3>Outros links</h3>
                <ul>
                    <li>Termos de uso</li>
                    <li>privacidade</li>
                    <li>Coleta de cookies</li>
                </ul>
            </div>

            
        </footer>
    )
}

export default Footer