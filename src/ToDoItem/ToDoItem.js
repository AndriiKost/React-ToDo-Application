import React from 'react';

import './ToDoItem.css';

const todoItem = (props) => {
    return (
        <div className="ToDoItem" onClick={props.click}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default todoItem;