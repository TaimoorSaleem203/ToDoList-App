import ToDoBar from "./components/ToDoBar.jsx"
import ToDoList from "./components/ToDoList.jsx"
import ToDoAdd from "./components/ToDoAdd.jsx"
import { useState } from "react"
import { getLocalStorageToDoData } from "./components/toDoLocalStorage.jsx"

const App = () => {

    const [task, setTask] = useState(()=>getLocalStorageToDoData())
    const [inputValue,setInputValue] = useState("")
    
    return (
        <section className="font-sans min-h-screen mx-auto flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-sm flex flex-col items-center gap-5 relative">
                <ToDoBar />

                <ToDoList task={task} setTask={setTask} inputValue={inputValue} setInputValue={setInputValue}/>

                <ToDoAdd task={task} setTask={setTask} inputValue={inputValue} setInputValue={setInputValue}/>
            </div>

        </section>
    )
}
export default App
