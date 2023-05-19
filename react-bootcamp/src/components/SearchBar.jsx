import { useState } from 'react';
import styles from './SearchBar.module.css'
import {NavLink, Link, useLocation  } from 'react-router-dom'

export default function SearchBar(props) {
   const { pathname } = useLocation();
   const isAbout = pathname === '/abt';
   const isHome = pathname === '/';
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
            </NavLink>)  
         }
         { !isHome && 
            (<NavLink to={'/'} >
            <button className={styles.button} >Home</button>
            </NavLink>)
         }
         
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
