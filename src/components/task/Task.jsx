import { useGlobalContext } from "../../context/TasksContext"
const Task = (props)=>{
    const {removeTask} = useGlobalContext()
    return(
        <li className="list-group-item">{props.title} : {props.desc}<button onClick={()=>{removeTask(props.id)}}>salinti</button></li>
    )
}

export default Task