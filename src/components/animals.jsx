import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Exhibits from "./Exhibits";

function Animals() {

    return (
        <div>
            <Header pageName={"animals"} />
            <div className="container">
                <Exhibits />
                <hr className="divider"/>
                <Exhibits />
                <hr className="divider"/>
                <Exhibits />
                <hr className="divider"/>
                <Exhibits />
                <hr className="divider"/>
                <Exhibits />
                <hr className="divider"/>
                <Exhibits />
                <hr className="divider"/>
                <Exhibits />
                <hr className="divider"/>
                <Exhibits />
            </div>
            <Footer />
        </div>
    );
}

export default Animals;