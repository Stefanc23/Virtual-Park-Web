import React, { useState } from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

function VirtualTour(props) {
    const [tour] = useState(props.tour);
    const goBack = props.onClick;
    
    return (
        <div class="virtual-tour-container">
            <div class="back-button d-flex justify-content-center align-items-center" onClick={goBack}><ReplyIcon fontSize="large" /><p class="m-0 p-0">go back</p></div>
            { tour === "zoo" ? <iframe title={tour} data-src="https://www.theasys.io/viewer/OYI7zQQBe7ombu6k0stXtIRkH5N5bM" className="lazyload" allowfullscreen="true" frameborder="0" scrolling="no" allow="vr;gyroscope;accelerometer"></iframe> : <iframe title={tour} data-src="https://www.theasys.io/viewer/JLmDst5gJAxSZNaOlVCe3BVbIp7A60" className="lazyload" allowfullscreen="true" frameborder="0" scrolling="no" allow="vr;gyroscope;accelerometer"></iframe>}
        </div>
    );
}

export default VirtualTour;