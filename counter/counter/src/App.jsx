import {useState} from 'react' // responsible for state change
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    
    //counter += 1;
    setCounter(counter + 1);

    //if you want to click once and changes for more than 1 time then
    setCounter((counter) => counter+1);
    setCounter((counter) => counter+1);
    setCounter((counter) => counter+1);
    //now it will change with 4 times
  }

  const removeValue = () => {
    setCounter(counter-1);
    console.log("clicked", counter);
    
  }
  return (
    <>
      <h1>ZCounter site</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick = {addValue}> Add value </button>

      <button onClick = {removeValue}>remove value</button>
    </>
  )
}

export default App
