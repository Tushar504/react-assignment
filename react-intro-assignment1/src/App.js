
import './App.css';

function App() {
  let system=["Android","Bleckberry","iPhone","Windows Phone"]
  let manu=["Samsung","HTC","Micromax","Apple"]
 return <div className="App">
    <h1>Mobile Operating System</h1>
     <Card data={system}></Card>
     <h1>Mobile Manufacturers</h1>
     <Card data={manu}></Card>
  </div>

}
const Card=({data})=>{
  return <ul>{data.map((e)=>{
    return <li>{e}</li>
  })}</ul>
}
export default App;
