import React, { useState, useEffect, Suspense, lazy, useCallback } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import Header from './components/Header';
import Container from './components/Container';

const TodoList = lazy(() => import('./components/TodoList'))
const AddTodo = lazy(() => import('./components/AddTodo'))

function App() {
  const [todos, setTodos] = useState([]);

  console.log("app")
  useEffect(() => {
    // Fetch tasks from mock API
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get("https://6685a08eb3f57b06dd4d5c96.mockapi.io/api/v1/tasks")
        if (data) {
          setTodos(data)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchTasks()
  }, []);

  const addTodo = useCallback((taskTitle) => {
    const newTodo = { id: Date.now(), taskTitle, isDone: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const isDone = useCallback((id, state) => {
    setTodos((prevTodos) => prevTodos.map(todo => todo.id === id ? { ...todo, isDone: state } : todo));
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }, []);

  return (
    <Container>
      <Suspense fallback={<Loader />} >
        <Header />
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} isDone={isDone} remove={removeTodo} />
      </Suspense>
    </Container>
  );
}

export default App;
