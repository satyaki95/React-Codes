import React, { useState } from 'react'

const NewTodo = (props) => {
    const [todo, setTodo] = useState("");

    const HandelInputChange = (event) => {
            setTodo(event.target.value);
    }

    const handelSubmit = (event) => {
            event.preventDefault();
            props.onTodo(todo);
    }

  return (
    <div>
       <form onSubmit={handelSubmit}>
            <label htmlFor='todo'>New todo :</label>
            <input type= "text" id="todo"name='todo'
             value={todo} 
            onChange={HandelInputChange} ></input>
            
            <button>Add todo</button>
       </form>
    </div>
  )
}

export default NewTodo