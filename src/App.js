import './App.css';
import React,{useState} from "react"

function App() {
  const [nombre, setNombre] = useState(0)
  const [bolean, setBolean] = useState(true)
  return (
    <div className="App">
      <p className={bolean ? "": "red"}>
        {nombre}
      </p>
      <button onClick={()=>{
       setNombre(nombre+1)
      }}>
        +1
      </button>


      <button onClick={()=>{
       setNombre(nombre-1)
      }}>
        -1
      </button>


      <button onClick={()=>{
        setBolean(!bolean)
        console.log(bolean);
      }}>
        red
      </button>
    </div>
  );
}

export default App;
