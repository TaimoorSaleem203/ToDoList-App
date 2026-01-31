const toDosKey = "task"

export const getLocalStorageToDoData = () =>{
    const rawToDos = localStorage.getItem(toDosKey)
    if(!rawToDos) return []
    return JSON.parse(rawToDos)
}

export const setLocalStorageToDoData = (task) =>{
    return localStorage.setItem(toDosKey,JSON.stringify(task))
}