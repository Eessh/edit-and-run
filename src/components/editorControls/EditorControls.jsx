import React from 'react';
import Dropdown from "../dropdown/Dropdown";
import FontModifier from "../fontModifier/FontModifier";
import { editorDefaults, dropdownDefaultsGen, languagesDropdownList, themesDropdownList } from "../../assets/data/Data";

import './EditorControls.css'

function EditorControls(props) {
    return (
        <div className="editor-controls-wrapper" id={props.className}>
            <div className="editor-controls-mode">
                <Dropdown
                    defaultValue={dropdownDefaultsGen((editorDefaults.mode))}
                    dropdownList={languagesDropdownList}
                    getSelectedItemIndex={props.getSelectedLanguage}
                />
            </div>

            <div className="editor-controls-theme">
                <Dropdown
                    defaultValue={dropdownDefaultsGen(editorDefaults.theme)}
                    dropdownList={themesDropdownList}
                    getSelectedItemIndex={props.getSelectedTheme}
                />
            </div>

            <div className="editor-controls-fontsize">
                <FontModifier
                    type={"increment"}
                    fontModifierFunction={props.increaseFontSize}
                />
                <FontModifier
                    type={"decrement"}
                    fontModifierFunction={props.decreaseFontSize}
                />
            </div>
        </div>
    );
}

export default EditorControls;