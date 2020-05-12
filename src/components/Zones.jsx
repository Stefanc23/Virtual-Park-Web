import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SecretZoo from "./images/Secret Zoo.jpg";
import MuseumSatwa from "./images/Museum Satwa.jpg";
import Entrance from "./images/entrance.png";
import Aquarium from "./images/aquarium.png";
import ReptileGarden from "./images/reptile-garden.png";
import Nocturnal from "./images/nocturnal.png";
import LemurKingdom from "./images/lemur-kingdom.png";
import Savannah from "./images/savannah.png";
import TigerLand from "./images/tiger-land.png";
import MonkeyIsland from "./images/monkey-island.png";
import SangkarRaksasa from "./images/sangkar-raksasa.png";
import Insectarium from "./images/insectarium.png";
import Mayapada from "./images/mayapada.png";
import PolarBear from "./images/polar-bear.png";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

function Zones() {

    return (
        <div>
            <Header pageName={"zones"} />
            <div className="zones-container">
                <div className="row">
                    <div className="col-md-8 p-0">
                        <img src={SecretZoo} alt="secret zoo map" className="w-100 lazyload"/>
                        <div className="entrance zone-img-container">
                            <img src={Entrance} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                        <div className="aquarium zone-img-container">
                            <img src={Aquarium} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                        <div className="reptile-garden zone-img-container">
                            <img src={ReptileGarden} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                        <div className="nocturnal zone-img-container">
                            <img src={Nocturnal} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                        <div className="lemur-kingdom zone-img-container">
                            <img src={LemurKingdom} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                        <div className="savannah zone-img-container">
                            <img src={Savannah} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                        <div className="tiger-land zone-img-container">
                            <img src={TigerLand} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                        <div className="monkey-island zone-img-container">
                            <img src={MonkeyIsland} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <img src={MuseumSatwa} alt="museum satwa map" className="w-100 lazyload"/>
                        <div className="sangkar-raksasa zone-img-container">
                            <img src={SangkarRaksasa} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                        <div className="insectarium zone-img-container">
                            <img src={Insectarium} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                        <div className="mayapada zone-img-container">
                            <img src={Mayapada} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                        <div className="polar-bear zone-img-container">
                            <img src={PolarBear} alt="secret zoo map" className="w-100 lazyload"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Zones;