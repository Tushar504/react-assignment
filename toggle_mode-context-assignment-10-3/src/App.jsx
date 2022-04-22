

import './App.css'
import {Body} from "./componants/body"
import {H1} from "./componants/h1"
import {Img} from './componants/img'
import {Navbar} from "./componants/navbar"
import {useContext} from 'react'
import {ThemeContext} from "./contexts/themeContext"
function App() {
  const {theme}=useContext(ThemeContext)

  return (
    <div className="App">
      <Navbar/>
        <Body id={theme} >
          <Img src='https://qwesys.com/wp-content/uploads/2020/02/web.gif'/>
          <H1 id={theme}>Web Developer</H1>
        </Body>
        
          
           
    </div>
  )
}

export default App
