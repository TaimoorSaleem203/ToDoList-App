import { useEffect, useState } from 'react'

const ToDoDate = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return function cleanUp() {
            clearInterval(timer)
        }

    }, [])
    return (
        <div className="flex text-gray-100 drop-shadow-md items-center gap-3 text-lg font-bold">
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>Date: {date.toDateString()}</p>
        </div>
    )
}

export default ToDoDate