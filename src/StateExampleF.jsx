import React,{useState} from 'react'

export default function StateExampleF() {
    let [num,setNum] = useState(1)
    function increment (){
        setNum(++num)
    }
    function decrement(){
        setNum(--num)
    }
  return (
    <>
    <h1>functional Component State Example</h1>
    <h2>num = {num}</h2>
    <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
    </>
  )
}
