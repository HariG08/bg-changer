import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("black")

  return (  
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
    <button className='bg-red-500 rounded-lg p-0.5 px-3 text-white'  onClick={()=>{setColor("red")}}>red</button>
    <button className='bg-blue-700 rounded-lg p-0.5 px-3 text-white'  onClick={()=>{setColor("blue")}}>blue</button>
    <button className='bg-green-600 rounded-lg p-0.5 px-3 text-white'  onClick={()=>{setColor("green")}}>green</button>
    <button className='bg-yellow-500 rounded-lg p-0.5 px-3 text-white'  onClick={()=>{setColor("yellow")}}>yellow</button>
    <button className='bg-violet-600 rounded-lg p-0.5 px-3 text-white'  onClick={()=>{setColor("violet")}}>violet</button>
    <button className='bg-pink-500 rounded-lg p-0.5 px-3 text-white'  onClick={()=>{setColor("pink")}}>pink</button>
    <button className='bg-pink-600 rounded-lg p-0.5 px-3 text-white'  onClick={()=>{setColor("lavender")}}>lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App
