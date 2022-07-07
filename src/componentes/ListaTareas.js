import React from 'react'
import { actualizarTarea, tarminarTareaFB } from '../firebase/api'


export const ListaTareas = ({TareasGuardas,seActualizo}) => {
    
    const terminarTarea = (id)=>{
        console.log(id)
        tarminarTareaFB(id)
        seActualizo(true)
        
    }
    const editar = async(tarea,e)=>{
        if(e.target.innerHTML==="Guardar"){
            let input = document.querySelector("#actualizar"+tarea.id)
            console.log(input.value)
            await actualizarTarea(input.value,tarea.id)
            seActualizo(true)
            
        }else{
            cambiarBotones(tarea.Descripcion,tarea.id,e)
        }
    }
    const cambiarBotones = (descripcion,id,e)=>{
        let input = document.getElementById(id)
        console.log(e.target)
        e.target.innerHTML="Guardar"
        input.innerHTML=`<input id="actualizar${id}" value="${descripcion}" name="input" type="text"  className="form-control" placeholder="Agregar tarea" aria-label="Recipient's username" aria-describedby="button-addon2"/>`
    }
  return (
    <table className="table">
  <thead>
        <tr>
        <th scope="col">Tarea</th>
        <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody>
        {
        TareasGuardas.map((tarea)=>{
            console.log(tarea)
            return(tarea.Estado && 
                    <tr  key={Math.random()}>
                    <th scope="row">
                       <p className='m-3'id={tarea.id}>
                       {tarea.Descripcion}
                        </p> 
                    </th>
                    
                    <td>
                        <button type="button" className="btn btn-primary 
                        m-3" 
                        onClick={
                            (e)=>{
                            editar(tarea,e)
                            }
                        }
                        >Editar</button>
                        <button onClick={()=>{terminarTarea(tarea.id)}} type="button" className="btn btn-primary">Terminada</button>
                    </td>
                    </tr>  )
                    
                
                    
                }
        )
        }
      
        </tbody>
    </table>
  )
}




