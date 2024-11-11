import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const name = "Shital";
// const first_page = 2016;

// const demo = (
// <div>
//   <h1>Hello World!</h1>
//   <h2>I'm {name}</h2>
//   <h2>I have {2024-first_page} years of building webpages experience</h2>
// </div>)

// const Test = ()=>{
//   return(
//     <div>
//     <h1>Hello Component!</h1>
//     </div>
//   )
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < App/>                                
  </StrictMode>,
)

// Test is component and no need to use curly braces for using it.
// demo is variable so it needs to be inside curly braces when used.

// 