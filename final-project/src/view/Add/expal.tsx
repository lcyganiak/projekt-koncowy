import React, { useState } from 'react'



export const expal = () => {
const [isPies, setIsPies] = useState()


const obj = {
    name: "Jan",
    age: 50
}
// const name = obj.name
// const age = obj.age
// to samo za pomocą destrukturyzacji 

const {name , age} = obj


// setIsPies(true)
  return (
    <div>expal</div>
  )
}


