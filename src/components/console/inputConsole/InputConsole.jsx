import React from 'react';

import './InputConsole.css'

function InputConsole(props) {
    return (
        <div className="input-console-wrapper">
            <span className="input-text">Input</span>
            <div className="input-textarea-wrapper">
                <textarea
                    className="input-textarea"
                    value={props.input}
                    onChange={props.handleInputChange}
                    placeholder={"Input for the program"}
                ></textarea>
            </div>
        </div>
    );
}

export default InputConsole;