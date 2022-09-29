import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import {Card} from "@mui/material";

export default function App() {
  // requisição de API
  const myRequest = {
    method: "GET",
    url: "https://watherapi-com.p.rapidapi.com/sports.json",
    params: {q: "London"},
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "72a328c869msh73832b9b0829d05p15c894jsn7cb8cd43dad6"
    }
  };

  const [games, setGames] = useState([]);

  // useEffect que faz requisição de dados de uma API (requisição = dependência)
  useEffect(() => {
    axios
      // recebe a API myRequest como parâmetro
      .request(myRequest)
      // ação, atribui dados da API à variável "games"
      .then(function (response) {
        setGames(response.data.football);
      })
      // caso ação não seja possível, exibe erro
      .catch(function (error) {
        console.log(error);
      });
  // array de dependência
  }, []);

  return (
    <div className="App">
      <h1>Hello Henrique</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* mapear dados da API */}
      {games.map((row) => <Card className="gameCard">
        <h2>{row.tournament}</h2>
        <h3>{row.match}</h3>
        <h4>{row.stadium}</h4>
        <p>{row.start}</p>
      </Card>)}
    </div>
  );
}
