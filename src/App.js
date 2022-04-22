import './App.css';
import { useState , useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
  const [searchfield,setsearchfield] = useState('');
  const [monsters,setmonsters] = useState([]);
  const [filtermonsters,setfiltermonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setmonsters(users) )
  },[])

  useEffect(()=>{
    const newfiltermonster = monsters.filter(
      (monster) => { return monster.name.toLowerCase().includes(searchfield)}
    )
    setfiltermonsters(newfiltermonster)
  },[monsters,searchfield])

  const searchOnchange = (event) => {
    const searchstring = event.target.value.toLowerCase();
    setsearchfield(searchstring);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='search-box' placeholder='Search the Monster!' onChange={searchOnchange} />
      <CardList monsters = { filtermonsters }/>
    </div>
  );
}







export default App;
