import React, { useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { AppContext } from '../App';
import { Task } from '../Task';
import { useTodoList } from '../Hooks/useTodoList';

// useState Hook
export const UseState = () => {
    const { userName, } = useContext(AppContext);
    const { todoList, handleChange, addTask, deleteTask, } = useTodoList();

    return (
        <article className="mx-5">
            <h1> Hi {userName}! </h1>
            <Stack direction="horizontal" gap={3} className="mx-auto">
                <input onChange={handleChange} />
                <Button variant="primary" type="submit" onClick={addTask}> Add task </Button>
            </Stack>
            <div className="list">
                <Stack gap={3} className="mx-auto">
                    {todoList.map(task => {
                        return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} key={task.taskName} />;
                    })}
                </Stack>
            </div>

        </article>
    );
};