import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import Input from '../../components/Input_todo/Input';
import Tasks from '../../components/Tasks_todo/Tasks';

export let loader = async () => {
  let arr
  if (localStorage.getItem('todos')) {
    arr = JSON.parse(localStorage.getItem('todos'))
  } else {
    arr = []
  }
  console.log(arr);
  
  return arr
}

const TodoList = () => {
  let arr = useLoaderData()
  const [todos, setTodos] = useState(arr);
  console.log(todos);
  
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodos = [...todos, { text: inputValue.trim(), completed: false }];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const saveEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].text = editValue.trim();
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div className="todo-container">
      <h1>TODO LIST</h1>
      <div className="input-container">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.toUpperCase())}
          placeholder="Создать новую заметку..."
        />
        <button onClick={addTodo} className="create-button">СОЗДАТЬ</button>
      </div>
      <Tasks
        todos={todos}
        toggleComplete={toggleComplete}
        startEditing={startEditing}
        deleteTodo={deleteTodo}
        editIndex={editIndex}
        editValue={editValue}
        setEditValue={setEditValue}
        saveEdit={saveEdit}
      />
    </div>
  );
};

export default TodoList;