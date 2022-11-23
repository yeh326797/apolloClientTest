import React from 'react';
import './App.css';
import { useGetLocationsQuery } from "./App.graphql.generated"

function App() {

  const { loading, error, data } = useGetLocationsQuery();

  console.log(data?.locations[0].id);

  const id = data?.locations[0].id

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div>{data?.locations[0].id}</div>
          <div>{data?.locations[0].name}</div>
          <div>{data?.locations[0].description}</div>
        </p>
      </header>
    </div>
  );
}

export default App;
