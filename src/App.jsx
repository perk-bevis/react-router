import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayout from './layout/RootLayout'
import Contactlayout from './layout/Contactlayout'
import Contactinfo from './components/Contactinfo'
import Contactform from './components/Contactform'
import Notfound from './components/Notfound'
import JobLayout from './layout/JobLayout'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobDetails, { JobDetailsLoader } from './components/JobDetails'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/About' element={<About />} />
        {/* <Route path='/Contact' element={<Contact />} /> */}
        <Route path='/Contact' element={<Contactlayout />}>
           <Route path='info' element={<Contactinfo/>} />
            <Route path='form' element={<Contactform/>} />
        </Route>
        <Route path='Jobs' element = {<JobLayout/>} >
          <Route index element = {<Jobs/>} loader={jobsLoader}/>
          <Route path=':id' element={<JobDetails/>} loader={JobDetailsLoader}/>
        </Route>
        <Route path='*' element= {<Notfound/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
