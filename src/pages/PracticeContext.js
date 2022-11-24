//  Dependencies
import React, { useContext } from 'react';

//  Custom modules
import { AppContext } from '../AppContext';
import { ChangeName } from '../Components/ChangeName';

export const PracticeContext = () => {

    const { userName, } = useContext(AppContext);

    return (
        <article className="mx-5">
            <h1> Change name practice for Context. </h1>
            <ChangeName />
            {!userName ? '' : <h2> This is {userName}. </h2>}
        </article>
    );
};