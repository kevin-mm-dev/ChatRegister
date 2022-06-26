import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import InfoCapturada  from './InfoCapturada';
const FechaNacimiento = ({steps, setSteps,usuario, setUsuario}) => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    
    const onSubmit =(data) => {
        setUsuario({...usuario,telefono:data.telefono,email:data.email});
        setSteps({...steps,contacto:true});
    }
    
    return ( 
        <Fragment>
            <div className="form">
                <div>
                    <img src="../images/img-pefil.jpeg" alt="logo" className="img-chat"/>
                </div>
                <div className="preguntas">

                <h5>Datos de contacto</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <div>
                        <label>Email</label>
                            <input type="text" {...register('email',{
                                // required: true,
                                required: "This is required message",
                            })} />
                        {errors?.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                        {errors?.email?.type ==='required' && <p>El campo Email es requerido</p>}
                    </div> */}
                    <div>
                        <div className="form-floating">
                            <input disabled={steps.contacto} type="email" className="form-control" id="email"  placeholder="Nombre"
                            {...register('email',{
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                            })}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <span className="text-danger text-samll d-block mb-2">
                            {errors?.email?.type ==='required' && <p>El campo 'Email' es requerido</p>}
                            {errors?.email?.type === 'pattern' && <p>El formato del 'Email' es incorrecto</p>}
                        </span>
                    </div>
                    <div>
                        <div className="form-floating">
                            <input disabled={steps.contacto} type="number" className="form-control" id="telefono"  placeholder="Segundo Nombre"
                            {...register('telefono',{
                                required: true,
                                maxLength:16
                            })}
                            />
                            <label htmlFor="telefono">Teléfono</label>
                        </div>
                        <span className="text-danger text-samll d-block mb-2">
                            {errors?.telefono?.type ==='required' && <p>El campo 'Teléfono' es requerido</p>}
                            {errors?.telefono?.type ==='maxLength' && <p>El campo 'Teléfono' debe tener máximo 50 caracteres</p>}
                        </span>
                    </div>
                    {!steps.contacto&& <input type="submit" className="btn-siguiente" value="Siguiente"/>}
                </form>
                </div>

            </div>
            {steps.contacto && <InfoCapturada info={['contacto']} usuario={usuario}/> }
        </Fragment>
     );
}
 
export default FechaNacimiento;