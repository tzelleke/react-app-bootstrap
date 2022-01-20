import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './features/header/Header'

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '56px' }}>
        <Outlet />
      </main>
    </>
  )
}

export default App
