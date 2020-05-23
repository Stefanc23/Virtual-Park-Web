import React from 'react';
import ImageUploading from 'react-images-uploading';
import CameraIMG from './images/Camera.png';
import PhotoFileIMG from './images/Photo File.png';

function PhotoboothMenu(props) {

    return (
        <div className="container p-0">
            <h3 className="my-5 text-center">JATIM PARK VIRTUAL PHOTO BOOTH</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-lg-0 my-3 d-flex justify-content-center align-items-center">
                        <div className="pick-photo-box-outer-frame">
                            <div className="pick-photo-box d-flex flex-column justify-content-center align-items-center">
                                <h4 className="text-center">Select Photo from Desktop</h4>
                                <img src={PhotoFileIMG} alt="" className="w-25 my-3"/>
                                <ImageUploading onChange={props.onChange}>
                                    {({ onImageUpload }) => (
                                        <button className="btn btn-warning" onClick={onImageUpload}>Choose</button>
                                    )}
                                </ImageUploading>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 m-lg-0 my-3 d-flex justify-content-center align-items-center">
                        <div className="pick-photo-box-outer-frame">
                            <div className="pick-photo-box d-flex flex-column justify-content-center align-items-center">
                                <h4 className="text-center">Take a Picture</h4>
                                <img src={CameraIMG} alt="" className="w-25 my-3"/>
                                <button className="btn btn-warning" onClick={props.takeAPicture}>Take a Picture</button>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoboothMenu;