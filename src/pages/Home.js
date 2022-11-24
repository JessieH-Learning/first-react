//  Dependencies
import React, { useContext } from 'react';

//  Custom modules
import { AppContext } from '../AppContext';

export const Home = () => {
    const { userName, } = useContext(AppContext);
    return (
        <article className="mx-5">
            <h1> Hi {userName} ! This is Home page. </h1>
        </article>
    );
};