import React, { useState } from 'react'

function trial() {
    const [count,setCount]=useState(0);
  return (
    <div>
        function increment(){
            setCount(count+1)
        }
        

    </div>
  )
}

export default trial