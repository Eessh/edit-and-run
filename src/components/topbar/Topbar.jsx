import React, { useState } from 'react';
import EditorControls from "../editorControls/EditorControls";
import Loader from "../loader/Loader";

import './Topbar.css'
import logo from '../../assets/svg/logo.svg'
import settings from '../../assets/svg/settings.svg'
import run from "../../assets/svg/run.svg";
import reset from "../../assets/svg/reset.svg";

function Topbar(props) {
    const [editorControlsVisible, setEditorControlsVisible] = useState(false)

    const handleSetitngsClick = () => {
        setEditorControlsVisible(!editorControlsVisible)
    }

    return (
        <div className="topbar-wrapper">
            <div className="logo-wrapper">
                <img src={logo} alt="" className="logo"/>
            </div>
            <div className="controls-wrapper">
                <EditorControls
                    className={editorControlsVisible ? "visible" : ""}
                    getSelectedLanguage={props.getSelectedLanguage}
                    getSelectedTheme={props.getSelectedTheme}
                    increaseFontSize={props.increaseFontSize}
                    decreaseFontSize={props.decreaseFontSize}
                />
            </div>
            <div className="run-reset">
                {props.stillFetching
                    ? (
                        <span className="loading-wrapper">
                            <Loader stopExecution={props.stopExecution}/>
                        </span>
                    )
                    : (
                        <span className="run-button-wrapper" onClick={props.runCode}>
                            <img src={run} alt="" className="run-button"/>
                        </span>
                    )
                }
                <span className="reset-button-wrapper" onClick={props.resetCode}>
                    <img src={reset} alt="" className="reset-button"/>
                </span>
                <div className="settings-wrapper" onClick={handleSetitngsClick} id={editorControlsVisible ? "increaseSettingsBtnZIndex" : ""}>
                    <img src={settings} alt="" className="settings-svg"/>
                </div>
            </div>

        </div>
    );
}

export default Topbar;