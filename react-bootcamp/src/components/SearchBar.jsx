import { useState } from 'react';
import styles from './SearchBar.module.css'
import {NavLink, Link, useLocation  } from 'react-router-dom'
import Favorites from './favorites/Favorites';

export default function SearchBar(props) {
   const { pathname } = useLocation();
   const isAbout = pathname === '/abt';
   const isHome = pathname === '/home';
   const [id, setId] = useState('');
   const handleChange = (event)=>{
      let { value } = event.target;
      setId( value);
      console.log(value)
   }
   return (
      <div className={styles.container} >
         { !isAbout &&
            (<NavLink to={'/abt'} >
               <button>About</button>
            </NavLink>
          
            )  
         }
         { !isHome && 
            (<NavLink to={'/home'} >
            <button className={styles.button} >Home</button>
            </NavLink>)
         }
         <NavLink to={'/fav'}>
            <button>asd</button>
          </NavLink>
         <input className={styles.input}
          placeholder='Ingresar valor..'
           type='search'
            name='search'
            onChange={handleChange}
            />
         <button className={styles.button} onClick={()=> props.onSearch(id)}>+</button>
      </div>
   );
}
