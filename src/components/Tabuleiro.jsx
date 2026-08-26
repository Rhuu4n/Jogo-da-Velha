import Square from "./Square";

export default function Tabuleiro({vez, quadrados, Jogo}) {
    
  return (
    <>
      <div>
        <Square id = "1" vez = {vez} quadrados = {quadrados} Jogo= {Jogo}/>
      </div>

      <div>
        <Square id = "2" vez = {vez} quadrados = {quadrados} Jogo= {Jogo}/>
      </div>

      <div>
        <Square id = "3" vez = {vez} quadrados = {quadrados} Jogo= {Jogo}/>
      </div>
    </>
  );
}