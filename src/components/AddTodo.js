import { useState } from "react"

export function AddTodo(props) {
  const [currentTodo, setTodo] = useState('');

  const updateTodo = (event) => setTodo(event.target.value);

  const processTodo = () => {
    props.addTodo({ name: currentTodo, id: Date.now()});
    setTodo('');
  }

  return(
    <div>
      <input placeholder="Add todo here" value={currentTodo} onChange={updateTodo}></input>
      <button onClick={processTodo}> Add Todo </button>
    </div>
  )
}