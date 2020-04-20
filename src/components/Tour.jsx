import React, { useState } from "react";
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';

function Tour(props) {
    const [bgImg] = useState(props.img);
    const headingText = props.heading;
    const btnText = props.btn;    

    return (
        <div className="tour-placeholder container-fluid d-flex flex-column align-items-center justify-content-center" 
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${bgImg}")`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                opacity: "0.8"
            }}>
            <h1>{headingText}</h1>
            <button type="button" className="btn btn-lg btn-warning start-tour-button">{btnText}<PlayCircleOutlineRoundedIcon fontSize="large" /></button>  
        </div>
    );
}

export default Tour;