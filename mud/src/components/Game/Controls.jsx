import React from 'react';

const Controls = move => {
    return <div className="control-panel">
        <button className="control-button">N</button>
        <button className="control-button">S</button>
        <button className="control-button">E</button>
        <button className="control-button">W</button>
        {/* pickup */}
        <button className="control-button">P</button>
        {/* drop */}
        <button className="control-button">D</button>
        {/* use */}
        <button className="control-button">U</button>
    </div>;
};

export default Controls;
