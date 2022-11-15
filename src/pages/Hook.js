import React, { useState } from 'react';
import { Task } from '../Task';

// useState Hook
export const Hook = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }
    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask
        }
        setTodoList([...todoList, task])
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter(task => { return task.id !== id }))
    }
    return (
        <div>
            <div className="addTask">
                <input onChange={handleChange} />
                <button onClick={addTask}>Add task</button>
            </div>
            <div className="list">
                {todoList.map(task => {
                    return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} />
                })}
            </div>
        </div>
    );
}