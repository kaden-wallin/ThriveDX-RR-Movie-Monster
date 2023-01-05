import React, { useState } from "react";
import DisplayIdeas from "./components/displayIdeas";
import IdeasForm from "./components/ideasForm";


function App() {
  const [ideas, setIdeas] = useState([
    "Movie about a guy who gets bit by a radioactive mole rat",
    "Romcom about two developers over Zoom",
    "Horror film where AWS goes down for 24 hours"
  ]);

  const addIdeas = (newIdeas) => {
    setIdeas([... ideas, newIdeas])
  }

  return (
    <main>
      <h1>Welcome, Super Awesome Movie Monster Think Tank!</h1>
      <DisplayIdeas ideas={ideas} />
      <br />
      
      <h1>Submit your ideas down below:</h1>
      <IdeasForm addIdeas={addIdeas} />

    </main>
  );
}

export default App;