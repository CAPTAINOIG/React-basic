import React from 'react'
import {FullScreen,  useFullScreenHandle} from 'react-full-screen'

const Handlescreen = () => {
    const handle = useFullScreenHandle()
  return (
    <>
        <button onClick={handle.enter}>
        <FullScreen handle={handle}>here</FullScreen>
        </button>
       
    </>
  )
}

export default Handlescreen