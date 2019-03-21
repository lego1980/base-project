import React, { Component } from 'react';
import styels from './OverlayGridComponent.css';

export const OverlayGridCheckBox = (props) => {
    return(
        <input type="checkbox" className={"OverlayGridCheckBox"} />
    )
}

export const OverlayRowsGrid = (props) => {
    return(
        <div className={"OverlayRowsGrid"}>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
        </div>
    )
}

export const OverlayColumnsGrid = (props) => {
    return(
        <div className={"OverlayColumnsGrid"}>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
        </div>
    )
}