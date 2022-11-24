//  Dependencies
import React, { useState, useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';

//  Custom modules
import { AppContext } from '../AppContext';

export const ChangeName = () => {
    const { setUserName, } = useContext(AppContext);
    const [newUserName, setNewUserName] = useState('');

    const handleChange = (event) => { setNewUserName(event.target.value); };
    const changeName = () => {
        setUserName(newUserName);
        document.getElementById('taskInput').value = '';
    };

    return (
        <Stack direction="horizontal" gap={3} className="mt-5 mb-5">
            <input type="text" id="taskInput" placeholder="Type your name." onChange={handleChange} />
            <Button variant="primary" type="submit" onClick={changeName}> Change Name </Button>
        </Stack>
    );
};