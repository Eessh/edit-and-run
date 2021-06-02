import React, { useState } from 'react';
import DropdownListItem from "./dropdownListItem/DropdownListItem";

import './Dropdown.css'
import arrowDown from '../../assets/svg/arrow-down.svg'

function Dropdown(props) {
    const [dropdownDefaultValue, setDropdownDefaultValue] = useState(props.defaultValue)
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [arrowUp, setArrowUp] = useState(false)

    const toggleList = () => {
        setArrowUp(!arrowUp)
        setDropdownVisible(!dropdownVisible)
    }
    const toggleListWhenItemSelected = () => {
        setArrowUp(false)
    }

    const getIndex = (index) => {
        setDropdownDefaultValue(props.dropdownList[index].name)
        setDropdownVisible(false)
        console.log("selected item: ", props.dropdownList[index].name)
        props.getSelectedItemIndex(index)
    }

    return (
        <div className="dropdown-wrapper">
            <div className="dropdown-default" onClick={toggleList}>
                <span className="dropdown-default-text">
                    {dropdownDefaultValue}
                </span>
                <span className="arrow-down">
                    <img src={arrowDown} alt="" className="arrow-down-svg" id={arrowUp ? "arrow-up" : ""}/>
                </span>
            </div>

            {dropdownVisible && (
                <div className="dropdown-list">
                    {props.dropdownList.map((item) => {
                        return (
                            <DropdownListItem
                                name={item.name}
                                index={item.index}
                                key={item.index}
                                getIndex={getIndex}
                                selected={item.name === dropdownDefaultValue}
                                toggleListWhenItemSelected={toggleListWhenItemSelected}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    );
}

export default Dropdown;