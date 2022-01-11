import React, {FC, useState, ChangeEvent} from 'react';

const TodoInput:FC = () =>{
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todo, setTodo] = useState<(string|number)[]>([]);

    const handleInput = (event: ChangeEvent<HTMLInputElement>) =>{
        if(event.target.name ==="task"){
            setTask(event.target.value);
            // console.log(task);
            // localStorage.setItem("", "chandan");
            let keys = Object.keys(localStorage)
            // i = keys.length;
            // console.log("localstorage", keys)
        }
        else{
            setDeadline(Number(event.target.value));
            // console.log(deadline);
        }
    }

    const handleTodosave = () =>{
      let keys = Object.keys(localStorage);
      if(keys.length === 0){
        todo.push(task);
        todo.push(deadline);
        localStorage.setItem("0", JSON.stringify(todo));
      }
      else{
        let number_array = [];
        for (let i = 0; i<keys.length; i++){
          number_array.push(parseInt(keys[i]));
        }
        let last_ele = Math.max(...number_array)
        // console.log("last_ele", last_ele);
        todo.push(task);
        todo.push(deadline);
        localStorage.setItem((last_ele+1).toString(), JSON.stringify(todo));
        // console.log("keys",keys);
      }
      setTodo([]);
    }

  return (
    <div className="">
      <input type="text" name='task' placeholder='I have to do...' onChange={handleInput} />
      <input type="text" placeholder='Time to complete' onChange={handleInput} />
      <button onClick={handleTodosave}>Add</button>
    </div>
  );
}

export default TodoInput;