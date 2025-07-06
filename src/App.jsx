import Navbar from "./components/Navbar"
import Content from "./components/Content"
import { useState } from "react"


function App() {
  
  const [category, setCategory] = useState('general')
  return (
    <>
      <Navbar setCategory={setCategory}></Navbar>
      <Content category={category}></Content>
    </>
  )
}

export default App
