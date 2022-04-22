
import './App.css'
import {Form,Input} from './componants/form'
import {useContext} from 'react'
import {ThemeContext} from './contexts/themecontext'
import {Navbar} from './componants/navbar'
function App() {
 const {theme}=useContext(ThemeContext)
  return (
    <div className="App">
      <Navbar/>
     <Form id={theme}>
       <Input id={theme} type="text" placeholder='Write your name'/>
       <br></br>
      <Input id={theme} type="text" placeholder="Write password"/>
       <br></br>
      <Input id={theme} type="submit" />
     </Form>
        
        
    </div>
  )
}

export default App
