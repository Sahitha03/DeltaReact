import { useState } from "react"

export default function LikeButton(){
    //do toggle that means if not like,make it like and if it is like make it not like.
    let[isLiked,setIsLiked]=useState(false);
    let toggleLike=()=>{
        // let newVal=!isLiked;
        // console.log(newVal);
        setIsLiked(!isLiked);
    }
    let likeStyle={color:"red"};
    return(<>
      <p onClick={toggleLike}>
       {
         isLiked ? 
         (<i className="fa-solid fa-heart" style={likeStyle}></i>) : (<i className="fa-regular fa-heart"></i>)
       }
     
      </p>
        </>)
}