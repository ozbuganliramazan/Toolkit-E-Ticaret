import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import PageContainer from "./containers/PageContainer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Card from "./pages/Card";


function App() {


  return (
    <div>
      <PageContainer>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products/:id" element={<Detail/>} />
    <Route path="/card" element={<Card/>} />
   </Routes>
   </BrowserRouter>
   </PageContainer>
    </div>
  )
}

export default App
