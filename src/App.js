import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAction, removeTaskAction } from './redux/actions';

function App() {
  const taskList = useSelector((state) => state.taskReducer)
  const dispatch = useDispatch();
  const [actualTask, setActualTask] = useState('')

  const handleClick = () => {
    dispatch(addTaskAction(actualTask))
  }

  const removeTask = (index) => {
    dispatch(removeTaskAction(index))
  };

  return (
    <div>
      <div>
        <label>Tarefa</label>
        <input value={ actualTask } onChange={ ({ target: {value} }) => setActualTask(value)}/>
        <button onClick={ handleClick }>Adcionar</button>
      </div>
      <div>
        <ul>
          {taskList.map((task, index) => (
            <div key={ task = index} style={{ display: 'flex'}}>
              <li>{ task }</li>
              <button onClick={() => removeTask(index)}>X</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
