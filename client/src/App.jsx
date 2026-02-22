import './App.css'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Feed from './pages/Feed'

export default function App () {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  )
}