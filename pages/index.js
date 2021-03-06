import { useEffect, useState } from 'react'

import Card from '../componentes/card';


export const Index = () => {

  const [characters, setCharacters] = useState([])

  const listar = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character?limit=3')
    const data = await response.json();
    setCharacters(data.results);
    console.log(data.results)
  }


  useEffect(() => {

    listar();

  }, [])


  return (
    <>

      {
        characters.map((character, i) => (

          <main key={i}>

            <Card

              imagen={character.image}
              nombre={character.name}
              especie={character.species}
              genero={character.gender}
              id={character.id}
              estado={character.status}
              url={character.url}
              origen={character.origin.name}
              location={character.location.name}

            />

          </main>

        )
        )
      }

    </>
  )

}
export default Index