import React, { useState, useEffect } from "react";
import axios from "axios";
import SlickCarousel from "./SlickCarousel";

function Exhibits(props) {
    const [items, setItems] = useState([]);
    const [zone] = useState(props.zone);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(!loaded) {
            axios.get("/api/zones/" + zone._id + "/animals").then(({data}) => {
                console.log(data);                
                setItems(data);
            })
            setLoaded(true);
        }
    }, [loaded, zone._id]);

    function handleOnClick(event) {
        let id = event.target.id;
        axios.get("/api/animals/" + id).catch(err => console.log(err));
    }

    return (
        <div className="exhibits d-flex justify-content-center align-items-center flex-column">
            <h3>{zone.name}</h3>
            <SlickCarousel items={items} onClick={handleOnClick} target="animals"/>
        </div>
    );
}

export default Exhibits;