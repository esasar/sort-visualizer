import React, { useContext, useState } from 'react'

const AppContext = React.createContext({

})

const AppProvider = ({ children }) => {
  const [speedSliderValue, setSpeedSliderValue] = useState(50)
  const [elementsSliderValue, setElementsSliderValue] = useState(50)

  return (
    <AppContext.Provider
      value={{
        speedSliderValue,
        setSpeedSliderValue,

        elementsSliderValue,
        setElementsSliderValue,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)

  return context
}

export { AppProvider, useAppContext }