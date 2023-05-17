import styles from "./Card.module.css";
export default function Card(props) {
   return (
      <div className={styles.divCarta}>
         <button className={styles.button} onClick={props.onClose} >X</button>
         <h2 className={styles.nombre}>{props.name}</h2>
         <img className={styles.characterImg} src={props.image} alt='RickImage' />
         <h2 >&#x2764; {props.status} </h2>
         <h2> {props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.name.origin}</h2>
      </div>
   );
}