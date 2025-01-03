import React from 'react'
import DataShow from './Components/DataShow'
import { Routes , Route } from 'react-router-dom'
import History from './Components/History'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<DataShow />} />
        <Route path='/history' element={<History />} />
      </Routes>
      
    </div>
  )
}

export default App
