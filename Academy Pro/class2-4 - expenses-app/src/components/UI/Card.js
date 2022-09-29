import "./Card.css";

const Card = (props) => {
  // a variável recebe a classe card + a(s) classe(s) que podem vir como props na declaração de um Card
  const classes = "card " + props.className;
  // Card é uma div que recebe classes CSS dinamicamente enquanto envolve seus child elements
  return <div className={classes}>{props.children}</div>;
};

export default Card;
