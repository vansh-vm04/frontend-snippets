import React from 'react'

const Time = ({hour,minute,second}) => {
  return (
    <div>
        <h1>{hour<10 && "0"}{hour}{" : "}{minute<10 && "0"}{minute}{" : "}{second<10 && "0"}{second}</h1>
    </div>
  )
}

export default Time;