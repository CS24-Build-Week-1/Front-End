import React, { useEffect, useState } from 'react';
import NavBarLogout from '../Nav/NavBarLogout';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Player from './Player';

// import userContext from '';

import Controls from './Controls';
import Display from './Display';

const Game = props => {
    const [rooms, setRooms] = useState([]);
    const [player, setPlayer] = useState({});

    const move = direction => {
        axiosWithAuth()
            .post(
                'https://team-miracle-deploy.herokuapp.com/api/adv/move',
                { direction })
            .then(res => {
                console.log(res.data);
                console.log('update player position here')
            })
            .catch(console.log);
    }

    useEffect(() => {
        axiosWithAuth()
            .get('https://team-miracle-deploy.herokuapp.com/api/adv/rooms')
            .then(res => {
                setRooms(res.data.rooms);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        console.log('second use effect')
        axiosWithAuth()
            .get('https://team-miracle-deploy.herokuapp.com/api/adv/init')
            .then(res => {
            console.log('successful response')
                setPlayer(res.data);
                console.log('HERE is response from INIT:', res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const sortedRooms = rooms.sort((a, b) => {
        return a.pos_x - b.pos_x;
    });

    console.log('sorted rooms:', sortedRooms);

    return (
        <>
            <NavBarLogout {...props} />
            {/* <h1>Game</h1> */}
            {/* <Player {...props} /> */}
            <div className="display">
            <Display rooms={rooms} />
            <Controls move={move} />
            </div>
        </>
    );
};

// const Game = props => {
//     useEffect(() => {
//         effect;
//         return () => {
//             cleanup;
//         };
//     }, [input]);

//     return (
//         <>
//             <h2>Game</h2>
//             <Controls />
//             <Display />
//         </>
//     );
// };

export default Game;

// GET ROOMS

// move = {
//     direction: "n"
// }

// res = {
//     name,
//     title,
//     description,
//     otherplayers,
//     errmessg
// }
