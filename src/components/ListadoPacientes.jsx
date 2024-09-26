import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
   
  console.log(pacientes)
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        
        {pacientes && pacientes.length ? (
          <>
              <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>

              {pacientes.map( (paciente) => {

              return(
                <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente = {eliminarPaciente}
                 />
              )
            } )}

        </>

        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold">y apareceran aqui</span>
            </p>
          </>
        )}

        

        
        
        

        
    </div>
  )
}

export default ListadoPacientes