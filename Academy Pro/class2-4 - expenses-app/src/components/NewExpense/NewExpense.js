import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    // função que irá receber o payload como parâmetro em ExpenseForm e gerar um id aleatório para ele
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            {/* passando função como props para ExpenseForm */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;