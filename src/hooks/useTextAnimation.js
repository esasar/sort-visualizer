import { useState, useEffect, useMemo } from 'react'

import makeTextAnimationFrames from '../utils/textAnimationUtil'

const useTextAnimation = (word, interval) => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)

  const frames = useMemo(() => makeTextAnimationFrames(word), [word])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(frames[index])
      setIndex(prevIndex => {
        const nextIndex = prevIndex + 1
        if (nextIndex >= frames.length) {
          clearInterval(intervalId)
          return prevIndex
        }
        return nextIndex
      })
 
    }, interval)

    return () => clearInterval(intervalId);
  }, [frames, index, interval])

  return text
}

export default useTextAnimation