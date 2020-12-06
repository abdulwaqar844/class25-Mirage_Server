import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [movies, setMovies] = useState([])
  const addmovie = () => {

    let id = prompt("Enter Movie ID");
    let name = prompt("Enter Movie Name");
    let year = prompt("Enter Movie Year");
if(!id||!name||!year)
return false
    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ id, name, year })
    }).then(res => res.json())
    .then (data=>setMovies(data))
    
  }
  useEffect(() => {     
    fetch("/api/movies")
    .then(res => res.json())
    .then(data => {
      setMovies(data)
    }
    )
  }, [])
  if (!movies.length)
    return <h2>Loading . . . </h2>

  return (
    <div className="App">
      <h2>Movies List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>

          {movies.map((movieObj, ind) => {
            return (<tr key={ind}>
              <td>{movieObj.id}</td>
              <td>{movieObj.name}</td>
              <td>{movieObj.year}</td>
            </tr>

            )
          })}


        </tbody>
      </table>
      <button onClick={addmovie}>ADD Movie</button>
    </div>
  );
}

export default App;
