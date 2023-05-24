import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card'
 function Favorites({myFavorites}) {
  return (
    <div>
        <h1>Myfavoriteees</h1>
{
  myFavorites?.map((characters, index) =>{
    return(
      <Card  key={index} id={characters.id}
      name={characters.name}
      status={characters.status}
      species={characters.spropses}
      gender={characters.gender}
      origin={characters.origin.name}
      image={characters.image}
      />
    )
  })
}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}
export default connect(mapStateToProps, null)(Favorites)