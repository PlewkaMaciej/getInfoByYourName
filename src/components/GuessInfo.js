import 'bootstrap/dist/css/bootstrap.min.css';
import GetInfo from './GetInfo';
import "../styles/guesInfo.css"
import InputUserName from './InputUserName';
import YourName from './YourName';
import YourGender from './YourGender';
import YourAge from './YourAge';
import YourCountry from './YourCountry';
import React, {  useRef,useState } from 'react';
function GuessInfo() {
    const nameRef = useRef()
    const [yourGender, setYourGender] = useState();
    const [yourAge, setYourAge] = useState();
    const [yourCountry, setYourCountry] = useState();
    const [yourName, setYourName] = useState();
    return (
        <div>
            <div className='heading-container'>
                <h1>We will predict your age, gender and country based on your name!</h1>
            </div>
            <div className='input-user-information-container'>
                <InputUserName setYourName={setYourName} nameRef={nameRef}/>
                <GetInfo yourName={yourName} setYourGender={setYourGender} setYourAge={setYourAge} setYourCountry={setYourCountry} />
                <YourName yourName={yourName} />
                <YourGender yourGender={yourGender}/>
                <YourAge yourAge={yourAge}/>
                <YourCountry yourCountry={yourCountry}/>
            </div>
            
        </div>
    )
}
export default GuessInfo;