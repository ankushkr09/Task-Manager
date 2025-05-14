import { createContext, useState, useMemo, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('ALL');
  const [theme, setTheme] = useState('dark');

  const addTask = useCallback((text) => {
    setTasks(prev => [...prev, { id: Date.now(), text, completed: false }]);
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, [setTasks]);

  const toggleTask = useCallback((id) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  }, [setTasks]);

  const value = useMemo(() => ({
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    filter,
    setFilter,
    theme,
    setTheme,
  }), [tasks, addTask, deleteTask, toggleTask, filter, theme]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};
