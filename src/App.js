import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} ></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
