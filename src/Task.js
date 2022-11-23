import React from 'react';
import { Button, Stack } from 'react-bootstrap';

export const Task = (props) => {
    return <li>{props.taskName} <Button variant="outline-danger" type="submit" size="sm" onClick={() => props.deleteTask(props.id)}>X</Button></li>;
};