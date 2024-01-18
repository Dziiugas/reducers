import { useGlobalContext } from "../../context/TasksContext"
import { useState } from "react"
import { useId } from "react";

const AddTask = ()=>{

    const{AddTask, handleForm} = useGlobalContext();
    const id = useId();
    const [newTask, setNewTask] = useState({
        id:id,
        title:'',
        description:''
    })

   const handleChange = (e)=>{
    setNewTask({
        ...newTask,
        [e.target.name]:e.target.value
        
    })
   }
    const submitHandler = (e)=>{
        e.preventDefault();
        AddTask(newTask)
        handleForm(false)
        
    }




    return(
        <form action="" className="form" onSubmit={submitHandler} >
            <div className="form-group">
                <input type="text" placeholder="title" className="form-control" />
            </div>
            <div className="form-group">
                <textarea placeholder="description" className="form-control"></textarea>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onChange={handleChange}>add</button>
            </div>
        </form>
    )
}

export default AddTask