import React, { useState } from 'react';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

function Tour(props) {
    const [bgImg] = useState(props.img);
    const headingText = props.heading;
    const btnText = props.btn;    
    const startTour = props.onClick;
    const target = props.target;

    return (
        <div className="tour-placeholder container-fluid d-flex flex-column align-items-center justify-content-center p-0">
            <img data-src={bgImg} alt={bgImg} className="lazyload"/>
            <h1>{headingText}</h1>
            <button id={target} type="button" className="btn btn-lg btn-warning start-tour-button" onClick={startTour}>{btnText}<PlayCircleOutlineRoundedIcon fontSize="large" /></button>  
        </div>
    );
}

export default Tour;