import React, { useEffect, useState } from 'react'

import { useAppContext } from '../providers/AppProvider'
import useTextAnimation from '../hooks/useTextAnimation'

const Settings = () => {
  const { 
    speedSliderValue, setSpeedSliderValue, 
    elementsSliderValue, setElementsSliderValue,
  } = useAppContext()

  const scrambledWords = [
    'tgnotis', 'rngotis', 'rnogtis', 'rnotgis', 'rnotigs', 'rnotisg', 'rontisg', 'rotnisg', 
    'rotinsg', 'rotisng', 'ortisng', 'ortsing', 'orsting', 'osrting', 'sorting'
  ]
  const textAnimationInterval = 100

  const sortingText = useTextAnimation(scrambledWords, textAnimationInterval)
  
  return (
    <div>
      <h1 className="text-4xl font-bold">Visualize
        <span className="text-blue-400"> {sortingText}!</span>
      </h1>
      <br/>
      <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Let's sort it out and see what happens
        </h1>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 font-medium w-24">
              Speed:
            </label>
            <input type="range" min="1" max="100" value={speedSliderValue}
              onChange={(e) => setSpeedSliderValue(e.target.value)} 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 font-medium w-24">
              Elements:
            </label>
            <input type="range" min="1" max="100" value={elementsSliderValue}
              onChange={(e) => setElementsSliderValue(e.target.value)} 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings