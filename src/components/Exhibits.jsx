import React, { useState, useEffect } from "react";
import axios from "axios";
import SlickCarousel from "./SlickCarousel";

function Exhibits(props) {
    const [items, setItems] = useState([]);
    const [zone, setZone] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(!loaded) {
            setZone(props.name);
            setItems(props.items);
            setLoaded(true);
        }
    }, [loaded, props.name, props.items])

    function handleOnClick(event) {
        let id = event.target.id;
        axios.get("/api/animals/" + id).catch(err => console.log(err));
    }

    return (
        <div className="exhibits d-flex justify-content-center align-items-center flex-column">
            <h3>{zone}</h3>
            <SlickCarousel items={items} onClick={handleOnClick}/>
        </div>
    );
}

export default Exhibits;