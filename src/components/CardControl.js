import React, { useState } from 'react'
import { SaveLocalStorage } from '../helpers/SaveLocalStorage';
import { FormComponent } from './FormComponent';

export const CardControl = ({ taskId, taskList, setTaskListState }) => {
    const [form, setFormState] = useState(false);
    const [activeButton, setActiveButtonState] = useState("");

    const deleteTask = () => {
        let newTaskList = taskList.filter(task => task.id !== parseInt(taskId));
        setTaskListState(newTaskList);
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
    }

    const editTask = (e, newState) => {
        setActiveButtonState(newState)
        setFormState(true)
    }

    return (
        <div className="card__icon">
            {(form === true && <FormComponent
                setFormState={setFormState}
                activeButton={activeButton}
                setActiveButtonState={setActiveButtonState}
                taskList={taskList}
                setTaskListState={setTaskListState}
                taskId={taskId} />)}
            <svg onClick={e => editTask(e, "editar")} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="#e8eaed">
                <path
                    d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
            </svg>
            <svg onClick={deleteTask} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="#e8eaed">
                <path
                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
        </div>
    )
}
