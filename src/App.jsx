import { useContext, useEffect } from 'react';
import Header from './components/header/Header';
import AddTaskForm from './components/addTaskForm/AddTaskForm';
import TaskList from './components/taskList/TaskList';
import FilterTabs from './components/filterTabs/FilterTabs';
import { TaskProvider, TaskContext } from './context/TaskContext';
import './styles/themes.css';
import './index.css';

function AppContent() {
  const { theme } = useContext(TaskContext);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="container">
      <Header />
      <AddTaskForm />
      <FilterTabs />
      <TaskList />
    </div>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}
