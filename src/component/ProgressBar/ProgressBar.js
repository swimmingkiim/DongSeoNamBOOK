import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ ratio }) => {

    const readBarWidth = {width: ratio + "%"};
    return (
        <div className="ProgressBarWrapper">
            <span>Progress</span>
            <div className="fullBar">
                <div className="readBar" style={readBarWidth}></div>
            </div>
        </div>
    );
}

export default ProgressBar;
