import logo from './logo.svg';
import './App.css';
import { CustomBar } from './components/CustomBar';
import { CardComponent } from './components/CardComponent';
import { useEffect, useState } from 'react';

function App() {
  const [taskListState, setTaskListState] = useState([]);
  const [actualThemeState, setActualThemeState] = useState([]);

  const themes = [
    { primary: '#4D0090', secondary: '#01FF71' },
    { primary: '#4d07a1', secondary: '#24f9b6' },
    { primary: '#3e0057', secondary: '#0cf0a7' },
    { primary: '#FFF3FE', secondary: '#6449B7' },
    { primary: '#cfef78', secondary: '#263653' },
    { primary: '#205965', secondary: '#7afcd3' },
    { primary: '#DB7A9C', secondary: '#421A44' },
    { primary: '#5a2883', secondary: '#edffb3' },
    { primary: '#0b3c81', secondary: '#75ef1a' },
    { primary: '#59c355', secondary: '#0e0417' },
    { primary: '#EAEAEA', secondary: '#4A1F43' },
    { primary: '#96f5ec', secondary: '#182348' },
    { primary: '#00569b', secondary: '#fcb9c7' }
  ];
  
  useEffect(() => {
    let theme = JSON.parse(localStorage.getItem("theme"));
    let tasks = JSON.parse(localStorage.getItem("taskList"));
    
    if (theme !== null) {
      setActualThemeState(theme);
  } else {
      setActualThemeState(themes[0]);
  }

    if (tasks !== null) {
      setTaskListState(tasks);
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", actualThemeState.primary)
    document.documentElement.style.setProperty("--secondary", actualThemeState.secondary)
  }, [actualThemeState.primary, actualThemeState.secondary, setActualThemeState])


  return (
    <div className="App">
      <CustomBar taskList={taskListState} setTaskListState={setTaskListState} actualThemeState={actualThemeState} setActualThemeState={setActualThemeState} themes={themes} />
      <main>
        <section className="cards">
          {taskListState.length > 0 && (
            taskListState.map((task) => {
              return <CardComponent key={task.id} task={task} taskList={taskListState} setTaskListState={setTaskListState} />;
            })
          )}
        </section>
      </main>
    </div>
  );
}
export default App;