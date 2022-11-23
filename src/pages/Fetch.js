import React, { useState, useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { AppContext } from '../App';
import Axios from 'axios';

export const Fetch = () => {
    const [generatedExcuse, setGeneratedExcuse] = useState('');
    const { userName, } = useContext(AppContext);

    const fetchExcuse = async (excuse) => {
        const res = await Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`);
        setGeneratedExcuse(res.data[0].excuse);
    };
    return (
        <article className="mx-5">
            <h1>Hi {userName}! Generate An Excuse </h1>
            <Stack className="mx-auto" direction="horizontal" gap={3}>
                <Button className="mr-2" variant="primary" type="submit" onClick={() => fetchExcuse('party')}> Party</Button>
                <Button variant="primary" type="submit" onClick={() => fetchExcuse('family')}> Family</Button>
                <Button variant="primary" type="submit" onClick={() => fetchExcuse('office')}> Office </Button>
            </Stack>
            <p className="mt-5">{generatedExcuse}</p>
        </article>
    );
};