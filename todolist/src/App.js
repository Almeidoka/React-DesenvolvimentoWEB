import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import FormTodo from './pages/formTodo/FormTodo';



function App() {

  return (
    <div>
        <Header nome ='Gustavo Almeida'/>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' Component={Home}/>
            <Route path='/form-todo' Component={FormTodo}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
