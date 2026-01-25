import { useEffect , useState } from "react"
import mainList from "../assets/mainBar.png"

const ToDoList = ({ task, setTask, inputValue, setInputValue }) => {

    const [done, setDone] = useState(true)

    const handleDelete = (indx) => {
        setTask(task.filter((item, index) => index !== indx))
    }

    const handleDone = (e) => {
        setDone(!done)
        return done ? e.target.className = "line-through" : e.target.className = "no-underline"
    }



    return (
        <div className="relative w-full max-h-full">
            <img src={mainList} className="w-full min-h-[500px] shadow-sm rounded-lg shadow-black/20" alt="bar" />
            <ul className="absolute inset-0 p-5 pt-5 text-lg flex flex-col overflow-y-auto gap-2 font-semibold">

                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="w-full outline-none shadow-md border-b-2 border-[#7B00FF] rounded-lg p-2 mb-2 focus:ring-2 focus:ring-[#A100FF]" placeholder="Write Your ToDo's" />
                <ul className="flex flex-col gap-2">

                    {task.map((item, indx) => {
                        return (
                            <li className="bg-white/70 rounded-lg p-2 flex items-center justify-between shadow-md">
                                <p><span className="font-medium">{indx + 1}. </span>{item}</p>
                                <div className="flex items-center font-semibold gap-3">
                                    <i onClick={(e)=>handleDone(e)} class="ri-check-line cursor-pointer transition-color duration-150 active:scale-95 hover:text-green-700"></i>
                                    <i onClick={() => { handleDelete(indx) }} className="ri-delete-bin-line cursor-pointer transition-color duration-150 active:scale-95 hover:text-red-700"></i>
                                </div>
                            </li>
                        )

                    })}
                </ul>

            </ul>
        </div>
    )
}

export default ToDoList