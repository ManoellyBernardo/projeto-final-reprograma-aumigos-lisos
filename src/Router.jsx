import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Saude from "./pages/Saude"
import Lazer from "./pages/Lazer"
import Dye from "./pages/Dye"
import Contribua from "./pages/Contribua"
import Sobre from "./pages/Sobre"

const Router = () => {
  return (
    <BrowserRouter>
      < Menu />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/saude" element={< Saude />}></Route>
        <Route path="/lazer" element={< Lazer />}></Route>
        <Route path="/dyes" element={< Dye />}></Route>
        <Route path="/contribuicao" element={< Contribua />}></Route>
        <Route path="/quemsoueu" element={< Sobre />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router