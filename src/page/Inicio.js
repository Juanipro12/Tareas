import React, { useEffect, useState } from 'react'
import { ListaTareas } from '../componentes/ListaTareas'
import { Tareas } from '../componentes/Tareas'
import { obtenerTareas } from '../firebase/api'

const Inicio = () => {
    
    const [TareasGuardas, settareas] = useState([])
    const [Cambio, setcambio] = useState(false)

    useEffect(()=>{
        cargarTareas()
        setcambio(false)
    },[Cambio])
    const cargarTareas = async()=>{
        const respuesta= await obtenerTareas()
        settareas(respuesta)
    }
  return (
    <>
    <Tareas onGuardo={(x)=>setcambio(x)}/>
    <ListaTareas TareasGuardas={TareasGuardas}
    seActualizo={(x)=>{setcambio(x)}} />
    </>
  )
}

export default Inicio