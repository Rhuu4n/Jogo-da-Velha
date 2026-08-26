
export default function Square({vez, quadrados, Jogo}) {    

  return (
    <div className="jogo">
      <button id="1" className="square" onClick={(e) => Jogo(e)}>{quadrados[0]}</button>
      <button id="2" className="square" onClick={(e) => Jogo(e)}>{quadrados[1]}</button>
      <button id="3" className="square" onClick={(e) => Jogo(e)}>{quadrados[2]}</button>
      <button id="4" className="square" onClick={(e) => Jogo(e)}>{quadrados[3]}</button>
      <button id="5" className="square" onClick={(e) => Jogo(e)}>{quadrados[4]}</button>
      <button id="6" className="square" onClick={(e) => Jogo(e)}>{quadrados[5]}</button>
      <button id="7" className="square" onClick={(e) => Jogo(e)}>{quadrados[6]}</button>
      <button id="8" className="square" onClick={(e) => Jogo(e)}>{quadrados[7]}</button>
      <button id="9" className="square" onClick={(e) => Jogo(e)}>{quadrados[8]}</button>
    </div>
  );
}

