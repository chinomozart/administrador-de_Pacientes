import React from "react";
import './Paciente.css'


export default function Paciente({pacientes,setPacientes,nombre,dueño,date,hora,fecha,sintomas}){
    const eliminarCita=()=>{
        const newPacientes=pacientes.filter(paciente=>paciente.dueño !=dueño)
        setPacientes(newPacientes)
    }
    return (
    <section className="pacienteConatainer">
        <h2>Nombre:{nombre}</h2>
        <h2>Dueño:{dueño}</h2>
        <h2>Fecha:{date}</h2>
        <h2>Hora:{hora}</h2>
        <h2>sintomas:{sintomas}</h2>

        <button className="button2" onClick={eliminarCita}>Eliminar Cita</button>
    </section>
    )
}