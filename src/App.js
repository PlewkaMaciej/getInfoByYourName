import { useEffect } from "react";
import GuessInfo from "./components/GuessInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  useEffect(()=>{
  
    fetch('https://api.nationalize.io?name=nathaniel')
      .then(response => response.json())
      .then(response => console.log(response.country))
      .catch(err => console.error(err));
      fetch('https://api.genderize.io?name=luc')
      .then(response => response.json())
      .then(response => console.log(response.gender))
      .catch(err => console.error(err));
      fetch('https://api.agify.io?name=meelad')
      .then(response => response.json())
      .then(response => console.log(response.age))
      .catch(err => console.error(err));
  },[])
  return (
    <GuessInfo />
  );
}

export default App;
