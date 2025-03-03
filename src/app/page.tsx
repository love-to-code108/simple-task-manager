"use client"
import { useState } from "react";


export default function Home() {
  
  const [message,setMessage] = useState("");

  
  const pullFromBackend = () => {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => console.log(err));
  }
  
  
  return (
    <div className=" flex flex-col justify-center items-center text-4xl h-[100vh]">
      <h1>Hello world</h1>
      <h1>{message}</h1>
      <br />
      <button className=" text-sm bg-white text-black px-2 cursor-pointer " onClick={pullFromBackend}>Click to check if backend is working or not</button>
    </div>
  );
}
