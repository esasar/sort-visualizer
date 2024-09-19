import React, { useState } from 'react'

import { useAppContext } from '../providers/AppProvider'

const Sorter = () => {
  const { 
    speedSliderValue,
    elementsSliderValue,
  } = useAppContext()

  const [test, setTest] = useState(0)
  
  return (
    <div className='border rounded-xl p-10 bg-blue-200 shadow-md space-y-6 cursor-pointer' onClick={() => setTest(test + 1)}>
      <div className='pointer-events-none select-none'>
        Click me: {test} <br/>
        Speed slider value: {speedSliderValue} <br/>
        Element slider value: {elementsSliderValue}
      </div>
    </div>
  )
}

export default Sorter