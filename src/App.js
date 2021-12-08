import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'

import Header from './components/app-header'
import Footer from './components/app-footer'
import Routes from './router'

export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <h2>CONTENT</h2>
        <Routes />
        <Footer />
      </HashRouter>
    </div>
  )
})

