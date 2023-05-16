import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{
      this.props.animals.map((specie, i)=>(
      <div key={i}>
          <h5>{specie.name}</h5>
          <img src={specie.image} alt={specie.name} width="300px" />
        </div>
    ))
  }
    </div>
  }
}
