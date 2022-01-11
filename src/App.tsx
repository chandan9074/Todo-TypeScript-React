import './App.css';
import React, {FC} from 'react';
import TodoInput from './Components/TodoInput';

const App:FC=()=> {
  return (
    <div className="App">
      <TodoInput />
    </div>
  );
}

export default App;
