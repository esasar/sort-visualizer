import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext({

})

const AppProvider = ({ children }) => {
  const [speedSliderValue, setSpeedSliderValue] = useState(50)
  const [elementsSliderValue, setElementsSliderValue] = useState(10)
  const [array, setArray] = useState([])
  const [sorted, setSorted] = useState(false)
  const [isSorting, setIsSorting] = useState(false)

  const shuffleArray = (size) => {
    const newArray = Array.from({ length: size }, () => 
      Math.floor(Math.random() * 140) + 10
  )
    setSorted(false)
    setIsSorting(false)
    setArray(newArray)
  }

  useEffect(() => {
    shuffleArray(elementsSliderValue)
  }, [elementsSliderValue])

  return (
    <AppContext.Provider
      value={{
        speedSliderValue,
        setSpeedSliderValue,

        elementsSliderValue,
        setElementsSliderValue,

        array,
        setArray,
        shuffleArray,

        sorted,
        setSorted,

        isSorting,
        setIsSorting,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { AppProvider, AppContext }