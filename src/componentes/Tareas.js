import React, { useState } from 'react'
import { guardaTareaFB } from '../firebase/api'

export const Tareas = ({onGuardo}) => {
  const [InputVacio, setinputVacio] = useState(true)
  const [Guardo, setguardo] = useState(false)
  const guardarTarea = async(e)=>{
    e.preventDefault()
    const Tarea={
      Descripcion:e.target.input.value,
      Estado:true
    }
    const respuesta= await guardaTareaFB(Tarea)
    onGuardo(true)
    console.log(respuesta.id)
    Tarea['id']=respuesta.id
    setguardo(true)
    setTimeout(()=>setguardo(false),2000)
    e.target.input.value=""
    setinputVacio(true)
  }
  return (
    <form onSubmit={guardarTarea}>
      <div className="input-group m-3">
          <input name="input" type="text" onChange={(e)=>{e.target.value!==""?setinputVacio(false):setinputVacio(true)}} className="form-control" placeholder="Agregar tarea" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button disabled={InputVacio} className="btn btn-outline-secondary" type="submit" id="button-addon2">Agregar</button>
      </div>
      {Guardo && <div className="alert alert-success" role="alert">
       Guardado con exito
      </div>}
      
    </form>
  )
}
