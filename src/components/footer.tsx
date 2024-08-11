"use client"
import { useState } from "react"

export default function Footer(){
  let [count,setCount]=useState<number>(0);
const clickHandler = ()=>{
    count++;
    setCount(count);
  }
return( 
    <div className="flex justify-center justify-evenly absolute inset-x-0  bottom-10  ">
<button  onClick={clickHandler} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
 {count} 
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
</div>)
} 


