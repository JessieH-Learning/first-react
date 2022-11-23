import React, { useState, useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { AppContext } from '../App';
import { Task } from '../Task';

// useState Hook
export const UseState = () => {
    const { userName, } = useContext(AppContext);
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => { setNewTask(event.target.value); };
    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
        };
        setTodoList([...todoList, task]);
    };

    const deleteTask = (id) => { setTodoList(todoList.filter(task => { return task.id !== id; })); };

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