import React, { useState } from 'react'
import { FormComponent } from './FormComponent';
import { Config } from './Config';

export const CustomBar = ({ taskList, setTaskListState, actualThemeState, setActualThemeState, themes }) => {
    const [formState, setFormState] = useState(false);
    const [configState, setConfigState] = useState(false);
    const [activeButton, setActiveButtonState] = useState("");
    const showForm = (e, newState) => {
        setActiveButtonState(newState)
        setFormState(true)
    }

    const showConfig = () => {
        setConfigState(true);
    }

    return (
        <div className="custom-bar">
            {(formState === true && <FormComponent
                setFormState={setFormState}
                activeButton={activeButton}
                setActiveButtonState={setActiveButtonState}
                taskList={taskList}
                setTaskListState={setTaskListState} />)}
            {
                configState === true && <Config
                    actualThemeState={actualThemeState}
                    setActualThemeState={setActualThemeState}
                    setConfigState={setConfigState}
                    themes={themes}
                />
            }
            <div className="bar add-bar" onClick={e => showForm(e, "crear")}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
            </div>
            <div className="bar edit-bar" onClick={showConfig}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path
                        d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
                </svg>
            </div>
        </div>
    )
}