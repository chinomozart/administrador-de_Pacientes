import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import'./Formulario.css'
import './Header.css'
import './Paciente.css'
import Header from './Header'
import Formulario from './Formulario'
import Paciente from './Paciente'



function App() {
  const[pacientes,setPacientes]=useState([])

  return (
    <div className="App">
     <div>
     <Header titulo="Crear un Paciente" className="header1"></Header>
     <Formulario 
     pacientes={pacientes} 
     setPacientes={setPacientes}></Formulario> 
     </div>
     <div>
       <Header titulo="Listado de Pacientes"></Header>
       {pacientes.map((paciente)=>{
        return <Paciente nombre={paciente.mascota} dueño={paciente.dueño} date={paciente.date} hora={paciente.hora} sintomas={paciente.sintomas}/>
       })}
     </div>     
    </div>

  
  )
}

export default App
