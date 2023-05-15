import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (<div>
      {
         characters.map((characters, index) => (<Card
            key={index} id={characters.id}
            name={characters.name}
            status={characters.status}
            species={characters.spropses}
            gender={characters.gender}
            origin={characters.origin.name}
            image={characters.image}>

            </Card>))
      }
         </div>);
}
