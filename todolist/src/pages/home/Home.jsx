import React, { useState, useEffect } from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {

    const chamarForm = () =>{

    }

    // const [valor, setValor] = useState(0);
    // const incrementar=() =>{
    //     setValor(valor+1);
    // }
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        const todosLocal = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(todosLocal);

    },[]);
    return (    
        <div className="Home">
            <h2>Minhas Tarefas</h2>
            <Link to='/form-todo'>
                Nova Tarefa
            </Link>
            {/* <button onClick={incrementar}>Incrementar</button>
            {valor} */}
            <ul>
                {todos.map(todo=>(
                    <li key={todo.key}>{todo.nomeTarefa} - {todo.observacao}</li>
                ))}
            </ul>
        </div>
    );
}
export default Home;