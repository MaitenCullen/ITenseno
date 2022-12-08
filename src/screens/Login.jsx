import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { getUser } from "../utilities/servicies";



const Login = () => {
    let navigate = useNavigate()
    const context = useContext(UserContext)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            await getUser(data)
            .then ((resp) => { 
                if(resp) {
                    context.addUsername(resp)
                    console.log(resp, "la data usuario")

                    localStorage.setItem('id', resp._id)           
                    navigate('/Profile')             
                }})
        } catch (error) {
            console.log( "no podes ingresar", error)
            alert("No estas registrado amigue")
        }
    }


  return (
    <div className="login">
        <div className="login-wraper">
            <div className="login-wraper-form">
                <h4>Inicia Sesión</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">
                        <input 
                            type="text" 
                            name="username"
                            placeholder="Nombre de Usuario"
                            {...register("username", {
                                required: true
                            })}
                        />
                        {errors.username?.type === 'required' && <p className="form-error">Este dato es requerido</p>}
                    </label>
                    <label htmlFor="password">
                        <input 
                            type="password"
                            name="password" 
                            placeholder="Su contraseña"
                            {...register("password" ,{
                                required: true
                            })}
                        />
                        {errors.email?.type === 'required' && <p className="form-error">Este dato es requerido</p>}
                    </label>
                    <div>
                        <p>¿Has olvidado tu contraseña?</p><p>Recuperar</p>
                    </div>
                    <label htmlFor="checkTerms">
                        <div>
                            <input 
                                type="checkbox"
                                name="terms" 
                                {...register("terms" ,{
                                    required: true
                                })}
                            />
                            <p>Acepto los términos y condiciones</p>
                        </div>
                        {errors.terms?.type === 'required' && <p className="form-error">Debe aceptar los términos y condiciones</p>}
                    </label>
                    <div className="login-form-foot">
                        <button>INGRESAR</button>
                    </div>
                </form>
                <div className="btn-register">
                    <p>¿Todavia no tienes cuenta?</p>
                    <button>REGISTRATE</button>
                </div>
            </div>
            <div className="login-wraper-img">
                <img src="./img/login.png" alt="" />
                <p>Que lindo verte de nuevo! Esperemos que estés con ganas de hacer y deshacer muchos saberes. Hay muchas clases y miles de tecnologías esperandote</p>
            </div>
        </div>
    </div>
  )
}

export default Login