import React from 'react';
import Room from './Room';

const Display = ({ rooms }) => {
    const world = [
        {
            id: 1,
            name: 'room1',
            description: 'test room',
            n_to: null,
            s_to: 2,
            e_to: null,
            w_to: null
        },
        {
            id: 2,
            name: 'room2',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null
        },
        {
            id: 3,
            name: 'room3',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null
        },
        {
            id: 4,
            name: 'room4',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null
        },
        {
            id: 5,
            name: 'room5',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null
        },
        {
            id: 6,
            name: 'room6',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null
        },
        {
            id: 7,
            name: 'room7',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null
        },
        {
            id: 8,
            name: 'room8',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null
        },
        {
            id: 9,
            name: 'room9',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null
        },
        {
            id: 10,
            name: 'room10',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null
        },
        {
            id: 11,
            name: 'room11',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null
        },
        {
            id: 12,
            name: 'room12',
            description: 'test room',
            n_to: null,
            s_to: null,
            e_to: null,
            w_to: null,
            x: 0,
            y: 0
        }
    ];

    const roomMap = (rooms, width) => {
        let grid = [];
        for (let i = 0; i < width; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                row.push(null);
            }
            grid.push(row);
        }

        rooms.forEach(room => {
            // let roomType = null;
            // if (room.s_to !== null && room.e_to !== null) roomType = room;
            // if (room.s_to !== null && room.e_to === null) roomType = room;
            // if (room.s_to === null && room.e_to !== null) roomType = room;

            try {
                grid[room.y][room.x] = room
            } catch {
                grid[room.pos_y][room.pos_x] = room;
            }
        });
        return grid.flat();
    };

    console.log('roomMap', roomMap(rooms, 20));
    console.log('****', rooms);
    return (
        <div className='gameboard'>
            {roomMap(rooms, 20).map(room => {
                // if (room.s_to !== null) {
                //     return (
                //         <>
                //             <div className='room'></div>
                //             <div className='south-door'></div>
                //         </>
                //     );
                // }
                // return <div className='room'></div>;

                if (room !== null) {
                    return <Room room={room} />;
                } else {
                    return <div className="blank"></div>
                }
            })}
        </div>
    );
};

export default Display;
