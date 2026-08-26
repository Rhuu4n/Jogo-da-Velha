import './App.css';
import Tabuleiro from './components/Tabuleiro';
import { useState } from 'react';

function App() {
    const [vez, setVez] = useState("X");
    const [quadrados, setQuadrados] = useState([" ", " ", " ", " ", " ", " ", " ", " "]);

    function Jogo(index){
        if (vez == "X"){
            setVez("O");
        } else{
            setVez("X");
        }

        index.target.style.pointerEvents = "none"

        setQuadrados(anterior => {
            const novo = [...anterior];
            novo[index.target.id - 1] = vez;
            return novo;
        });
    };

  return (
    <>
      <h1 className='titulo'>Jogo da velha</h1>

      <div className='container'>
        <Tabuleiro vez = {vez} quadrados = {quadrados} Jogo= {Jogo}/>
      </div>
    </>
  );
}

export default App;
