import { useState } from 'react';

export const useTodoList = () => {
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

    return { todoList, handleChange, addTask, deleteTask, };
};