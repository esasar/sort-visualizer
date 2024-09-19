import { useState, useEffect } from 'react'

const useTextAnimation = (scrambledWords, interval) => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < scrambledWords.length) {
        setText(scrambledWords[index])
        setIndex(index + 1)
      } else {
        clearInterval(intervalId)
      }
    }, interval)

    return () => clearInterval(intervalId);
  }, [scrambledWords, interval])

  return text
}

export default useTextAnimation