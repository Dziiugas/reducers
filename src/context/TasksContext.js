import { useContext, useReducer } from "react";
import ToDoReducers from "../reducers/TodoReducers";
import React from "react";
import {newTask,deleteTask, openForm } from '../action/ToDoActions'

const Appcontext = React.createContext(); //context

const initialState ={
    tasks: [
        {
            id:1,
            title:"test task 1",
            description:"test task 1 description"

        },
        {
            id:2,
            title:"test task 2",
            description:"test task 2 description"

        },
        {
            id:3,
            title:"test task 3",
            description:"test task 3 description"

        },
    ],
    isOpen:false
}

const AppProvider = ({children})=>{ //tiekejas
    const [state, dispatch] =useReducer(ToDoReducers, initialState)
    const addTask =(data)=>{
        dispatch(newTask(data))
    }
    const handleForm = (formStatus)=>{
        dispatch(openForm(formStatus))
    }

    const removeTask = (id)=>{
        dispatch(deleteTask(id))
    }
    return(
        <Appcontext.Provider value={{
            ...state,
            addTask,
            handleForm,
            removeTask
        }}>
            {children}
        </Appcontext.Provider>
    )
    
}

export const  useGlobalContext = ()=>{
    return useContext(Appcontext)
}

export {Appcontext,AppProvider}