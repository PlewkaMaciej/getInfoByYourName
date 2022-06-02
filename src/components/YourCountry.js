
import world from "../photos/world.png"
function YourCountry({yourCountry}){
    return(<>
        {yourCountry.map((value,index)=>{
            return  <> <div key={index} className="country-and-world-photo-container"> <p >Your country id: {value.country_id} probabilty: {(value.probability*100).toFixed(2)}%</p> <img className="world-photo" src={world}></img></div></>
        })}
        </>
        
    )
}
export default YourCountry;