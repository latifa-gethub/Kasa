 
import { FaStar,FaRegStar } from "react-icons/fa";

export const Rating = (props) => {
    const rating=props.rating
  
    const tabicon=[]
    for(let i=0;i<5 ;i++){
       if(rating>i){
        tabicon.push(<FaStar key={i}/>)
       }else{
            tabicon.push(<FaRegStar key={i} />)
       }
   
    }
  return (
    <div>
    {
tabicon
    }
    </div>
  )
}
