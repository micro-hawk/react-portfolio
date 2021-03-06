import { render } from '@testing-library/react';
import React from 'react';
import "./SkillBar.css";

export default function SkillBar(props) {
    render(
        <div>
            <div className="bars">
                <div className="info">
                    <span>{props.barName}</span>
                    <span>{props.barValue}</span>
                </div>
                <div className="line-bar">
                <meter id={props.barName} value={props.barValue} min="0" max="10"></meter>
                </div>
            </div>
        </div>
    );
}