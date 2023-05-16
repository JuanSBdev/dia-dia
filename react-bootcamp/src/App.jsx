import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from '../data';

function App() {
   return (
      <div className='App'>
         <SearchBar  onSearch={(characterID) => console.log(characterID)} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
