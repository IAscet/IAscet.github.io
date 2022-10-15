import ReactPlayer from 'react-player'
import React from 'react'
import './Player.css'




function Player() {
  return (
    <div className='pcust'>
        <ReactPlayer width={273} height={365} url='https://www.youtube.com/watch?v=5q_s5YKgsYs' controls light = 'https://pbs.twimg.com/media/Fc3OOliXkAEvk6q?format=png&name=small'
        />



        <automat className='pcust2'>
        <ReactPlayer width={273} height={365} url='https://www.youtube.com/watch?v=5q_s5YKgsYs' controls light = 'https://pbs.twimg.com/media/Fc3iOXfWQAAhjpm?format=png&name=small'
        />
        </automat>


        <web className='pcust3'> 
        <ReactPlayer width={273} height={365} url='https://www.youtube.com/watch?v=5q_s5YKgsYs' controls light = 'https://pbs.twimg.com/media/Fc3iOXfWQAAhjpm?format=png&name=small'
        />
        </web>



        <projtxt>
          <h1 className='projtxt'>Projects :)</h1>
        </projtxt>



    </div>
  )
}

export default Player