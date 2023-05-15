import styles from './SearchBar.module.css'
export default function SearchBar(props) {
   return (
      <div className={styles.container} >
         <input className={styles.input} placeholder='Ingresar valor..' type='search' />
         <button className={styles.button} onClick={props.onSearch}>+</button>
      </div>
   );
}
