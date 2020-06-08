import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PinDropIcon from '@material-ui/icons/PinDrop';
import Collapse from '@material-ui/core/Collapse';
import JTPLogo from './images/jtp group.png';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './styles/header.css';

function Header(props) {
    const [extended, setExtended] = useState(false);
    const logo = JTPLogo;
    const wrapperRef = useRef(null);
    const findUsButtonRef = useRef(null);

    useEffect(() => {
        function handleClick(event) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target) && extended) {
            setExtended(false);
          } else if (findUsButtonRef.current.contains(event.target) && !extended) {
              setExtended(true);
          }
        }
        document.addEventListener('mousedown', handleClick);
        return () => {
          document.removeEventListener('mousedown', handleClick);
        };
    });

    function extend() {
        setExtended(true);
    }
    
    function retract() {
        setExtended(false);
    }

    return (
        <header id="header" className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid d-flex">
                    <Link to="/" className="navbar-brand mr-0"><img className="logo" src={logo} alt="jtp icon"/></Link>
                    <ul ref={findUsButtonRef} className="navbar-nav mr-auto">
                        <li><i onMouseOver={extend} style={{cursor: "grab"}}><PinDropIcon />Find Us</i></li>
                    </ul>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-right">
                            <li className="nav-item ml-auto">
                                <Link to="/animals" className={props.pageName === "animals" ? "nav-link active" : "nav-link"}>Animals</Link>
                            </li>
                            <li className="nav-item ml-auto">
                                <Link to="/zones" className={props.pageName === "zones" ? "nav-link active" : "nav-link"}>Zones</Link>
                            </li>
                            <li className="nav-item dropdown ml-auto">
                                <Link className={props.pageName === "extras" ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Extras
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/extras/photobooth" className="dropdown-item">Photo Booth</Link>
                                    <Link to="/extras/quiz" className="dropdown-item">Quiz</Link>
                                </div>
                            </li>
                            <li className="nav-item ml-auto">
                                <Link to="/about" className={props.pageName === "about" ? "nav-link active" : "nav-link"}>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>                
            </nav>
            <Collapse in={extended} timeout="auto">
                <div ref={wrapperRef} className="container" onMouseLeave={retract}>
                    <div className="row">
                        <iframe title="jtp2-location" className="col-lg-9 map-container lazyload" 
                                data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0584174929627!2d112.52742891383767!3d-7.888957494316584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7880d6ffffffff%3A0xf36560f87fd4fd77!2sJawa%20Timur%20Park%202!5e0!3m2!1sen!2sid!4v1585394795182!5m2!1sen!2sid" 
                                width="600" height="300" 
                                allowfullscreen="" aria-hidden="false" 
                                tabindex="0" frameBorder="0" />
                        
                        <div className="col-lg-3 map-info-container">
                            <h5>Our Location: </h5>
                            <br />
                            <p>Jl. Oro-Oro Ombo No.9></p>
                            <p>Temas, Kec. Batu, Kota Batu, Jawa Timur, 65315</p>
                            <p>(0341) 5025777</p>
                            <br />
                            <h5>Open Hours: </h5>
                            <br />
                            <p>8:30AM - 4:30PM</p>
                        </div>
                    </div>
                </div>
            </Collapse>
        </header>
    );
}

export default Header;