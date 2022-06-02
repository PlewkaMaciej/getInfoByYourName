import { Button } from 'react-bootstrap';

function GetInfo(){
    const getData =()=>{
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
    }
    return(
        <Button className="button-to-get-data" onClick={getData} variant="primary">Get information about your name!</Button>
    )
}
export default GetInfo;