import React from 'react'
import './Footer.css'

export default function Footer() {
    return (

        <footer className="foot footer">
            <div className="social">
                <h4>Social media:</h4>
                <div className="social_ico">
                    <a href="."><i className="bi bi-facebook"></i></a>
                    <a href="."><i className="bi bi-twitter"></i></a>
                    <a href="."><i className="bi bi-instagram"></i></a>
                    <a href="."><i className="bi bi-youtube"></i></a>
                </div>
            </div>
            <div className="contact">
            <h4>Contact details:</h4>
            <p>Swagata Bhawan, 2 <sub>nd</sub> floor<br/>Beside Bank of Baroda, Canning, 24 pgs.(s) <br/>Contact:
                9734374873 <br/>Email:
                wb.s24prg.01.@edureka.center</p>
        </div>
        </footer>

    )
}
