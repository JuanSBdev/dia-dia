import styles from "./Card.module.css";
import { NavLink } from 'react-router-dom'
export default function Card(props) {
   const { onClose, id }  = props
   const handleOnClose = () => {
      onClose(id);
    };
  
   return (
      <div className={styles.divCarta}>
         <NavLink to={`/detail/${id}`}>
         
         <button className={styles.button} onClick={handleOnClose}  >X</button>
         <h2 className={styles.nombre}>{props.name}</h2>
         <img className={styles.characterImg} src={props.image} alt='RickImage' />
         <h2 >&#x2764; {props.status} </h2>
         <h2> {props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.name.origin}</h2>
         </NavLink>
      </div>
   );
}
