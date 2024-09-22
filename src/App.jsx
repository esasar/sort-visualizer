import React from 'react'

import { AppProvider } from './providers/AppProvider'
import Settings from './components/Settings'
import Sorter from './components/Sorter'
import Footer from './components/Footer'

import './index.css'

const App = () => {
  return (
    <AppProvider>
      <main className="bg-gradient-to-r from-purple-100 min-h-screen">
        <div
          style={{ minHeight: "calc(100vh - 60px)" }}
          className="flex flex-col justify-center"
        >
          <div className="grid lg:grid-cols-2 gap-32 items-center max-w-7xl mx-auto px-8">
            <Settings />
            <Sorter />
          </div>
        </div>
        <Footer />
      </main>
    </AppProvider>
  )
}

export default App