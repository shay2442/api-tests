import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [dogs, setDogs] = useState('')
  const [image, setImage] = useState('https://dog.ceo/api/breeds/image/random')
  const [likes, setLikes] = useState(0)

  // useEffect(() => {
  //   fetch ('https://dog.ceo/api/breeds/image/random')
  // .then(r => r.json())
  // .then((dogs) => setDogs(dogs))
  // }, []); 

  function handleNewDogClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then(({dog}) => { setDogs(dog.message)})
  }
  return (
    <div className="App">
     <img  src={dogs.message} height="150" width="150"  />
     <button onClick={handleNewDogClick}>New Dog!</button>
    </div>
  );
}

export default App;
