import circleAdd from "../assets/circle.png"

const ToDoAdd = ({task,setTask,inputValue,setInputValue}) => {

    const handleAdd = (e) =>{
        e.preventDefault()

        if(!inputValue) return
        if(task.includes(inputValue)){
            setInputValue("")
            return
        }

        setTask(prev=>[...prev,inputValue])
        setInputValue("")
    }

    return (
        <div className="relative w-full active:scale-95 flex items-center justify-center" onClick={handleAdd}>
            <img className="max-w-[60px] absolute bottom-[-10px] shadow-sm rounded-full shadow-black/20 mx-auto left-0 right-0" src={circleAdd} alt="toDoAdd" />
            <i className="absolute bottom-0 text-white cursor-pointer shadow-xl rounded-lg text-3xl ri-add-line"></i>
        </div>
    )
}

export default ToDoAdd