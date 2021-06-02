import React from 'react';

import './Loader.css'
import cancel from '../../assets/svg/cancel.svg'

function Loader(props) {
    return (
        <div className="loader-wrapper" onClick={props.stopExecution}>
            <span className="loader">
                <img src={cancel} alt="" className="cancel-execution"/>
            </span>
        </div>
    );
}

export default Loader;