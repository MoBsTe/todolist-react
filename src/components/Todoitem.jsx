import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
];

const Todoitem = ({ item, removeTodo, completeTodo }) => {
    const [assignedUser, setAssignedUser] = useState(item.assignedUser || '');

    const handleUserChange = (e) => {
        const userId = e.target.value;
        setAssignedUser(userId);
       
    };

    return (
        <div className={item.completed ? 'todo-row complete' : 'todo-row'} id={item.id}>
            {item.text}
            <div className="iconsContainer">
                <AiOutlineCheck onClick={() => completeTodo(item.id)} />
                <AiOutlineClose onClick={() => removeTodo(item.id)} />
            <div className="userSelect">
                <select value={assignedUser} onChange={handleUserChange}>
                    <option value="">Assign to User</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
            </div>
        </div>
    );
};

export default Todoitem;
