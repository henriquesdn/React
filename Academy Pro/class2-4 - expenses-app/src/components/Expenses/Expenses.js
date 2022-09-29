import "./Expenses.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {/* mapear array DUMMY_EXPENSES */}
      {props.items.map((expense) => (
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </Card>
  );
};

export default Expenses;
