import { BrowserRouter, Route, Routes } from "react-router-dom"
import Axios from "./pages/Axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import Fetch from "./pages/Fetch"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Axios/>}/>
          <Route path="/fetch" element={<Fetch/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
