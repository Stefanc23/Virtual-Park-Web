import React from 'react';
import Webcam from 'react-webcam';
import AddIcon from '@material-ui/icons/Add';

const videoConstraints = {
    width: 450,
    height: 300,
    facingMode: "user"
};

function TakePicture(props) {

    return (
        <div className="container p-0">
            <p className="text-center">Place your face in front of the camera</p>
            <div className="webcam-placeholder p-0">
                {props.imageSrc !== '' ? 
                    <img src={props.imageSrc} alt="" className="w-100 h-100"/> : 
                    <Webcam
                        audio={false}
                        height={'100%'}
                        ref={props.webcamRef}
                        screenshotFormat="image/jpeg"
                        width={'100%'}
                        videoConstraints={videoConstraints}
                    />
                }
                <button className="btn btn-warning capture-button rounded-circle" onClick={props.capture}><AddIcon fontSize="large"/></button>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <button className="btn btn-warning mx-5 photobooth-buttons" onClick={props.retry}>Retry</button>
                <button className={`btn btn-warning mx-5 photobooth-buttons ${props.imageSrc === "" ? "disabled" : ""}`} onClick={props.imageSrc !== "" && props.next}>Next</button>
            </div>
        </div>
    );
}

export default TakePicture;