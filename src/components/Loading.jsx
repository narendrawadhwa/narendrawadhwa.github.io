import React from 'react'
import { ScaleLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='wow-loader-container'>
    <ScaleLoader size={70} color='#0072ff' />
  </div>
  )
}

export default Loading
