import React from "react";
import Itemcollapse from "./Itemcollapse";
export default function Collapse(){
    const category=["Fiability","Respect","Service","Sécurité"]
    const text="Lorem ipsum, dolor sit amet consectetur adipisicing elit ";
    return(
         <div className="collapses">
            {category.map((item,index)=>(
               
              <Itemcollapse key={index} category={item} text={text} />  
            ))}
             
         </div>
        
    )
}