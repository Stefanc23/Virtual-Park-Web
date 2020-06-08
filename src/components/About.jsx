import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutZoo from './AboutZoo';
import AboutMuseum from './AboutMuseum';
import './styles/about.css';


function About() {

    return (
        <div>
            <Header pageName={"about"} />
            <div className="row m-0" >
                <div className="col-lg-6 p-0">
                   <AboutZoo />
                </div>
                <div className="col-lg-6 p-0">
                   <AboutMuseum />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;