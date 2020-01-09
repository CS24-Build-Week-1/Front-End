import React from 'react';

const Room = ({ room }) => {
    return (
        <div className='gridsquare'>
            <div className='room'>{room.id}</div>
            {room.e_to && <div className='east-door'>{room.e_to}</div>}
            {room.s_to && <div className='south-door'>{room.s_to}</div>}
            {/* <p>id: {room.id}</p>
            <p>title: {room.title}</p>
            <p>pos_x: {room.pos_x}</p>
            <p>pos_y: {room.pos_y}</p>
            <p>n_to: {room.n_to}</p>
            <p>s_to: {room.s_to}</p>
            <p>e_to: {room.e_to}</p>
            <p>w_to: {room.w_to}</p> */}
        </div>
    );
};

export default Room;
