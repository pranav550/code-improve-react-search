import JSONDATA from './MOCK_DATA.json';
import './App.css';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <input type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
      {JSONDATA.filter(data => {
        if (search == "") {
          return data
        } else if (data.first_name.toLowerCase().includes(search.toLowerCase())) {
          return data
        }
      }).map((data, key) => {
        return <div key={key}>
          <p>{data.first_name}</p>
        </div>
      })}
    </div>
  );
}

export default App;
