import React from 'react';

import './FontModifier.css'
import plus from '../../assets/svg/plus.svg'
import minus from '../../assets/svg/minus.svg'

function FontModifier(props) {
    return (
        <div className="font-modifier-wrapper">
            <div className="modifier-button">
                <img
                    src={props.type === "increment" ? plus : minus}
                    alt={props.type === "increment" ? "increase font size" : "decrease font size"}
                    className="modifier-button-svg"
                    onClick={props.fontModifierFunction}
                />
            </div>
        </div>
    );
}

export default FontModifier;