import './App.css';
import React, { useState } from 'react';
import useAxios from './hooks/useAxios';
import countryList from 'country-list';

function App() {
  const [nameInput, setNameInput] = useState("")

  const [setUrl, data, loading, setLoading, error] = useAxios()

  function handleOnSubmit(e){
    e.preventDefault()

    setUrl(`https://api.nationalize.io?name=${nameInput}`)
    setLoading(true)
  }

  return (
    <div className="App">
      <h1>Predict The Nationality Based On Name:</h1>
      <form onSubmit={handleOnSubmit}>
        <input 
          type='text'
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {!loading && data &&
        <div>
          <h1>Count: {data.count}</h1>
          <h2>Name: {data.name}</h2>
          {data.country.map((oneCountry) => (
            <h3>{countryList.getName(oneCountry.country_id)}</h3>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
