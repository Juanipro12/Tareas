import { addDoc,collection,doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "./config"

const col = collection(db,"tareas")

export const guardaTareaFB = (Tarea)=>{
    const respuesta = addDoc(col,Tarea)
    return respuesta
}

export const obtenerTareas = async()=>{
    const respuesta = await getDocs(col)
    const docs = [];
    respuesta.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      return docs
}

export const tarminarTareaFB = async(id)=>{
    await updateDoc(doc(col, id),{
        Estado: false
      })
}
export const actualizarTarea = async(nombreNuevo,id)=>{
    await updateDoc(doc(col, id),{
        Descripcion: nombreNuevo
      })
}