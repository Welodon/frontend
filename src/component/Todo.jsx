import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Todo = () => {
  const [todos,setTodos] = useState([])
  
  useEffect(()=>{
    fetchTodos()
  },[])

  const fetchTodos = async ()=>{
    const res = await axios.get("http://localhost:5000/todos")
    console.log(res.data)
    setTodos(res.data)
  } 

  return (
    <div>
      <h1>Todos</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo)=>{
              return(
                  <tr key={todo.id}>
                    <th>{todo.id}</th>
                    <th>{todo.title}</th>
                  </tr>   
              )
          })
        }
            </tbody>
        
      </table>
    </div>
  )
}

export default Todo
