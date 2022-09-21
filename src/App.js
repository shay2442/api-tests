import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import './App.css';

function App() {
  const [dogs, setDogs] = useState('')
  const [image, setImage] = useState('https://dog.ceo/api/breeds/image/random')
  const [likes, setLikes] = useState(0)
  const [pokemons, setPokemons] = useState([])
  const [currentPokemonId, setCurrentPokemonId] = useState('');

  // fetch('https://pokeapi.co/api/v2/pokemon')
  // .then((r) => r.json())
  // .then((pokemon) => console.log(pokemon.results))


  useEffect((name) => {
    fetch("https://pokeapi.co/api/v2/pokemon", {})
      .then((r) => r.json())
      .then((pokemons) => {
       setPokemons(pokemons.results);
      });
  }, []);


  function handleClick() {
    setCurrentPokemonId(currentPokemonId);
  }

  function handleNewDogClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then(({dog}) => { setDogs(dog.message)})
  }



  return (
    <div className="App">
     {/* <img  src={dogs.message} height="150" width="150"  />
     <button onClick={handleNewDogClick}>New Dog!</button> */}
     {pokemons.map((pokemon) => {
       return <h1>Pokemon: <button onClick={handleClick}>{pokemon.name}</button></h1>
     })}
    {currentPokemonId}
    
  
    </div>
  );
}

export default App;
