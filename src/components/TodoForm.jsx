import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState("");


    const saunaTasks = [
        "Купить веники",
        "Приготовить еду",
        "Взять полотенца",
        "Запастись водой",
        "Уточнить время с друзьями",
    ];

    const data = ['баня', 'баню']
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (data.some(word => input.toLowerCase().includes(word))) {
            const saunaTasksWithLabel = saunaTasks.map(task => `${task}`);
            addTodo(saunaTasksWithLabel);
        } else if (input.trim()) {
            addTodo(input.trim());
        }
    
        setInput("");
    };
    

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="todo-input"
                placeholder="Введите задачу"
            />
            <button type="submit" className="todo-button">Добавить задачу</button>
        </form>
    );
};

export default TodoForm;
