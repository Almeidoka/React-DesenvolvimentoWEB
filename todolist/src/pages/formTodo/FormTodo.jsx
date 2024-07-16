import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormTodo = () =>{
    const navigate = useNavigate();
    const[todo, setTodo] = useState({key:0, nomeTarefa:'', observacao:''});

    const atualizarValor = (input) =>{
        setTodo({...todo,[input.target.id]:input.target.value})
    }
    const salvar = () =>{
        const todos =JSON.parse(localStorage.getItem("todos")) || [];
        //setTodo({...todo, ['key']:todos.lenght})
        const novoTodo = { ...todo, key: todos.lenght };
        todos.push(novoTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        navigate(-1);
    }

    return(
        <div>
           <h3>Cadastrar nova Tarefa</h3>
           <input type="text" onChange={atualizarValor} value={todo.nomeTarefa}id="nomeTarefa" />
            <input type="text" onChange={atualizarValor} value={todo.observacao} id="observacao"/>
            <button onClick={salvar}>Cadastrar</button>
        </div>
    )

}
export default FormTodo;