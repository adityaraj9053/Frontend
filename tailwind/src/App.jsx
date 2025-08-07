import './App.css'
import Card from './components/card.jsx'
function App() {
  let newProp = {
    name : "Aditya",
    age: 20
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl'>
        Tailwind test
      </h1>
      <Card channel = "lakshya" myProp = {newProp} btnText = "INTELLIGENCE"/> 
      <Card channel = "Vasudev" myProp = {newProp} btnText = "BUDDHIMAAN"/>
       {/* WE can see that 2 images are showing with different channel name */}
    </>
  )
}

export default App
