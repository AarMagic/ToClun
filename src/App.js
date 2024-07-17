import logo from './logo.svg';
import './App.css';
import { CustomBar } from './components/CustomBar';
import { CardComponent } from './components/CardComponent';
import { useEffect, useState } from 'react';

function App() {
  const [taskList, setTaskListState] = useState([]);

  useEffect(() => {
    let taskListStorage = JSON.parse(localStorage.getItem("taskList"));
    if (taskListStorage !== null) {
      setTaskListState(taskListStorage);
    }
  }, [])

  return (
    <div className="App">
      <CustomBar taskList={taskList} setTaskListState={setTaskListState} />
      <main>
        <section className="cards">
          {taskList.length > 0 && (
            taskList.map((task) => {
              return <CardComponent task={task} key={task.id} />;
            })
          )}
        </section>
      </main>
    </div>
  );
}
export default App;