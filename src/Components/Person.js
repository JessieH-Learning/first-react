//  Dependencies
import React from 'react';
import PropTypes from 'prop-types';

export const Person = (props) => {
    const { name, email, age, isMarried, friends, } = props;
    return (
        <div>
            <h1> Name: {name}</h1>
            <h1> Email: {email}</h1>
            <h1> Age: {age}</h1>
            <h1> This person {isMarried ? 'is' : 'is not'} Married.</h1>
            {friends.map(val => { return <h1 key={val}>{val}</h1>; })}
        </div>
    );
};

Person.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string),
};