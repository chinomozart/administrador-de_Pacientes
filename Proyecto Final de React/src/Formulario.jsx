import React from "react";
import { useState } from "react";





export default function Formulario(){
    const[pacientes,setPacientes]=useState([])
    const[mascota,setMascota]=useState("")
    const[dueño,setDueño]=useState("")

    function agregarpaciente(){
        const informacion={
            mascota,
            dueño
        }
        setPacientes([...pacientes,informacion])
        setMascota("")
        setDueño("")
    }


    return(
        <div>
         <form className="inputform" action="">
            <label htmlFor="" className="mascota">Nombre Mascota</label>
            <input onChange={(e)=>{setMascota(e.target.value)}} value={mascota} type="text"></input>
            <label htmlFor="" className="dueño"> Nombre Dueño</label>
            <input onChange={(e)=>{setDueño(e.target.value)}} value={dueño} type="text"></input>
            <button onClick={agregarpaciente} className="boton1"  type="Submit">Agregar</button>

         </form>
        </div>

    )
}