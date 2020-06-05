import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Exhibits from './Exhibits';
import './styles/animals.css';

function Animals() {
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(!loaded) {
            let zones = [];
            let zonesWithAnimals = [];
            axios.get('/api/zones').then(({data}) => {
                console.log(data);                
                zones = data;
                zones.forEach(zone => {
                    let animals = zone.animals;
                    if(Array.isArray(animals) && animals.length) {
                        console.log(zone);                    
                        zonesWithAnimals.push(zone);
                    }
                });                
                setItems(zonesWithAnimals);
            });
            setLoaded(true);
        }
    }, [loaded, items]);

    return (
        <div>
            <Header pageName={"animals"} />
            <div className="exhibits-container container">
                {items.map(item => (
                    <Exhibits zone={item} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Animals;