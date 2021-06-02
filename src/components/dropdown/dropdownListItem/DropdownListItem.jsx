import React, { useState } from 'react';

import './DropdownListItem.css'
import check from '../../../assets/svg/check.svg'

function DropdownListItem(props) {
    const [selected, setSelected] = useState(props.selected)

    const handleClickEvent = () => {
        setSelected(true)
        props.toggleListWhenItemSelected()
        props.getIndex(props.index)
    }

    return (
        <div className="dropdown-list-item-wrapper" onClick={handleClickEvent}>
            <span className="item-name">{props.name}</span>
            {selected && (<img src={check} alt="" className="item-checkmark"/>)}
        </div>
    );
}

export default DropdownListItem;