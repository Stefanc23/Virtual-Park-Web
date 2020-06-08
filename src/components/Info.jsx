import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './styles/info.css';

function Info(props) {
    const [item] = useState(props.location.state.item);
    const [target] = useState(props.location.state.target);
    const {name, description, image} = item;     

    return(
        <div>
            <Header />
            <div className="info-container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img data-src={image} alt={name} className="w-100 lazyload"/>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-3 p-lg-0 p-5">
                        <h3 className="text-lg-left text-center">{name}</h3>
                        <p>{description}</p>
                        {target === "animals" ? <p>Zone: {item.zone.name}</p> : null}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Info;