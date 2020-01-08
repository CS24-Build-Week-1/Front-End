
import React, { useEffect, useState } from 'react';
import NavBarLogout from '../Nav/NavBarLogout'
// import userContext from '';


import Controls from './Controls';
import Display from './Display';

const Game = props => {
    return (
        <>
        <NavBarLogout {...props} />
        <h1>Game</h1>
        </>
    )
}

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
