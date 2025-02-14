import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Quick Links
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul>
                            <li><a href="#">Bmi Calculator</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Social Media
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul>
                            <li><a href="mailto: velezdaniel616gmail.com">Gmail</a></li>
                            <li><a href="https://github.com/Daniel1000c" target='_blank'>Github</a></li>
                            <li><a href="https://www.linkedin.com/in/daniel-velez-b17748286/" target='_blank'>LinkedIn</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <p>&copy; Bmi Calculator 2024 | All Rights Reserved</p>
        </footer>
    )
}

export default Footer;