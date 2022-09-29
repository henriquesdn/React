import "./App.css";
import MeuCard from "./components/MeuCard";

function App() {
  const dados = [
    {
    nome: "Henrique",
    profissão: "Programador",
    },

    {
      nome: "Jamerson",
      profissão: "Engenheiro de Software",
    },

    {
      nome: "Phoon",
      profissão: "thegod",
    },
  ]

  return (
    <div className="App">
      {dados.map((linha) => (<MeuCard enviandoDados={linha}/>))}
    </div>
  );
}

export default App;
