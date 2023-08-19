import React from 'react'
import Axios  from 'axios'
import { useState } from 'react';



function App(){
  const [data, setData] =useState("");
  const getdata = () => {
  Axios.get('https://official-joke-api.appspot.com/random_joke').then(
    (response) => {
      setData(response.data.setup)
    }
  );

};

  return (
    <div>
      Data connection:
      <button onClick={getdata}>click here to get data</button>
      {data}
    </div>
  )

  }
export default App
