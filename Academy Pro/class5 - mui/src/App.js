import React, {useState} from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import {createStyles} from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

// hook que possibilita criar um CSS interno
const styles = createStyles(() => ({
  inptText: {
    color: "blue",
    fontSize: 22,
  },
}));

function App() {
  // hook que possibilita a alteração de "nota" de maneira dinâmica
  const [nota, setNota] = useState(null);

  // função que recebe um evento do input e o atribui à nota
  const getNota = (event) => {
    setNota(Number(event.target.value));
  };

  // função que retorna se o aluno foi aprovado ou não
  const myResult = () => {
    if (nota >= 7) {
      return <p>Parabéns, Aprovado com Sucesso!</p>;
    } else if (nota > 0 && nota < 7) {
      return <p>Estude mais, foi Reprovado!</p>;
    } else {
      return <p>Digite sua Nota...</p>;
    }
  };

  return (
    <div>
      {/* exemplo de botão com MUI */}
      <Button 
        variant="contained"
        color="primary"
        endIcon={<DeleteIcon />}
        >Botão
      </Button>

      <br></br>
      <br></br>

      {/* input da nota */}
      <TextField
        id="standard-basic"
        label="Sua Nota"
        onChange={getNota}
        InputProps={{
        className: "inptText",
        }}
      />

      <br></br>
      <br></br>

      {/* card que diz se o aluno foi aprovado ou não */}
      <Card>
        <CardContent>
          <h3>Henrique Santos</h3>
          {myResult()}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;