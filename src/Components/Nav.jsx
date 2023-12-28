import React ,{useEffect, useState} from 'react'
import './Nav.css'

function Nav() {

  const[show,setShow]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>600){
        setShow(true)
      }else{
        setShow(false)
      }
    })
  })

console.log(show);

  return (
    <div className={`${show && 'nav-back'} nav` }>
<img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png" width={'150px'} alt="" />
    </div>
  )
}

export default Nav