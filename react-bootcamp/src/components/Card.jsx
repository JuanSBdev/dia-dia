import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css";
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from "../redux/actions";
import { useSelector, useDispatch } from 'react-redux';

export default function Card(props) {
   const { id, onClose } = props;
   const dispatch = useDispatch();

   const myFavorites = useSelector(state => state.myFavorites);
   
   const [isFav, setIsFav] = useState(false);
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
            return;
         }
      });
   }, [myFavorites, id]);

   const handleFavorite = () => {
      isFav ? dispatch(removeFav(id)) : dispatch(addFav(props));
      setIsFav(!isFav);
   };

   const handleOnClose = () => {
      onClose(id);
   };
  
   return (
      <div className={styles.divCarta}>
         {
            isFav ? (
               <button onClick={handleFavorite}>rojo</button>
            ) : (
               <button onClick={handleFavorite}>blanco</button>
            )
         }
         <button className={styles.button} onClick={handleOnClose}>X</button>
         <NavLink to={`/detail/${id}`}>
            <h2 className={styles.nombre}>{props.name}</h2>
            <img className={styles.characterImg} src={props.image} alt='RickImage' />
            <h2>&#x2764; {props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.name.origin}</h2>
         </NavLink>
      </div>
   );
}
