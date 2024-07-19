import React from 'react'

const Task = ({ task, onDelete, onToggleDone }) => {
    return (
        <li>
            <span onClick={onToggleDone}
                style={{ textDecoration: task.done ? "line-through" : "none" }}
            >{task.text}</span>
            <button onClick={onDelete}>remover</button>
        </li>
    )
}

export default Task