import { useState } from 'react'

import Header from './components/Header'
import CaseList from './components/CaseList'

import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <CaseList />
      <CaseList />
      <CaseList />
      <CaseList />
      <CaseList />
    </div>
  )
}

export default App
