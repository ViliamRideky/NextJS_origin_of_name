"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation"

export default function Home() {
  const [inputVal, setInputVal] = useState("")
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Enter your name</h1>
          <p className="text-gray-600">Find out your predicted age, gender, and country</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Type your name" 
            value={inputVal} 
            onChange={(e) => setInputVal(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-black"
            required
          />
          
          <button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Predict Data
          </button>
        </form>
      </div>
    </div>
  );
}