import React from 'react'

export default function Die(prop)
{
  const styles=
  {
    backgroundColor:prop.freeze? "#59E391": "whitesmoke"
  }
   return(
    
        <div class="die" 
        style={styles}
        onClick={prop.isfreeze}>{prop.value}</div>
    

    
    )
    
    
    
    
    
}