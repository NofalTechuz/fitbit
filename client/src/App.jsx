import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Class from '../pages/Class'
import TrainerPage from '../pages/Trainer'
import Contact from '../pages/Contact'
import DashboardPage from '../components/DashboardPage'
import DashBoard from '../pages/DashBoard'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='class' element={<Class />} />
        <Route path='trainers' element={<TrainerPage />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />

        <Route path='dashboard' element={<DashBoard />}>
          <Route path='' element={<DashboardPage />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
