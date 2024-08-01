import React from 'react'
import Die from './die.jsx'

export default function Main()
{
  const [dies,setdies]=React.useState(gennum())
  const [won,setwon]=React.useState(false)
  
  
  const randie=dies.map(num=>{
    return (
    <Die 
    key={num.id}
    value={num.value}
    freeze={num.freeze}
    id={num.id}
    isfreeze={()=>isfreeze(num.id)}
    />
    )
  }
  )
  
  React.useEffect(()=>{
    const allfreeze=dies.every(die=>die.freeze)
    const allvalue=dies.every(die=>die.value===dies[0].value)
    
    if(allfreeze && allvalue)
    {
      setwon(true)
    }
  },[dies])
  return(
        
      <div className="main__ctr">
         <h1 className="main__title">Tenzies</h1>
         <p className="main__info">Roll the dice till all the values are same.Click to freeze die.</p>
      <div className="die__ctr">
        {randie}
      </div>
         <button 
           className="roll__btn"
           onClick={rerender}>
              {won ? "New Game" : "Roll"}
          </button>
      </div>
    
    
        )
  function generateRandomId(length = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
  
    function gen1die()
    { return{
             id:generateRandomId(),
             value :Math.ceil(Math.random()*6),
             freeze :false
            }
    }
  
    function gennum()
    {
      let diearr=[];
      
      for(let i=0;i<9;i++)
         diearr.push(gen1die()
         );
         
      return diearr;
    }
  function rerender()
  { if(!won)
  {
    setdies(prevdies =>
       prevdies.map(obj=>
        obj.freeze?obj:gen1die()))
  }else
  {setwon(false)
    setdies(gennum);
  }
  }
  
  function isfreeze(id)
  {
    setdies(prevdies=>
      prevdies.map(obj=>
       obj.id===id?{ ...obj,freeze:!obj.freeze}:obj
        )
      
    )
  }
  
}