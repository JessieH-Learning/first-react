import React, { useState } from 'react';
import Axios from 'axios';

export const Fetch = () => {
    const [generatedExcuse, setGeneratedExcuse] = useState("");

    const fetchExcuse = async (excuse) => {
        const res = await Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`);
        setGeneratedExcuse(res.data[0].excuse)
    }
    return (
        <div>
            <h1> Generate An Excuse </h1>
            <button onClick={() => fetchExcuse('party')}> Party</button>
            <button onClick={() => fetchExcuse('family')}> Family</button>
            <button onClick={() => fetchExcuse('office')}> Office </button>

            <p>{generatedExcuse}</p>
        </div>
    );
}