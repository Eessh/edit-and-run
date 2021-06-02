import React from 'react';

import './OutputConsole.css'

function OutputConsole(props) {
    return (
        <div className="output-console-wrapper">
            <span className="output-text">Output</span>
            <div className="output-textarea-wrapper">
                <textarea className="output-textarea" value={props.output} readOnly={true}></textarea>
            </div>
        </div>
    );
}

export default OutputConsole;