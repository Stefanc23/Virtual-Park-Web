import React, {useState} from "react";

function Banner(props) {
    const [banner] = useState(props.banner);

    return(
        <img className="banner" src={banner} alt={banner} />
    );
}

export default Banner;