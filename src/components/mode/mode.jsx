import React from 'react'
import './mode.css'
import { useEffect } from 'react'

export default function Mode({mode,setMode}) {
    useEffect(() => {
        if(mode){
            document.getElementById('5days').classList.add('clicked');
            document.getElementById('today').classList.remove('clicked');
        }
        else{
            document.getElementById('today').classList.add('clicked');
            document.getElementById('5days').classList.remove('clicked'); 
        }
    }, [mode])
    

  return (
    <div className='mode'> <div id='today' onClick={()=>setMode(0)}>Today</div> <div id='5days' onClick={()=>setMode(1)}>5 days</div></div>
  )
}
