 
import { Route, Routes } from "react-router-dom"
import { Router } from "./router/Routing"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function App() {


  return (
    <>
    <Header /> 
    <Routes >
        {
          Router.map((route) =>{
            return(

              <Route key={route.id} path={route.path} element={route.components} />
            )
          })
        }
      </Routes>
      <Footer />
    </>
  )
}

export default App
