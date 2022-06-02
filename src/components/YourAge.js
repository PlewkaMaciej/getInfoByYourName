import baby from "../photos/baby.jpg"
import middleAge from "../photos/middleAge.PNG"
import adult from "../photos/adult.PNG"
import oldUser from "../photos/oldUser.jpg"
function YourAge({yourAge}){
    return(
        <>
        {yourAge <10 &&
        <>
        <div className="age-and-photo-container">
            <p>Your age: {yourAge}</p>
            <img className="how-old-photo" src={baby}></img>
            </div>
            </>
        }
         {yourAge>=10 && yourAge < 26&&
        <>
        <div className="age-and-photo-container">
            <p>Your age: {yourAge}</p>
            <img className="how-old-photo" src={middleAge}></img>
            </div>
            </>
        }
         {yourAge>=26 && yourAge < 50&&
        <>
        <div className="age-and-photo-container">
            <p>Your age: {yourAge}</p>
            <img  src={adult}></img>
            </div>
            </>
        }
        {yourAge>=50 &&
        <>
        <div className="age-and-photo-container">
            <p>Your age: {yourAge}</p>
            <img className="how-old-photo" src={oldUser}></img>
            </div>
            </>
        }
        </>
    )
}
export default YourAge;