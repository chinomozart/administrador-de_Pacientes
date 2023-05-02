import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import'./Formulario.css'
import './Header.css'
import Header from './Header'
import Formulario from './Formulario'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div>
    <Header titulo="Crear un Paciente"></Header>
    <Formulario ></Formulario> 
     </div>
     <div>
     <Header titulo="Listado de Pacientes"></Header>
     </div>     
    </div>
  
  )
}

export default App
