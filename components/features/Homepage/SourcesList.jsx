import React from "react";
import { authorFilter } from "../../../content/sources/author-service";
import Source from './Source';

const SourcesList = ({authorData}) =>{
    console.log("hi");
    return(
        <div>
        
        {authorData.q_results.map((author, index)=>(
           <Source
            number={index+1}  
            name={`${author.firstName} ${author.lastName}`}
            email= {author.email}
           /> 
        ))}
        <Source number = "1" name = "Presbo" email= "presbo@columbia.edu" />
        <Source number = "2" name = "John Jay Mouse" email= "mouse@columbia.edu"/>
        <Source number = "3" name = "Water Bottle Man" email= "flipper@columbia.edu"/>
        </div>

    )
}

export default SourcesList;