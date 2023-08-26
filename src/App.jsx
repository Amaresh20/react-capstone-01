import AllRoutes from './AllRoutes/AllRoutes'
import './App.css'
import RightSec from './components/RightSec'
import Sidebar from './components/sidebar'
import {BrowserRouter} from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
   <AllRoutes />

   </BrowserRouter>
  )
}

export default App