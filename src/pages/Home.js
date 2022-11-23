import React, { useContext } from 'react';
import { AppContext } from '../App';

export const Home = () => {
    const { userName, } = useContext(AppContext);
    return (
        <article className="mx-5">
            <h1> Hi {userName} ! This is Home page. </h1>
        </article>
    );
};