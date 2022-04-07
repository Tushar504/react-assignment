import img from "./download.png"
import './App.css';

function App() {
  let link=["Services","Projects","About"]
  return (
    <div className="App">
     <Logo  src={img} />
     <Links data={link}></Links>
     <Button></Button>
    </div>
  );
}
const Logo=({src})=>{
  return <img src={src} className="logo" alt="missing"/>
}
const Links=({data})=>{
  return <div id="links">{data.map((e)=>{
    return <a href="http://localhost:3000/">{e}</a>
  })}</div>
}
const Button=()=>{
  return <button>Contact</button>
}
export default App;
