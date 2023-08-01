import usePacientes from "../hooks/usePacientes"

const Paciente = ({nombre,propietario,telefono,sintomas,id}) => {

    const {setPaciente,eliminarPacientes} = usePacientes()
    return (
        <div className='bg-white p-5 border-b-2'>
            <p>{nombre}</p>
            <p>{propietario}</p>
            <p>{telefono}</p>
            <p>{sintomas}</p>
            <div className='flex justify-between mt-4'>
                <button 
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={()=> eliminarPacientes(id)}
                >
                    Eliminar
                </button>
                <button 
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                    onClick={()=>setPaciente({
                        nombre,
                        propietario,
                        telefono,
                        sintomas,
                        id
                    })}
                >
                    Editar
                </button>
            </div>
        </div>
    )
}

export default Paciente