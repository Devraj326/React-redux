import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { listAction, listSelector } from '../redux/reducer'

const LikeContainer = () => {

    const [counts, setCount] = useState(0)

    const likesCount = useSelector(listSelector)
    const disptach = useDispatch();

    function increaseLike(){
      disptach(listAction.like())
    }

    function increaseUnlike(){
      disptach(listAction.unlike())
    }

  return (
    <div>
        {likesCount}<br/>
        <button onClick={increaseLike}>Like</button>
        <button onClick={increaseUnlike}>Unlike</button>
    </div>
  )
}

export default LikeContainer