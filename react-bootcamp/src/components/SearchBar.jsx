import { useState } from 'react';
import styles from './SearchBar.module.css'
export default function SearchBar(props) {
   const [id, setId] = useState('')
   const handleChange = (event)=>{
      console.log(id)
      let { value } = event.target;
      setId( value);
   }
   return (
      <div className={styles.container} >
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
