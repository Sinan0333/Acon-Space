
import PageFour from "./components/PageFour"
import PageThree from "./components/PageThree"
import PageTwo from "./components/PageTwo"
import PageOne from "./components/PageOne"
import { Route, Routes } from "react-router-dom"


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/company-details" element={<PageTwo />} />
        <Route path="/company-documents" element={<PageThree />} />
        <Route path="/confirm-details" element={<PageFour />} />
      </Routes>
    </div>
      
  )
}

export default App
