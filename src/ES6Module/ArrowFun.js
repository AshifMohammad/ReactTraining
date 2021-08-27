import React from "react"


const ArrowFun = ()=>{

const miniArrowFunc = (a,b)=> {
  const result  = a*b 
    return result;
}

const result = miniArrowFunc(2,4)


    return (<div>
        <h1>Arrow Function: {result}</h1>
    </div>)
}
export default ArrowFun