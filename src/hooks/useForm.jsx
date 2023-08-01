import { useState,useEffect } from "react"
import { generarId } from "../helpers/generarId"
import usePacientes from "./usePacientes"

const useForm = () => {

    // hook personalizado de pacientes
    const {paciente,editarPaciente,setPaciente,agregarPaciente} = usePacientes()

    // state del formulario
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')

    // funcion para manejar el submit del formulario
    const handleSubmit = e => {
        e.preventDefault()
        if([nombre, propietario, telefono, sintomas].includes('')){
            alert('Todos los campos son obligatorios')
            return
        }
        // objeto paciente: maneja lo que se renderiza en pantalla
        const objPaciente = {nombre, propietario, telefono, sintomas}
        
        if(paciente.id){
            // Editando
            objPaciente.id = paciente.id // agregar id del paciente que se esta editando 
            editarPaciente(objPaciente)
            setPaciente({})
        }else{
            // Agregar
            objPaciente.id = generarId() //agregar id cuando se agrega un paciente
            agregarPaciente(objPaciente)
        }
        // limpiar formulario
        setNombre('')
        setPropietario('')
        setTelefono('')
        setSintomas('')
    }


    useEffect(()=>{
        // cuando clickeamos el boton editar, se llena un objeto paciente
        if(paciente.id){
            // Editando
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setTelefono(paciente.telefono)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    return{
        nombre,
        propietario,
        telefono,
        sintomas,
        setNombre,
        setPropietario,
        setTelefono,
        setSintomas,
        handleSubmit
    }
}

export default useForm