import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

// Create the App component
const App = () => {

  // Declare the tours state variable and setTours function to update it
  const [tours, setTours] = useState(data);
 
  // Define the removeTour function, which takes an id parameter
  function removeTour(id) {
     // Create a new array of tours that does not include the tour with the given id
     const newTours = tours.filter(tour => tour.id !== id);
 
     // Update the tours state variable with the new array of tours
     setTours(newTours);
  }
 
  // Check if the tours array is empty
  if(tours.length === 0) {
     // If it is, return a JSX element with a message and a button to refresh the tours list
     return (
         <div className="refresh">
           <h2>No Tours Left</h2>
           <button className="btn-white" onClick={() => setTours(data)}>
             Refresh
           </button>
         </div>
     );
  }
 
  // If the tours array is not empty, return a JSX element with the Tours component
  return (
     <div className="App">
       <Tours tours={tours} removeTour={removeTour}></Tours>
     </div>
  )
 };

export default App;
