import React from "react"


export default function(){

    function miniRest(...restParams){

const result = restParams[0] + restParams[1]

return result
}
const result = miniRest(10,10,5)


    return <h1>Rest Operator: {result}</h1>
}