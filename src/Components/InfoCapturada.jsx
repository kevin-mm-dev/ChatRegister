import React,{Fragment} from 'react'

const InfoCapturada = ({ info,usuario}) => {
    return (
        <div className="row-info-capturada">

        <div className="info-capturada">
            {info.map((title,index) =>{
                return(
                    <div key={index}>
                        {title==='nombre' && 
                            <p className="mb-0"> <b>Nombre: </b>{usuario.nombre} {usuario.segundoNombre} {usuario.apellidoPaterno} {usuario.apellidoMaterno} </p>
                        }
                        {title==='fechaNacimiento' && 
                            <p className="mb-0"> <b>Fecha de Nacimiento: </b>{usuario.fechaNacimiento} </p>
                        }
                        {title==='contacto' && 
                            <Fragment>
                                <p className="mb-0"> <b>Correo electrónico: </b>{usuario.email} </p>
                                <p className="mb-0"> <b>Teléfono: </b>{usuario.telefono} </p>
                            </Fragment>
                        }
                    </div>
                )
            })}
        </div>
        </div>

     );
}
 
export default InfoCapturada;