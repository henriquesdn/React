/* importa o arquivo de estilização */
import "./MeuCard.css"

function MeuCard (props) {
    return (
        <div className="container">
            <h1 className="title">{props.enviandoDados.nome}</h1>
            <p className="paragraph">{props.enviandoDados.profissão}</p>
        </div>
    );
}

/* para que o componente possa ser exportado */
export default MeuCard;