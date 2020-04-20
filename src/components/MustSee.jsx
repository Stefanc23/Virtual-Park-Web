import React from "react";
import SlickCarousel from "./SlickCarousel";

function MustSee(props) {
    const className = props.class;
    const headerText = props.header;
    const logo = props.logo;

    return (
        <div className={className}>
            <h1>{headerText}</h1>
            <SlickCarousel />
            <img className="logo" src={logo} alt="" />
        </div>
    );
}

export default MustSee;