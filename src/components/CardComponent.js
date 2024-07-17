import React from 'react'
import { CardControl } from './CardControl'

export const CardComponent = ({ task,  taskList, setTaskListState }) => {
    const { id, title, description } = task;
    return (
        <article className="card">
            <header className="card__header">
                <h2 className="card__titulo">{title}</h2>
                <CardControl taskId={id} taskList={taskList} setTaskListState={setTaskListState} />
            </header>
            <p className="card__descripcion">
                {description}
            </p>
            <button className="card_button">Read More</button>
        </article>
    )
}