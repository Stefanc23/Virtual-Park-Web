import React, {useState} from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

function Banner(props) {
    const [banner] = useState(props.banner);

    return(
        <div className="banner-container">
            <img className="banner lazyload" data-src={banner} alt={banner}/>
        </div>
    );
}

export default Banner;