import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [isActive, setisActive] = useState(null)

  const faqs = [
    {
      q: "What is React?",
      a: "React is a JavaScript library used for building user interfaces, especially single-page applications."
    },
    {
      q: "What are Components in React?",
      a: "Components are reusable pieces of UI that make up your application. They can be functional or class-based."
    },
    {
      q: "What is JSX?",
      a: "JSX stands for JavaScript XML. It allows you to write HTML-like syntax directly in JavaScript files."
    },
    {
      q: "What is the Virtual DOM?",
      a: "The Virtual DOM is a lightweight copy of the real DOM that React uses to optimize rendering and improve performance."
    },
    {
      q: "What are Props in React?",
      a: "Props (short for properties) are used to pass data from one component to another."
    },
    {
      q: "What is State in React?",
      a: "State is an object that stores dynamic data and controls how the component behaves or renders."
    },
    {
      q: "What are Hooks in React?",
      a: "Hooks are special functions (like useState, useEffect) that allow functional components to use state and other React features."
    },
    {
      q: "What is the difference between Props and State?",
      a: "Props are read-only and passed from parent to child, while State is mutable and managed within a component."
    },
    {
      q: "What is Conditional Rendering in React?",
      a: "Conditional rendering allows you to show or hide elements in the UI based on certain conditions like user role or state."
    },
    {
      q: "What is the use of useEffect Hook?",
      a: "The useEffect Hook is used for side effects — like fetching data, updating the DOM, or setting up subscriptions."
    }
  ];

  function index(i) {
    setisActive((prev) => prev === i ? null : i)
  }
  return (
    <div className='faqs'>
      <h1>FAQS Questions</h1>
      {faqs.map((e, idx) => (
        <div key={idx} className='question'>
          <h3 onClick={() => index(idx)}>{e.q}</h3>
          {
            isActive === idx && <p>{e.a}</p>
          }
        </div>
      ))}
    </div>
  )
}

export default App
