// create your App component here
import React, {useEffect, useState} from 'react'
const API_url = "https://dog.ceo/api/breeds/image/random"

function App() {
  const [image, setImage] = useState(null)

  useEffect(()=>{
    fetch (API_url)
    .then((response) => response.json())
    // .then(data => console.log(data))
    .then(data => setImage(data.message)) 
  },[])

  if(!image){
    
    return <p>Loading...</p>
  }
  return (
    <div>
      <p>Here's a lovely dog for you:</p>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}

export default App

