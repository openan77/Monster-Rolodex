import './App.css';
import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

class App  extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchfield:''
    }
  }

  searchOnchange = (event)=>{
    const searchstring = event.target.value.toLowerCase();
    this.setState( { searchfield : searchstring} );
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState( {monsters:users} ) )
  };

  render(){

    const {monsters,searchfield} = this.state;
    const {searchOnchange} = this;

    const filtermonster = monsters.filter(
      (monster) => { return monster.name.toLowerCase().includes(searchfield)}
    );

    return (
      <div className="App">
        <SearchBox className='search-box' placeholder='Search the Monster!' onChange={searchOnchange} />
        <CardList monsters = { filtermonster }/>
      </div>
    );
  }

} 



export default App;
