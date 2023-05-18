import { useState } from 'react';
import styles from './SearchBar.module.css'
import {NavLink, Link } from 'react-router-dom'

export default function SearchBar(props) {
   const [id, setId] = useState('')
   const handleChange = (event)=>{
      let { value } = event.target;
      setId( value);
      console.log(value)
   }
   return (
      <div className={styles.container} >
         <NavLink to={'/abt'} >
            <button>About</button>
         </NavLink>
         <NavLink to={'/'} >
            <button>Home</button>
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
