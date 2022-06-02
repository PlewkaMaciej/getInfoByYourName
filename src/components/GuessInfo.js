import 'bootstrap/dist/css/bootstrap.min.css';
import GetInfo from './GetInfo';
import "../styles/guesInfo.css"
import InputUserName from './InputUserName';
import YourName from './YourName';
function GuessInfo() {
    return (
        <div>
            <div className='heading-container'>
                <h1>We will predict your age, gender and country based on your name!</h1>
            </div>
            <div className='input-user-information-container'>
                <InputUserName/>
                <GetInfo />
                <YourName />
            </div>
            
        </div>
    )
}
export default GuessInfo;