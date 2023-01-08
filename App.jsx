import React,{useState} from 'react'
import Header from './Header'

let globalID = 0
function Apps() {
  const [task,setTask] = useState('')
  const [todos, setTodos]= useState([])
  function createtodo(event){
    event.preventDefault()
    setTodos(oldTodos =>{
      setTask('')
      return [...oldTodos,{ todo:task , id:globalID++}]
    })
  }
  function deleteItem(itemID){
    setTodos(oldTodos=>oldTodos.filter(item=> item.id!== itemID))
  }
  return <div>
    <h1>Best Ever To-Do list</h1>
    <form onSubmit={createtodo}>
      <input type="text"
      value={task}
      onChange = {event => {
        setTask(event.target.value)
      }} />
      <button type='submit'>Add</button>  
    </form>

    <ul>
      {todos.map(item =>{
        return <div key={item.id}>
          <li>{item.todo}</li>
          <button onClick={()=> deleteItem(item.id)}>Delete</button>

        </div>
      })}
    </ul>
  </div>
}

export default Apps
