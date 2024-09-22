import React, { useState, useEffect } from 'react'

import { useAppContext } from '../providers/AppProvider'

const bubbleSortStep = (array, setArray, iterators, setIterators) => {
  let { i, j } = iterators
  const n = array.length 
  const arrayCopy = [...array]

  if (j < n - i - 1) {
    if (array[j] > array[j + 1]) {
      [arrayCopy[j], arrayCopy[j + 1]] = [arrayCopy[j + 1], arrayCopy[j]]
      setArray(arrayCopy)
      return true
    }
    if (j + 1 !== n - i - 1) {
      setIterators({ i, j: j + 1 })
    } else {
      setIterators({ i: i + 1, j: 0 })
    }
  } else {
    setIterators({ i: i + 1, j: 0 })
  }

  return false
}

const Sorter = () => {
  const { 
    speedSliderValue,
    elementsSliderValue,
    array, setArray,
    sorted, setSorted,
    isSorting, setIsSorting,
  } = useAppContext()
  
  const [iterators, setIterators] = useState({ i: 0, j: 0 })
  const [swapped, setSwapped] = useState(false)

  useEffect(() => {
    setIterators({ i: 0, j: 0 });
    setSorted(false);
    setSwapped(false);
    setIsSorting(false);
  }, [elementsSliderValue])

  useEffect(() => { 
    if (!isSorting) return
    const delay = 1001 - speedSliderValue * 10
    const intervalId = setInterval(() => {
      if (iterators.i === array.length) {
        clearInterval(intervalId)
        setIsSorting(false)
        setSorted(true)
        return
      }

      setSwapped(bubbleSortStep(array, setArray, iterators, setIterators))

      return () => clearInterval(intervalId)
    }, delay)

    return () => clearInterval(intervalId)
  }, [array, iterators])

  const startSorting = () => {
    if (isSorting) return
    setIterators({ i: 0, j: 0 })
    setSorted(false)
    setSwapped(false)
    setIsSorting(true)
  }

  return (
    <div 
      className='border rounded-xl p-10 bg-blue-200 shadow-md space-y-6 cursor-pointer flex flex-col justify-end items-center'
      style = {{
        height: '284px',
        width: '100%',
      }}
      onClick={() => {
        if (sorted) return
        startSorting() 
      }}
    >
      <div className='flex gap-0.5 items-end'>
        {array.map((value, index) => (
          <div 
            key={index} 
            style={{ 
              borderRadius: '10px',
              height: `${value}px`,
              width: `${(250 - (elementsSliderValue - 1)) / elementsSliderValue}px`,
              backgroundColor:
                !isSorting ? `rgb(0, 0, ${Math.min(255, Math.floor((value / 100) * 255))})`
                : sorted ? `rgb(0, 0, ${Math.min(255, Math.floor((value / 100) * 255))})` 
                : (index === iterators.j || index === iterators.j + 1) 
                ? (swapped ? 'red' : 'green')
                : `rgb(0, 0, ${Math.min(255, Math.floor((value / 100) * 255))})`
            }}
          >
          </div>
        ))}
      </div>
      <h1 className='text-xl font-semibold select-none'>
        {isSorting ? 'Sorting...' : sorted ? 'Sorted!' : 'Click me to sort!'}
      </h1>
    </div>
  )
}

export default Sorter