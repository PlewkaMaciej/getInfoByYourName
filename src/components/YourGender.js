import male from "../photos/male.jpg"
import female from "../photos/female.jpg"
import "../styles/guesInfo.css"
function YourGender({yourGender}){
    return(
        <>
        {yourGender==="Our magical website have no idea about your age"&&
        <p>Your gender: Our magical website have no idea about your age</p>

        }
        {yourGender==="male"&&
        <>
        <div className="gender-and-photo-container">
        <p>Your gender: {yourGender}</p>
         <img className="gender-photo" src={male}></img>
         </div>
         </>
        }
        {yourGender==="female"&&
        <>
        <div className="gender-and-photo-container">
        <p>Your gender: {yourGender}</p>
         <img className="gender-photo" src={female}></img>
         </div>
         </>
        }
        </>
    )
}
export default YourGender;