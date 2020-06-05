import React, { useState, useRef, useCallback } from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoboothMenu from './PhotoboothMenu';
import TakePicture from './TakePicture';
import BackgroundPicker from './BackgroundPicker';
import PhotoboothResult from './PhotoboothResult';
import zooBg from './images/zooBg.jpg';
import gorrilaBg from './images/gorrilaBg.jpg';
import antBg from './images/antBg.jpg';
import museumBg from './images/museumBg.jpg';
import trexBg from './images/trexBg.jpg';
import polarbearBg from './images/polarbearBg.jpg';
import './styles/photobooth.css';

function Photobooth() {
    const [inMenu, setInMenu] = useState(true);
    const [takingPicture, setTakingPicture] = useState(false);
    const [inBackgroundPicker, setInBackgroundPicker] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const [bgImages] = useState([zooBg, gorrilaBg, antBg, museumBg, trexBg, polarbearBg]);
    const [pickedBgImage, setPickedBgImage] = useState('');
    const [inResultPage, setInResultPage] = useState(false);

    function handleTakeAPictureButton() {
        setTakingPicture(true);
        setInMenu(false);
    }

    function handleNextButton() {
        setTakingPicture(false);
        setInBackgroundPicker(true);
    }

    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        setImageSrc(webcamRef.current.getScreenshot());
        },
        [webcamRef]
    );

    function retryCapture() {
        setImageSrc('');
    }

    function pickBgImage(event) {
        setPickedBgImage(bgImages[event.target.id]);
        setInResultPage(true);
        setInBackgroundPicker(false);
    }
    
    function handleOnImageUpload(imageList) {
        setImageSrc(imageList[0].dataURL);
        setInBackgroundPicker(true);
        setInMenu(false);
    }

    return (
        <div>
            <Header pageName="extras" />
            <div className="photobooth-container">
                {inMenu ? <PhotoboothMenu takeAPicture={handleTakeAPictureButton} onChange={handleOnImageUpload} /> : (
                    takingPicture ? <TakePicture next={handleNextButton} image={imageSrc} capture={capture} webcamRef={webcamRef} imageSrc={imageSrc} retry={retryCapture} /> : (
                        (inBackgroundPicker && imageSrc !== "") ? <BackgroundPicker bgImages={bgImages} pick={pickBgImage} /> : (
                            inResultPage && <PhotoboothResult image={imageSrc} bg={pickedBgImage} />
                        )
                    )
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Photobooth;