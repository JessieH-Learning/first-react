import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const linkItem = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'UseState',
            path: '/useState',
        },
        {
            name: 'Fetch',
            path: '/fetch',
        },
        {
            name: 'PracticeContext',
            path: '/practiceContext',
        },
        {
            name: 'ReactQuery',
            path: '/reactQuery',
        }
    ];

    return (
        <div>
            {linkItem.map(val => <Link to={val.path} key={val.path}> {val.name} </Link>)}
        </div >
    );
};