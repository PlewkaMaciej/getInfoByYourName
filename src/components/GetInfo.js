import { Button } from 'react-bootstrap';

function GetInfo({yourName,setYourGender,setYourAge,setYourCountry,setNameOfSearch}){
    const getData =()=>{
        setNameOfSearch(yourName)
        fetch('https://api.nationalize.io?name='+yourName)
        .then(response => response.json())
        .then(response => setYourCountry(response.country))
        .catch(err => console.error(err));
        fetch('https://api.genderize.io?name='+yourName)
        .then(response => response.json())
        .then(response => setYourGender(response.gender))
        .catch(err => console.error(err));
        fetch('https://api.agify.io?name='+yourName)
        .then(response => response.json())
        .then(response => setYourAge(response.age))
        .catch(err => console.error(err));
    }
    return(
        <Button className="button-to-get-data" onClick={getData} variant="primary">Get information about your name!</Button>
    )
}
export default GetInfo;