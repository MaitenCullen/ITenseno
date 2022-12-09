
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { getUser, postUser, profile } from "../utilities/servicies";


  

const Register = () => {
  let navigate = useNavigate()
  const context = useContext(UserContext)
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data,"register!!!")
    await postUser(data)
    .then ((resp) => { 
    console.log(resp, "el registrer")
     if(resp) {
          getUser(data)
            .then ((resp) => { 
                if(resp) {
                    context.addUsername(resp)
                    console.log(resp, "la data usuario") 
                    localStorage.setItem('id', resp._id)            
                    navigate('/Profile')             
                }})           
     }})
     
  }

  return (
    <div className="register">
            <div className="login">
        <div className="login-wraper res-mobile">
            <div className="login-wraper-form res-form">
                <h4>Crea tu cuenta</h4>
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
                    <label htmlFor="email">
                        <input 
                            type="text" 
                            name="email"
                            placeholder="Correo electronico"
                            {...register("email", {
                                required: true
                            })}
                        />
                        {errors.email?.type === 'required' && <p className="form-error">Este dato es requerido</p>}
                    </label>
                    <label htmlFor="password">
                        <input 
                            type="password"
                            name="password" 
                            placeholder="Contraseña (más de 8 caracteres)"
                            {...register("password" ,{
                                required: true,
                                minLength: {
                                  value: 8, 
                                  message: 'La contraseña tiene que al menos 8 caracteres'
                                  }
                            })}
                        />
                        {errors.password?.type === 'required' && <p className="form-error">Este dato es requerido</p>}
                    </label>
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
                    <div  className="btn-register">
                        <button >REGISTRATE</button>
                    </div>
                    <p>¿Ya tienes cuenta?</p>
                <div className="login-form-foot btn-register">
                    <button>INGRESAR</button>
                </div>
                </form>
            
            </div>
            <div className="login-wraper-img">
                <img src="./img/register.png" alt="imagen registro" />
                <p>Bienvenid@! Somos una linda comunidad, no tenemos nunca nada en certeza, pero vamos poniendo todo en duda. En el camino aprendemos un montón. Te esperamos, seguro tenemos mucho para aportar.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register