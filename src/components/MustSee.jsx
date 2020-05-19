import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SlickCarousel from './SlickCarousel';

function MustSee(props) {
    const target = props.target;
    const className = props.class;
    const headerText = props.header;
    const logo = props.logo;
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        if(!loaded) {
            axios.get('/api/' + target).then(({data}) => {
                console.log(data);                
                setItems(data);
            });
            setLoaded(true);
        }
    }, [loaded, target]);

    function handleOnClick(event) {
        let id = event.target.id;   
        axios.get('/api/' + target + '/' + id).then(({data}) => console.log(data)).catch(err => console.log(err));
    }

    return (
        <div className={className}>
            <h1>{headerText}</h1>
            <SlickCarousel items={items} onClick={handleOnClick} target={target}/>
            <img className="logo" src={logo} alt="" />
        </div>
    );
}

export default MustSee;