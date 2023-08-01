import useForm from "../hooks/useForm"
import Formulario from "./Formulario"

const AgregarPaciente = () => {

    const {nombre, propietario, telefono, sintomas, setNombre, setPropietario, setTelefono, setSintomas, handleSubmit} = useForm()

    return (
        <div className="md:w-2/5 p-5 md:p-0">
            <h2 className="text-2xl font-bold mb-4 text-center">Agregar Paciente</h2>
            <Formulario
                nombre={nombre}
                propietario={propietario}
                telefono={telefono}
                sintomas={sintomas}
                setNombre={setNombre}
                setPropietario={setPropietario}
                setTelefono={setTelefono}
                setSintomas={setSintomas}
                handleSubmit={handleSubmit}
            />

        </div>
    )
}

export default AgregarPaciente