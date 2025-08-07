import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/** React jb data ko tree structure object me daal keinject krti h, to mere waale element ko bhi kregi  */
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

//correct
// const anotherElement = (
//   <a href="https://www.google.com" target="_blank">Visit google</a>
// )

const superHitMovie = "Mahavtar Narsimha"
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Visit Google',

  //like we added a variable in App.jsx and injected in root, similarly we do here using object
  superHitMovie
  /** since, we can't write if..else in the object that's why we can't write if..else in "evaluated expression" */
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
