import React from 'react'
import HomePage from './pages/HomePage'
import { Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar' 
import CollectionPage from './pages/CollectionPages'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {


  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100' >
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/collection' element={<CollectionPage />}/>
    </Routes>  
    
    <ToastContainer />

    </div>
  )
}

export default App

