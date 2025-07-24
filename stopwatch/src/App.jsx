import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage'
import ErrorPage from './components/ErrorPage'
import Chat from './components/Chat'

function App() {

  return <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/msg' element={<Chat/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App
