import usePacientes from "../hooks/usePacientes"
const Formulario = ({nombre, propietario, telefono, sintomas, setNombre, setPropietario, setTelefono, setSintomas, handleSubmit}) => {

    const {paciente} = usePacientes()
    return (
        <>
            <form
                className="bg-white p-5 shadow-md"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nombre"
                        type="text"
                        placeholder="Nombre Paciente"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propietario">Propietario</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="propietario"
                        type="text"
                        placeholder="Nombre Propietario"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">Teléfono</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="telefono"
                        type="tel"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sintomas">Sintomas</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                        id="sintomas"
                        placeholder="Sintomas"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <input
                    type="submit"
                    className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </>
    )
}

export default Formulario