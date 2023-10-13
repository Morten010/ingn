import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NewsDetails from './pages/NewsDetails'
import CategoryPage from './pages/CategoryPage'
import Login from './pages/Login'
import BulkImporter from './pages/BulkImporter'
import CreatePage from './pages/CreatePage'
import { useUser } from "@clerk/clerk-react";
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)
  const { isLoaded, isSignedIn, user } = useUser();
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main
        className='min-h-[calc(100vh-56px-200px)]'
        >
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/nyheder/:slug' element={<NewsDetails />} />
            <Route path='/kategori/:id' element={<CategoryPage />} />
            <Route path='/login' element={user ? <Navigate replace to="/" /> : <Login />} />
            <Route path='/signup' element={user ? <Navigate replace to="/" /> : <Signup />} />
            <Route path='/create' element={ <CreatePage />} />
            <Route path='/bulkimport' element={<BulkImporter />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
