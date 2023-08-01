import { createContext,useState } from "react";

const PacientesContext = createContext();

const PacientesProvider = ({children}) => {
    
    const [pacientes, setPacientes] = useState([])
    const [paciente,setPaciente] = useState({})
    
    const agregarPaciente = paciente => {
        setPacientes([...pacientes, paciente])
    }

    const editarPaciente = paciente => {
        const pacientesEditar = pacientes.map(pacienteState=>pacienteState.id === paciente.id ? paciente : pacienteState)
        setPacientes(pacientesEditar)
    }

    const eliminarPacientes = pacienteId =>{
        const pacientesEliminados = pacientes.filter(pacienteState=>pacienteState.id !== pacienteId)
        setPacientes(pacientesEliminados)
    }
    

    return (
        <PacientesContext.Provider value={ {
            agregarPaciente,
            pacientes,
            paciente,
            editarPaciente,
            setPaciente,
            eliminarPacientes
        } }>
        {children}
        </PacientesContext.Provider>
    )
}

export {PacientesContext}

export default PacientesProvider