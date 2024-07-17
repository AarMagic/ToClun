import React, { useEffect, useState } from 'react'
import { SaveLocalStorage } from '../helpers/SaveLocalStorage';

export const FormComponent = ({ setFormState, activeButton, setActiveButtonState, taskList, setTaskListState, taskId }) => {
    const [error, setErrorState] = useState([]);
    const [taskState, setTaskState] = useState({
        id: '',
        title: '',
        description: ''
    });

    useEffect(() => {
        const filterTask = taskList.find(task => task.id === parseInt(taskId));
        if (filterTask !== null) {
            setTaskState(filterTask)
        }
    }, [taskId, taskList])

    const createTask = (e) => {
        e.preventDefault()
        setErrorState([]);
        let target = e.target;
        let idTarget = Date.now()
        let titleTarget = target.title.value
        let descriptionTarget = target.description.value;
        let errores = [];
        if (titleTarget.length <= 0 || titleTarget === null) {
            errores.push("Escriba un titulo valido");
        }

        if (descriptionTarget.length <= 0 || descriptionTarget === null) {
            errores.push("Escriba una descripcion valida");
        }

        if (errores.length > 0) {
            setErrorState(errores);
        } else {
            let newTask = {
                id: idTarget,
                title: titleTarget,
                description: descriptionTarget
            }
            setTaskListState([...taskList, newTask]);

            SaveLocalStorage("taskList", newTask)

            closeForm();
        };
    }
    const editTask = (e) => {
        e.preventDefault();
        const newTaskList = taskList.map(task =>
            task.id === taskState.id ? taskState : task
        );
        setTaskListState(newTaskList);
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
        closeForm();
    };


    const cambiarTexto = (e) => {
        const { name, value } = e.target;
        setTaskState({
            ...taskState,
            [name]: value
        })
    }

    const closeForm = () => {
        setFormState(false);
        setActiveButtonState("");
    }
    return (
        <div className="bg-form" onSubmit={(activeButton === "crear") ? createTask : editTask}>
            <svg onClick={closeForm} className='form-close' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
            <form className='form'>
                <h3>{(activeButton === "crear" ? "Crear" : "Editar")}</h3>

                {error.length > 0 && (
                    error.map((error, index) => (
                        <p className='error' key={index} >{error}</p>
                    ))
                )}

                <label name="title">
                    Titulo:
                    <input type='text'
                        name='title'
                        spellCheck="false"
                        value={taskState?.title}
                        onChange={cambiarTexto}
                    />
                </label>
                <label name="description">
                    Descripcion:
                    <textarea name='description'
                        spellCheck="false"
                        value={taskState?.description}
                        onChange={cambiarTexto} />
                </label>
                <input type='submit'
                    value={(activeButton === "crear" ? "Crear" : "Guardar")} className='button'
                    spellCheck="false" />
            </form>
        </div>
    )
}