import React from "react"


export default function ArrayConcatinate(){

const array1 = [1,2,3,4]
const array2 = [5,6]

const concatinatedArray  = [...array1,...array2,7,8,9]


    return <div><h1>Array concatinated:{concatinatedArray}</h1></div>
}