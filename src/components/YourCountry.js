import { useEffect } from "react";

function YourCountry({yourCountry}){
    useEffect(()=>{
        yourCountry.map((value)=>{
       return console.log(value.country_id )
        })
    })
    return(<>
        {yourCountry.map((value)=>{
            return <p>Your country id: {value.country_id} probabilty: {value.probability}</p>
        })}
        </>
        
    )
}
export default YourCountry;