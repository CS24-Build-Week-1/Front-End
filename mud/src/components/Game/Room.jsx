import React from 'react';

const Room = ({ room, player }) => {
    return (
        <div className='gridsquare'>
            <div
                className={player ? 'player room' : 'room'}
            >{room.id}</div>
            {room.e_to ? <div className='east-door'></div> : null}
            {room.s_to ? <div className='south-door'></div> : null}
        </div>
    );
};

export default Room;
