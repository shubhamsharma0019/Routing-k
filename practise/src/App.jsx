import Dashbord from"./components/Dashbord"
import Landing from "./components/Landing"
import {BrowserRouter,Routes,Route,useNavigate} from "react-router-dom"
import './App.css'
 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar/>
        <Routes>
           <Route path="/dashbord" element ={<Dashbord/>}/>
           <Route path="/" element ={<Landing/>}/>
        </Routes>   
      </BrowserRouter>
    </div>
   
  )
}
function Appbar(){
  const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>{
          navigate('/');
        }}>Landing page</button>
        <button onClick={()=>{
          navigate('/dashbord')
        }}>Dashbord page</button>
    </div>
  )
}

export default App
