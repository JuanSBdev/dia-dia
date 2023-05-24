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
         <div className={styles.containerLeft}>
         { !isAbout &&
            (<NavLink to={'/abt'} >
               <button>About</button>
            </NavLink>
          
            )  
         }
         { !isHome && 
            (<NavLink to={'/home'} >
            <button>Home</button>
            </NavLink>)
         }
         <NavLink to={'/fav'}>
            <button>Favoritos</button>
          </NavLink>
          
         </div>
          <div className={styles.ContainerRight}>
            <label > Buscar por ID:</label>
            <input className={styles.input}
               placeholder='add numero..'
            type='search'
            name='search'
            onChange={handleChange}
            />
            <button className={styles.button} onClick={()=> props.onSearch(id)}>🔎</button>

          </div>
      </div>
   );
}
