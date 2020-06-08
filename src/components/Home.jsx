import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Tour from './Tour';
import VirtualTour from './VirtualTour';
import MustSee from './MustSee';
import ZooFrontImage from './images/Batu Secret Zoo Front.jpg';
import MuseumFrontImage from './images/Museum Satwa Front.jpg';
import ZooLogo from './images/zoo logo.png';
import MuseumLogo from './images/museum logo.png';
import './styles/home.css';

function Home() {
    const [inTour, setInTour] = useState(false);
    const [tour, setTour] = useState('');

    function handleOnClick(event) {
        setInTour(!inTour);
        setTour(event.target.id);
    }

    return (
        <div>
            <Header pageName={"home"} />
            { !inTour ? (
                <div className="row m-0" >
                <div className="col-lg-6 p-0">
                    <Tour target="zoo" img={ZooFrontImage} heading="VIRTUAL ZOO" btn="Start Virtual Zoo Experience " onClick={handleOnClick} />
                </div>
                <div className="col-lg-6 p-0">
                    <Tour target="museum" img={MuseumFrontImage} heading="VIRTUAL MUSEUM" btn="Start Virtual Museum Experience " onClick={handleOnClick} />
                </div>
                </div>
            ) : <VirtualTour tour={tour} onClick={handleOnClick} />}
            <MustSee target="zones" class="must-see d-flex align-items-center flex-column" header="Must See" logo={ZooLogo} />
            <MustSee target="attractions" class="must-see light-section d-flex align-items-center flex-column" header="" logo={MuseumLogo} />
            <Footer />
        </div>
    );
}

export default Home;