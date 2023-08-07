import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import PageContainer from "./containers/PageContainer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {


  return (
    <div>
      <PageContainer>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route index element={<Home/>} />
   </Routes>
   </BrowserRouter>
   </PageContainer>
    </div>
  )
}

export default App
