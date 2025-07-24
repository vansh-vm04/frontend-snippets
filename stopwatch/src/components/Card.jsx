import React from "react"

export function Card({children}){
  return (
    <div style={{backgroundColor:"rgb(35, 35, 35)", padding:"40px", borderRadius:"20px"}}>
      {children}
    </div>
  )
}