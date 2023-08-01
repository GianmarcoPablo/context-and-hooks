import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente"

const ListaPacientes = () => {

    const {pacientes} = usePacientes()

    return (
        <div className="md:w-3/5 p-5 md:p-0">
            <h2 className="text-2xl font-bold mb-4 text-center">Lista de Pacientes</h2>

            {pacientes.length === 0 ? (
                <p className="text-center">No hay pacientes</p>
            ):(
                pacientes.map(paciente=>(
                    <Paciente
                        key={paciente.id}
                        {...paciente}
                    />
                ))
            )}
        </div>
    )
}

export default ListaPacientes