import { useContext } from 'react'
import { AppContext } from '../providers/AppProvider'

const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}

export default useAppContext