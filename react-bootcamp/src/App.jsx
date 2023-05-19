import './App.css';
import Cards from './components/Cards.jsx';
// import characters, { Rick } from '../data';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Route, Routes, useNavigate} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/form/Form';
function App() {
   const [characters, setCharacters] = useState([])
  
   const [access, setAccess] = useState(false);
    const EMAIL = 'ejemplo@gmail.com';
    const PASSWORD = '123';
    const navigate = useNavigate();
    
    function login(userData) {
       if (userData.password === PASSWORD && userData.email === EMAIL) {
          setAccess(true);
          navigate('/home');
       }
    }

   useEffect(()=>{
      !access && navigate('/')
   },[access]) 
   
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
            <Route exact path='/' element={<Form login={login} />} >
            </Route>
            <Route path='/home'
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
