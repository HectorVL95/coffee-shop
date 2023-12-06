'use client'
import Header from './client/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './client/Main';
import Footer from './client/Footer'

export default function Home() {
  return (
    <main>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  )
}
