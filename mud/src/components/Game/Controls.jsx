import React from 'react';

const Controls = move => {
    return <div className="north-button" onClick={() => move('n')}></div>;
};

export default Controls;
