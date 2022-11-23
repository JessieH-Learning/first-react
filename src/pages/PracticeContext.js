import React, { useState, useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { AppContext } from '../App';

export const PracticeContext = () => {

    const { userName, setUserName, } = useContext(AppContext);
    const [updated, setUpdated] = useState();

    const handleChange = (event) => { setUpdated(event.target.value); };
    const changeName = () => { setUserName(updated); };

    return (
        <article className="mx-5">
            <h1> Change name practice for Context. </h1>
            {!userName ? '' : <h2> This is {userName}. </h2>}
            <Stack direction="horizontal" gap={3}>
                <input type="text" placeholder="Type your name." onChange={handleChange} />
                <Button variant="primary" type="submit" onClick={changeName}> Change Name </Button>
            </Stack>
        </article>
    );
};