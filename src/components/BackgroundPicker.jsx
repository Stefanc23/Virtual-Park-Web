import React from 'react';

function BackgroundPicker(props) {
    const bgImages = props.bgImages;
    
    return(
        <div className="background-picker-container">
            <h4 className="text-center mt-3">Choose your favorite background</h4>
            <div className="row mt-3 d-flex justify-content-center align-items-center">
                <div id="0" className="my-3 bg-picker col-lg-4 col-md-6 text-center" onClick={props.pick}>
                    <img id="0" src={bgImages[0]} alt="" className="w-100 h-100"/>
                </div>
                <div id="1" className="my-3 bg-picker col-lg-4 col-md-6 text-center" onClick={props.pick}>
                    <img id="1" src={bgImages[1]} alt="" className="w-100 h-100"/>
                </div>
                <div id="2" className="my-3 bg-picker col-lg-4 col-md-6 text-center" onClick={props.pick}>
                    <img id="2" src={bgImages[2]} alt="" className="w-100 h-100"/>
                </div>
                <div id="3" className="my-3 bg-picker col-lg-4 col-md-6 text-center" onClick={props.pick}>
                    <img id="3" src={bgImages[3]} alt="" className="w-100 h-100"/>
                </div>
                <div id="4" className="my-3 bg-picker col-lg-4 col-md-6 text-center" onClick={props.pick}>
                    <img id="4" src={bgImages[4]} alt="" className="w-100 h-100"/>
                </div>
                <div id="5" className="my-3 bg-picker col-lg-4 col-md-6 text-center" onClick={props.pick}>
                    <img id="5" src={bgImages[5]} alt="" className="w-100 h-100"/>
                </div>
            </div>
        </div>
    );
}

export default BackgroundPicker;