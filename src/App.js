import logo from './logo.svg';
import './App.css';
import { CustomBar } from './components/CustomBar';
import { CardComponent } from './components/CardComponent';
import { useEffect, useState } from 'react';

function App() {
  const [taskListState, setTaskListState] = useState([]);

  useEffect(() => {    
    let tasks = JSON.parse(localStorage.getItem("taskList"));
      if (tasks !== null) {
        setTaskListState(tasks);
      }
  }, [])

  return (
    <div className="App">
      <CustomBar taskList={taskListState} setTaskListState={setTaskListState} />
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