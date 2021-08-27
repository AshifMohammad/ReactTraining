import React from 'react'



export default function SpreadOperator(){
    let obj = {name:"sikander", skill:"React", id:"1"}

    obj.name = "test"
    obj.skill = "Java" // mutation 

    const newObj = {...obj, name:"Ashif"}

    return <h1>Spread Operator:
        <span>{JSON.stringify(obj)}</span>
        <span>{JSON.stringify(newObj)}</span>
    </h1>
}