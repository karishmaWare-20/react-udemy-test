import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const [customCount, setCustomCount]= useState()
    const increamentHandler = ()=>{
        setCount((prevValue)=> prevValue+1)
    }

    const decreamentHandler = ()=>{
        setCount((prevValue)=> prevValue > 0 ? prevValue-1 : 0)
    }
    return (
        <>
        <div className="min-w-lg bg-white mt-8 rounded-xl border-2 border-gray-600 overflow-hidden flex flex-col items-center">
        <h1 className="text-xl font-bold text-blue-500 mt-4">Counter</h1>
        <h2 className="text-gray-700 mt-4 mb-4">Count is {count}</h2>
        <div className="flex gap-4">
            <button onClick={increamentHandler} className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors text-md">Increase</button>
            <button onClick={decreamentHandler} className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors text-md">Decrease</button>
            <button onClick={()=>{setCount(0)}} className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors text-md">Reset</button>
        </div>
        <div className="flex gap-8 mt-8">
            <input className="border-2 rounded p-2" value={customCount} onChange={(e)=>{setCustomCount(Number(e.target.value))}} type="text"></input>
            <button onClick={()=>{setCount(customCount); setCustomCount(0)}} className="p-2 bg-green-400 text-white rounded-xl hover:bg-green-600 transition-color text-md">Set count to {customCount}</button>
        </div>
        </div>
        </>
    )
}