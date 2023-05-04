import React from "react";
import './Paciente.css'

export default function Paciente({nombre,dueño,date,hora,fecha,sintomas}){
    return (
    <section className="pacienteConatainer">
        <h2>Nombre:{nombre}</h2>
        <h2>Dueño:{dueño}</h2>
        <h2>Fecha:{date}</h2>
        <h2>Hora:{hora}</h2>
        <h2>sintomas:{sintomas}</h2>
    </section>
    )
}