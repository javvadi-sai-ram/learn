import React from "react";


function EachCode({book,changePet}){
    const {_id,name,breed,age,color,favoriteToy}=book

    const handlechangePet=()=>{
        changePet(_id)
    }
    
    return(
        <li  key={book.id}>
            <h2>{name}</h2>
            <p>{breed}</p>
            <p>{age}</p>
            <p>{color}</p>
            <p>{favoriteToy}</p>
            <button onClick={handlechangePet}>edit</button>
          </li>
    )
}


export default EachCode