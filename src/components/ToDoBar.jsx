import toDoBar from "../assets/ToDoBar.png"

const ToDoBar = () => {
    return (
        <div className="relative w-full flex justify-center">
            <p className="absolute inset-0 text-white flex items-center justify-center tracking-wide font-semibold text-2xl">ToDo List</p>
            <img src={toDoBar} className="w-full rounded-lg shadow-xl" alt="bar" />
        </div>
    )
}

export default ToDoBar