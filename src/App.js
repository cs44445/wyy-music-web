import React, { memo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/app-header'
import Footer from './components/app-footer'
import RoutesCom from './router'

import Discover from "@/pages/Discover";
import Recommend from '@/pages/Discover/children/Recommend'
import Ranking from '@/pages/Discover/children/Ranking'
import PlayList from '@/pages/Discover/children/PlayList'
import Djradio from '@/pages/Discover/children/Djradio'
import Artist from '@/pages/Discover/children/Artist'
import Album from '@/pages/Discover/children/Album'

export default memo(function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <RoutesCom />
        <Routes>
          <Route path='/' element={<Discover />} exact></Route>
          <Route path='/discover' element={<Discover />}>
            <Route path='/discover/recommend' element={<Recommend />} />
            <Route path='/discover/ranking' element={<Ranking />} />
            <Route path='/discover/playlist' element={<PlayList />} />
            <Route path='/discover/djradio' element={<Djradio />} />
            <Route path='/discover/artist' element={<Artist />} />
            <Route path='/discover/album' element={<Album />} />
            <Route index element={<Recommend />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
})


