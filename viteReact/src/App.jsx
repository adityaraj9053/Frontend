import React from 'react';
import Chai from './chai.jsx';

function App() {
// Hoe to write js in react?
  const superHitMovie = "Mahavtar Narsimha"
  /** this {superHitMovie}  expression is called "evaluated expression", not the js, bcoz if we say js then, it means that we can 
   * write "if..else" statement inside this. But we only write final outcome inside this */
  return (
    <>
      <Chai/>
      <h1> SuperHit Movie with most profit in this year is: {superHitMovie} </h1> 

      All of this is printing because of "'<>,</>'" otherwise it will say, jsx must be wrapped 
    </>
  )
}

export default App
