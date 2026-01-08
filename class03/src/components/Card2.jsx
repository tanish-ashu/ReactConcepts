import React from 'react'

const Card2 = (props) => {
  console.log(props);
  return (
    <div className=' border-red-600 bg-white m-2 rounded h-40 px-5 py-3 w-40 ' >
      {/*props*/      /* -> This is not valid becouse Object can't be used as child and are not printable */}
      <h1> {props.user}, and {props.age} </h1>
    </div>
  )
}

export default Card2


// HAVING #----ERROR----# THIS IS NOT GIVING PROPER CSS , THATS WHY DONE FURTHER LEARNIN WITH BUTTON COMPONENT INSTEAD OF CARD , PENDING FOR REVIEW AND CORRECTION