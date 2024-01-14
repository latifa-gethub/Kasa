import React from "react";
import {FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from "react";

export default function Itemcollapse(props){    
     
  const [ isopen,setIsopen]=useState(false);
   
    return(
       <div className="button-text-collapse">
        <div className="button-icon" onClick={()=>setIsopen(!isopen)}>
             {props.category} 
             {isopen ?<FaAngleDown className="icon-up"/> :<FaAngleUp className="icon-up"/>}
                     
        </div>
        {isopen && <div className="text-collapse">{props.text}</div>}
        
    </div>
        
    )
}