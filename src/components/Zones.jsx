import React from "react";
import Header from './Header';
import Footer from './Footer';
import SecretZoo from './images/Secret Zoo.jpg';
import MuseumSatwa from './images/Museum Satwa.jpg';
import Entrance from './images/entrance.png';
import Aquarium from './images/aquarium.png';
import ReptileGarden from './images/reptile-garden.png';
import Nocturnal from './images/nocturnal.png';
import LemurKingdom from './images/lemur-kingdom.png';
import Savannah from './images/savannah.png';
import TigerLand from './images/tiger-land.png';
import MonkeyIsland from './images/monkey-island.png';
import SafariFarm from './images/safari-farm.png';
import SangkarRaksasa from './images/sangkar-raksasa.png';
import Insectarium from './images/insectarium.png';
import Mayapada from './images/mayapada.png';
import PolarBear from './images/polar-bear.png';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './styles/zones.css';

function Zones() {

    return (
        <div>
            <Header pageName={"zones"} />
            <div className="zones-container">
                <div className="row">
                    <div className="col-md-8 p-0">
                        <div className="map-overlay">
                            <img src={SecretZoo} alt="secret zoo map" className="map w-100 h-100 lazyload"/>
                        </div>
                        <div className="entrance zone-img-container"  data-toggle="modal" data-target="#entranceModal">
                            <img src={Entrance} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="aquarium zone-img-container"  data-toggle="modal" data-target="#aquariumModal">
                            <img src={Aquarium} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="reptile-garden zone-img-container"  data-toggle="modal" data-target="#reptileGardenModal">
                            <img src={ReptileGarden} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="nocturnal zone-img-container"  data-toggle="modal" data-target="#nocturnalModal">
                            <img src={Nocturnal} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="lemur-kingdom zone-img-container"  data-toggle="modal" data-target="#lemurKingdomModal">
                            <img src={LemurKingdom} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="savannah zone-img-container"  data-toggle="modal" data-target="#savannahModal">
                            <img src={Savannah} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="tiger-land zone-img-container"  data-toggle="modal" data-target="#tigerLandModal">
                            <img src={TigerLand} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="monkey-island zone-img-container"  data-toggle="modal" data-target="#monkeyIslandModal">
                            <img src={MonkeyIsland} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="safari-farm zone-img-container"  data-toggle="modal" data-target="#safariFarmModal">
                            <img src={SafariFarm} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div className="map-overlay">
                            <img src={MuseumSatwa} alt="museum satwa map" className="map w-100 h-100 lazyload"/>
                        </div>
                        <div className="sangkar-raksasa museum-img-container"  data-toggle="modal" data-target="#sangkarRaksasaModal">
                            <img src={SangkarRaksasa} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="insectarium museum-img-container"  data-toggle="modal" data-target="#insectariumModal">
                            <img src={Insectarium} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="mayapada museum-img-container"  data-toggle="modal" data-target="#mayapadaModal">
                            <img src={Mayapada} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                        <div className="polar-bear museum-img-container"  data-toggle="modal" data-target="#polarBearModal">
                            <img src={PolarBear} alt="secret zoo map" className="w-100 h-100 lazyload"/>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="entranceModal" tabindex="-1" role="dialog" aria-labelledby="entranceModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Entrance</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={Entrance} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Pintu masuk Batu Secret Zoo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="aquariumModal" tabindex="-1" role="dialog" aria-labelledby="aquariumModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Aquarium</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={Aquarium} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Nikmati indahnya biota laut di aquarium Batu Secret Zoo!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="reptileGardenModal" tabindex="-1" role="dialog" aria-labelledby="reptileGardenModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Reptile Garden</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={ReptileGarden} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Kumpulan reptil seperti ular, buaya, dan jenis-jenis kadal lainnya.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="nocturnalModal" tabindex="-1" role="dialog" aria-labelledby="nocturnalModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Nocturnal</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={Nocturnal} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Tempat bernaung hewan-hewan malam seperti burung hantu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="lemurKingdomModal" tabindex="-1" role="dialog" aria-labelledby="lemurKingdomModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Lemur Kingdom</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={LemurKingdom} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Tempat tinggal bagi lemur-lemur asli Madagascar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="savannahModal" tabindex="-1" role="dialog" aria-labelledby="savannahModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Savannah</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={Savannah} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Eksibisi hewan savannah seperti banteng, lembu, dll.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="tigerLandModal" tabindex="-1" role="dialog" aria-labelledby="tigerLandModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Tiger Land</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={TigerLand} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Tempat tinggal harimau dan singa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="monkeyIslandModal" tabindex="-1" role="dialog" aria-labelledby="monkeyIslandModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Monkey Island</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={MonkeyIsland} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Pulau tempat tinggal segala jenis monyet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="safariFarmModal" tabindex="-1" role="dialog" aria-labelledby="safariFarmModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Safari Farm</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={SafariFarm} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Tempat dimana pengunjung dapat memberi makan satwa sepert gajah dan jerapah.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="sangkarRaksasaModal" tabindex="-1" role="dialog" aria-labelledby="sangkarRaksasaModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Sangkar Raksasa</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={SangkarRaksasa} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Patung berupa sangkar raksasa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="insectariumModal" tabindex="-1" role="dialog" aria-labelledby="insectariumModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Insectarium</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={Insectarium} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Pameran dari berbagai spesies serangga yang telah diawetkan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="mayapadaModal" tabindex="-1" role="dialog" aria-labelledby="mayapadaModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Mayapada Show</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={Mayapada} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Pertunjukan maskot dari Museum Satwa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="polarBearModal" tabindex="-1" role="dialog" aria-labelledby="polarBearModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Polar Bear</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container p-2"><img src={PolarBear} alt="" className="w-100"/></div>
                                <div className="container p-2">
                                    <p>Pameran area kutub berisi beruang kutub, iglo, dll.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Zones;