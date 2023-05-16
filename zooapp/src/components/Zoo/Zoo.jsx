import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";
export default function Zoo() {
  /* Escribe acá tu código */
const [zoo, setZoo] = React.useState(
  {zooName: '',
  animals:[],
  species:[],
  allAnimals:[],
}
)
const handleInputChange = (event)=>{
  const { value } = event.target;
  setZoo((prevState)=> ({...prevState,
  zooName: value,}));
}
const handleSpecies = event => {
  setZoo({
    ...zoo, animals: zoo.allAnimals.filter(
      animal => animal.specie === event.target.value
    )} 
  )
};
const handleAllSpecies = () => {
  setZoo({
    ...zoo, animals: zoo.allAnimals,
  })
};
React.useEffect(() => {fetch('http://localhost:3001/zoo')
.then((res) => res.json())
.then((data) => {
  console.log(data);
   setZoo({
     ...zoo,
     animals: data.animals,
     species: data.species,
     allAnimals: data.animals,
   }) 
}
    )
    .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <label>Zoo Name:</label>
      <input  onChange={handleInputChange} value={zoo.zooName} type="text" />
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies} />
      <Animals animals={zoo.animals} />
    </div>
  );
}
