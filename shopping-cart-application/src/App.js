import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element= {<Home/>}/>      
        <Route path='/cart' exact element = {<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
