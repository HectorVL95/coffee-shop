'use client'
import Header from './client/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './client/Main';
import Footer from './client/Footer'
import Menu from './client/Menu';

export default function Home() {
  return (
    <main>
      <Header/>
      <Main/>
      <Footer/>
    </main>
  )
}
