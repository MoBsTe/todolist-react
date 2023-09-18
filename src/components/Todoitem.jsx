import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
const Todoitem = ({ item, removeTodo, completeTodo, renameTodo }) => {

    // function removeTodo(e) {
    //     const item = e.target;
    //     const todo = item.closest('.todo-row');
    //     todo.remove();
    // };

    return (
        <div className={item.completed ? "todo-row complete" : "todo-row"} id={item.id}>
            {item.text}
            <div className="iconsContainer">
                {/* <button className="important-btn">!</button> */}
                <AiOutlineCheck onClick={() => completeTodo(item.id)} />
                <AiOutlineClose onClick={() => removeTodo(item.id)} />
            </div>
        </div>
    )
}

export default Todoitem;
