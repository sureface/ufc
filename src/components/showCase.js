import React, {useState} from 'react';
import ufcboxer from "../images/ufc_PNG17.png"

const ShowCase = () => {

    return (
        <div className="showCase">
            <div className="container" >
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="cardX">
                        <div className="ppleufc">
                            <div className="sircle"></div>
                            <img src={ufcboxer} alt="oops sorry for this"/>
                        </div>
                        <h1 className="text-1x2">Maxluq</h1>
                        <h3>FUTURE-READY</h3>
                        <button className="btn">More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;