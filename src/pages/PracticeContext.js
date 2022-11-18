import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

export const PracticeContext = () => {

    const { userName, setUserName, } = useContext(AppContext);
    const [updated, setUpdated] = useState();

    const handleChange = (event) => { setUpdated(event.target.value); };
    const changeName = () => { setUserName(updated); };

    return (
        <div>
            <h1> Change name practice for Context. </h1>
            {!userName ? '' : <h2> This is {userName}. </h2>}
            <input type="text" placeholder="Type your name." onChange={handleChange} />
            <button onClick={changeName}> Change Name </button>
        </div>
    );
};