import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    //useState's
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setenteredDate] = useState("");

    //Handlers
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    };

    const submitHandler = (event) => {
    // previne o reload do navegador
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enteredDate),
        };
    
    // envia o payload como parâmetro para a função em NewExpense
    props.onSaveExpenseData(expenseData);

    // limpam o formulário após o envio
    setEnteredTitle("");
    setEnteredAmount("");
    setenteredDate("");
    };

    // VARIAVEIS VAZIAS SETADAS COMO VALOR DOS INPUTS
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Descrição</label>
                    < input 
                    type="text" 
                    value={enteredTitle}
                    onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Valor</label>
                    <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Data</label>
                    <input
                    type="date"
                    min="2000-01-01"
                    max="2022-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                    />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Adicionar Despesa</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
