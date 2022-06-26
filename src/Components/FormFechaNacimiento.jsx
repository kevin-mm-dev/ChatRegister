import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import InfoCapturada  from './InfoCapturada';
const FechaNacimiento = ({steps, setSteps,usuario, setUsuario}) => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    
    const onSubmit =(data) => {
        const newFecha=data.dia+ ' '+data.mes+ ' '+data.anio;
        setUsuario({...usuario,fechaNacimiento: newFecha});
        setSteps({...steps,fechaNacimiento:true});
    }
    
    return ( 
        <Fragment>
            <div className="form">
                <div>
                    <img src="../images/img-pefil.jpeg" alt="logo" className="img-chat"/>
                </div>
                <div className="preguntas">

                <h5>¿Cuál es tu fecha de nacimiento?</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="form-floating">
                            <input disabled={steps.fechaNacimiento} type="number" className="form-control" id="dia"  placeholder="Nombre"
                            {...register('dia',{
                                required: true,
                                maxLength: 2,
                            })}
                            />
                            <label htmlFor="dia">Dia</label>
                        </div>
                        <span className="text-danger text-samll d-block mb-2">
                            {errors?.dia?.type ==='required' && <p>El campo 'Dia' es requerido</p>}
                            {errors?.dia?.type ==='maxLength' && <p>El campo 'Dia' debe tener máximo 2 caracteres</p>}
                        </span>
                    </div>
                    <div>
                        <div className="form-floating">
                            <input disabled={steps.fechaNacimiento} type="text" className="form-control" id="mes"  placeholder="Segundo Nombre"
                            {...register('mes',{
                                required: true,
                                maxLength: 15
                            })}
                            />
                            <label htmlFor="mes">Mes</label>
                        </div>
                        <span className="text-danger text-samll d-block mb-2">
                            {errors?.mes?.type ==='required' && <p>El campo 'Mes' es requerido</p>}
                            {errors?.mes?.type ==='maxLength' && <p>El campo 'Mes' debe tener un máximo de 15 caracteres</p>}
                        </span>
                    </div>
                    <div>
                        <div className="form-floating">
                            <input disabled={steps.fechaNacimiento} type="number" className="form-control" id="anio"  placeholder="Apellido Paterno"
                            {...register('anio',{
                                required: true,
                                maxLength:4
                            })}
                            />
                            <label htmlFor="anio">Año</label>
                        </div>
                        <span className="text-danger text-samll d-block mb-2">
                            {errors?.anio?.type ==='required' && <p>El campo 'Año' es requerido</p>}
                            {errors?.anio?.type ==='maxLength' && <p>El campo 'Año' debe tener un máximo de 4 caracteres</p>}

                        </span>
                    </div>
                    {!steps.fechaNacimiento&& <input type="submit" className="btn-siguiente" value="Siguiente"/>}
                </form>
                </div>

            </div>
            {steps.fechaNacimiento && <InfoCapturada info={['fechaNacimiento']} usuario={usuario}/> }
        </Fragment>
     );
}
 
export default FechaNacimiento;