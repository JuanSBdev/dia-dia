import './App.css';
import Cards from './components/Cards.jsx';
// import characters, { Rick } from '../data';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Route, Routes} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
function App() {
   const [characters, setCharacters] = useState([])
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id) {
      setCharacters(
        characters.filter((c) => c.id !== parseInt(id))
      );
    }
      useEffect(()=>{
         console.log(characters)
      }, [characters])
   return (
      <div className='App'>
         <Nav  onSearch={onSearch} />
         <Routes>
            <Route path='/'
                  element={
                     <Cards characters={characters}
                           onClose={ onClose } />
                           } 
                     >
          </Route>
         <Route  path='/abt'
                 element={ <About/> }>
         </Route>
         <Route
                path='/detail/:id' element={ <Detail/> }  >
         </Route>
      </Routes>
      </div>
   );
}

export default App;
