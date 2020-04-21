import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tour from "./Tour";
import MustSee from "./MustSee";
import ZooFrontImage from "./images/Batu Secret Zoo Front.jpg";
import MuseumFrontImage from "./images/Museum Satwa Front.jpg";
import ZooLogo from "./images/zoo logo.png";
import MuseumLogo from "./images/museum logo.png";

function Home() {
    
    return (
        <div>
            <Header pageName={"home"} />
            <div className="row m-0" >
                <div className="col-lg-6 p-0">
                    <Tour img={ZooFrontImage} heading="VIRTUAL ZOO" btn="Start Virtual Zoo Experience " />
                </div>
                <div className="col-lg-6 p-0">
                    <Tour img={MuseumFrontImage} heading="VIRTUAL MUSEUM" btn="Start Virtual Museum Experience " />
                </div>
            </div>
            <MustSee class="must-see d-flex align-items-center flex-column" header="Must See" logo={ZooLogo} />
            <MustSee class="must-see light-section d-flex align-items-center flex-column" header="" logo={MuseumLogo} />
            <Footer />
        </div>
    );
}

export default Home;