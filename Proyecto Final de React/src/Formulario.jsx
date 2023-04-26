import React from "react";
import { useState } from "react";





export default function Formulario(){
    const[pacientes,setPacientes]=useState([])
    const[mascota,setMascota]=useState("")
    const[dueño,setDueño]=useState("")
    const[date,setDate]=useState("")
    const[hora,setHora]=useState("")
    const[sintomas,setSintomas]=useState("")

    function agregarpaciente(){
        const informacion={
            mascota,
            dueño,
            date,
            hora,
            sintomas,
        }
        setPacientes([...pacientes,informacion,date,hora,sintomas])
        setMascota("")
        setDueño("")
        setDate("")
        setHora("")
        setSintomas("")
    }


    return(
        <div>
         <form className="inputform" action="">
            <label htmlFor="" className="mascota">Nombre Mascota</label>
            <input onChange={(e)=>{setMascota(e.target.value)}} value={mascota} type="text"></input>
            <label htmlFor="" className="dueño"> Nombre Dueño</label>
            <input onChange={(e)=>{setDueño(e.target.value)}} value={dueño} type="text"></input>
            <label htmlFor="" className="date">Fecha</label>
            <input  className="" onChange={(e)=>{setDate(e.target.value)}} value={date} type="date"></input>
            <label htmlFor="" className="hora">Hora</label>
            <input onChange={(e)=>{setHora(e.target.value)}} value={hora} type="time"></input>
            <label htmlFor="" className="sintomas">Sintomas</label>
            <input onChange={(e)=>{setSintomas(e.target.value)}} value={sintomas} type="text"></input>
            <button onClick={agregarpaciente} className="boton1"  type="button">Agregar Cita</button>
            

         </form>
        </div>

    )
}