import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import InfoCapturada  from './Components/InfoCapturada';
import ListaUsuarios from './Components/ListaUsuarios'
import FormNombre from './Components/FormNombre'
import FormFechaNacimiento from './Components/FormFechaNacimiento'
import FormContacto from './Components/FormContacto'
import HeaderForm from './Components/HeaderForm';

function App() {

  const [steps, setSteps] = useState({
    nombre:false,
    fechaNacimiento:false,
    contacto:false,
    finalizado:false,
  })


  const [usuario, setUsuario] = useState({
    nombre: '',
    segundoNombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
  })

  const [usuarios, setUsuarios] = useState([])
  const [isListo, setIsListo] = useState(false)

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getUsuarios =async () => {
      const usuariosGuardados =localStorage.getItem('usuarios');
      if (usuariosGuardados) {
        setUsuarios(JSON.parse(usuariosGuardados))
      }else{
        setUsuarios([])
      }

      await fetch('http://localhost:9000/api/status-table')
      .then(res => res.json())
      .then(res => {
        if (res.Message=== "Error") {
          setUsuarios([])
          fetch('http://localhost:9000/api/create-table')
          .then(res => res.json())
          .then(res => {
            console.log('res',res);
          })

        }else{
          fetch('http://localhost:9000/api')
          .then(res => res.json())
          .then(res => {
            setUsuarios(res)
            console.log('res get',res);
          })
        }
      })
    }
    getUsuarios()

    setListUpdated(false)
  }, [listUpdated])

  const guardarEnBD=() =>{
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(usuario)
    }
    fetch('http://localhost:9000/api', requestInit)
    .then(res => res.text())
    .then(res => console.log(res))
  }

  const guardarUsuarios=()=>{
    let newUsers=usuarios;
    newUsers.push(usuario);
    window.localStorage.setItem('usuarios',JSON.stringify(newUsers))
    guardarEnBD();
    setListUpdated(true);
    setIsListo(true);
    console.log('guardado',newUsers);
  }

  return (
    <Fragment>
      <Navbar brand='Chat Register'/>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 style={{textAlign: 'center'}}>Lista de Usuarios</h2>
            <ListaUsuarios usuarios={usuarios} />
          </div>
          <div className="col-6 chat-register border mt-2 mb-2">
            <HeaderForm/>
            <FormNombre steps={steps} setSteps={setSteps} usuario={usuario}  setUsuario={setUsuario}/>
            {steps.nombre && <FormFechaNacimiento  steps={steps} setSteps={setSteps} usuario={usuario}  setUsuario={setUsuario}/>}
            {steps.fechaNacimiento && <FormContacto  steps={steps} setSteps={setSteps} usuario={usuario}  setUsuario={setUsuario}/>}
            {steps.contacto && 
              <div>
                <p className="txt-confirmar">Si tus datos son correctos por favor continuemos.</p>
                <div  className='p-4'>
                  <button className='btn-iniciar' onClick={guardarUsuarios}>Iniciar</button>
                </div>
              </div>
            }
            {isListo && <InfoCapturada info={['nombre' , 'fechaNacimiento' , 'contacto']} usuario={usuario} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
