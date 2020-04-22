import React from "react";
import SlickCarousel from "./SlickCarousel";

function Exhibits(props) {

    return (
        <div className="exhibits d-flex justify-content-center align-items-center flex-column">
            <h3>Zone</h3>
            <SlickCarousel />
        </div>
    );
}

export default Exhibits;