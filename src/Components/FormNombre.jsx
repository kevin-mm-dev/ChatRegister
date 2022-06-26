import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import InfoCapturada  from './InfoCapturada';
const FormNombre = ({steps, setSteps,usuario, setUsuario}) => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    
    const onSubmit =(data) => {
        setUsuario({...data})
        setSteps({...steps,nombre:true});
    }
    
    return ( 
        <Fragment>
            <div className="form">
                <div>
                    <img src="../images/img-pefil.jpeg" alt="logo" className="img-chat"/>
                </div>
                <div className="preguntas">

                <h5>¿Cuál es tu nombre?</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="form-floating">
                            <input disabled={steps.nombre} type="text" className="form-control" id="nombre"  placeholder="Nombre"
                            {...register('nombre',{
                                required: true,
                                maxLength: 50,
                            })}
                            />
                            <label htmlFor="nombre">Nombre</label>
                        </div>
                        <span className="text-danger text-samll d-block mb-2">
                            {errors?.nombre?.type ==='required' && <p>El campo 'Nombre' es requerido</p>}
                            {errors?.nombre?.type ==='maxLength' && <p>El campo 'Nombre' debe tener máximo 50 caracteres</p>}
                        </span>
                    </div>
                    <div>
                        <div className="form-floating">
                            <input disabled={steps.nombre} type="text" className="form-control" id="segundoNombre"  placeholder="Segundo Nombre"
                            {...register('segundoNombre',{
                                required: true,
                            })}
                            />
                            <label htmlFor="segundoNombre">Segundo Nombre</label>
                        </div>
                        <span className="text-danger text-samll d-block mb-2">
                            {errors?.segundoNombre?.type ==='required' && <p>El campo 'Segundo Nombre' es requerido</p>}

                        </span>
                    </div>
                    <div>
                        <div className="form-floating">
                            <input disabled={steps.nombre} type="text" className="form-control" id="apellidoPaterno"  placeholder="Apellido Paterno"
                            {...register('apellidoPaterno',{
                                required: true
                            })}
                            />
                            <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                        </div>
                        <span className="text-danger text-samll d-block mb-2">
                            {errors?.apellidoPaterno?.type ==='required' && <p>El campo 'Apellido Paterno' es requerido</p>}
                        </span>
                    </div>
                    <div>
                        <div className="form-floating">
                            <input disabled={steps.nombre} type="text" className="form-control" id="apellidoMaterno"  placeholder="Apellido Paterno"
                            {...register('apellidoMaterno',{
                                required: true
                            })}
                            />
                            <label htmlFor="apellidoMaterno">Apellido Materno</label>
                        </div>
                        <span className="text-danger text-samll d-block mb-2">
                            {errors?.apellidoMaterno?.type ==='required' && <p>El campo 'Apellido Materno' es requerido</p>}
                        </span>
                    </div>
                    {!steps.nombre&& <input type="submit" className="btn-siguiente" value="Siguiente"/>}
                </form>
                </div>

            </div>
            {steps.nombre && <InfoCapturada info={['nombre']} usuario={usuario}/> }
        </Fragment>
     );
}
 
export default FormNombre;