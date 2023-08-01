import Header from "./components/Header"
import ListaPacientes from "./components/ListaPacientes"
import AgregarPaciente from "./components/AgregarPaciente"

const App = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto md:flex gap-10">
                <AgregarPaciente />
                <ListaPacientes />
            </div>
        </>
    )
}

export default App