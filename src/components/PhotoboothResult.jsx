import React from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';



function PhotoboothResult(props) {
    
    function saveImage(event) {
        event.preventDefault();
        domtoimage.toBlob(document.getElementById('cpimg'), {width: 1000, height: 500})
        .then(function (blob) {
            saveAs(blob, 'virtual-park-photo.png');     
        });
    }

    return (
        <div class="photobooth-result-container">
            <div id="cpimg">
                <img src={props.bg} alt="" className="background"/>
                <div className="overlay"></div>
                <h3 className="text-center">WELCOME TO JATIM PARK 2</h3>
                <img src={props.image} alt="" className="photo"/>
            </div>
            <button className="btn btn-warning" onClick={saveImage}>Save</button>
        </div>
    );
}

export default PhotoboothResult;