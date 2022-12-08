import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import data from '../utilities/Data'
import { LinkTechnologie } from '../components/LinkTechnologie'
import { Link, useNavigate } from 'react-router-dom'
import { editProfile, getProfile, getTechnologies, logOut, postUser, profile, userHome } from "../utilities/servicies";
import { UserContext } from '../UserContext'
import { useState } from 'react'



function Profile({ props }) {


    const context = useContext(UserContext)

    let usersProfile = {}
    let userID = context.user.id


    /*useEffect(() => {
       userHome() 
      .then ((resp) => {
        usersProfile = resp.allusers
        console.log(usersProfile, "los usuarios")
        console.log( userID, "el usuario")
        const test = usersProfile.find((user) => user._id === userID)
        context.addUserProfile(test)
        console.log(user, test, "solo 1 usuario")
      })
        console.log(context, " soy el context")
    },[])*/

    const [technologie, setTechnologie] = useState([])
    
    useEffect (() => {
        getTechnologies()
        .then((resp) => {
            console.log(resp, "soy la tecnologia")
            setTechnologie(resp);

         })
    },[]);


    const [user, setUser] = useState(null)

    useEffect(() => {
        const idUser = localStorage.getItem("id")
        getProfile(idUser) 
       .then ((resp) => {
         console.log(resp);
         setUser(resp.user)
       })
         console.log(context, " soy el context")
     },[])


   
    let navigate = useNavigate()
    const { register, errors, handleSubmit } = useForm({mode: "onBlur",})
    
    const {
        register: register2,
        errors: errors2,
        handleSubmit: handleSubmit2,
      } = useForm({
        mode: "onBlur",
      });
      
      
      const {
        register: register3,
        errors: errors3,
        handleSubmit: handleSubmit3,
      } = useForm({
        mode: "onBlur",
      });

    const onSubmit = async (data, e ) => {
        console.log(data,"la LA DATA DALE ")
        data.SearchByName = user.username
        await editProfile(data)
        .then ((resp)=> {
        console.log(resp, "LA DATA")
            const idUser = localStorage.getItem("id")
            getProfile(idUser) 
        .then ((resp) => {
            console.log(resp);
            setUser(resp.user)
        })
        })
        console.log(data)
        e.target.reset()
    }
    const onSubmitText = async (data, e ) => {
        console.log(data,"EL TEXTO")
        data.SearchByName = user.username
        await editProfile(data)
        .then ((resp)=> {
        console.log(resp, "TEXTO")
            const idUser = localStorage.getItem("id")
            getProfile(idUser) 
        .then ((resp) => {
            console.log(resp);
            setUser(resp.user)
        })
        })
        console.log(data)
        e.target.reset()
    }
    const onSubmitPassword = async (data, e ) => {
        console.log(data,"la contraseña")
        await profile(data)
        .then ((resp)=> {
        console.log(resp, "CONTRASEÑA")
        })
        console.log(data)
        e.target.reset()
    }

    const handleChange = (event) => {
        console.log(event.target.value);
    }

    return (

        <div className='divProfile'>
            {user && <div className='divInfo'>
            <h3 className='nameProfile'>Hola, {user.username}!</h3>
            <div className='divInfoData'>
                <h5> INFORMACION PERSONAL</h5>
                <Link style={{ textDecoration: 'none', color: 'black', borderTop:'1px solid #D9D9D9'}} >Tus clases</Link>
                <Link style={{ textDecoration: 'none', color: 'black', borderTop:'1px solid #D9D9D9'}} onClick={ async ()=> await logOut() .then (() => navigate('/')) }>Salir</Link>
                <Link>XXXXX</Link>
            </div>
            </div>}        
            {user && <div className='divProfileData'>
            <h3>INFORMACION PERSONAL</h3> 
            <div className='divInside divBasicInformation'>
                <h3>Información Básica</h3>
                <img src='./img/profile.png' />
                <h5>Editar</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <input
                            type="text"
                            name='firstName'
                            placeholder='Nombre'
                            defaultValue={user.firstName?user.firstName : null }
                            {...register("firstName", { required: true })} />
                    </label>
                    <label>
                        <input
                            type="text"
                            name='lastName'
                            placeholder='Apellidos'
                            defaultValue={user.lastName?user.lastName : null }
                            {...register("lastName", { required: true })} />
                    </label>
                    <label>
                        <input
                            type="email"
                            name='email'
                            placeholder='Correo Electronico'
                            defaultValue={user.email?user.email : null} 
                            {...register("email", { required: true })} />
                    </label>
                    <label>
                        <input
                            type="text"
                            name='tech'
                            placeholder='Rol IT'
                            defaultValue={user.tech?user.tech : null }
                            {...register("tech", { required: true })} />
                    </label>
                    
                    <label htmlFor='username'>
                        <input
                            type="text"
                            name="username"
                            placeholder='Usuario'
                            defaultValue={user.username?user.username : null} 
                            onChange={handleChange}
                            {...register("username", { required: true })} />
                    </label>
                    <button type="submit" className="buttonProfile">
                        Guardar
                    </button>
                </form>
            </div>
            <div className='divTechnologies'>
                <h4>Elige tus principales tecnologías</h4>
                <div className="section-technologies__list">
                    {technologie.map(item => (<LinkTechnologie key={item.id} title={item.name} />))}
                </div>
    </div>
            <div className='divInside divAbout'>
                <h4>
                    Acerca de mi
                </h4>
            <div>
                 <h5>
                    Cuentanos sobre tí y tu experiencia IT
                </h5>
                <form onSubmit={handleSubmit2(onSubmitText)}>
                    <label>
                        <textarea name="textarea" className='textArea' placeholder="Escribe aquí..."
                        defaultValue={user.aboutMe?user.aboutMe : null }
                        {...register2("aboutMe", { required: true })} 
                        />
                    </label>
                    <button type="submit" className="buttonProfile">
                        Guardar
                    </button>
                </form>
                
            </div>
            </div>
            <div className='divInside divPassword'>
                <h4>
                    Configuración de la contraseña
                </h4>
                <form onSubmit={handleSubmit3(onSubmitPassword)}>
                    <label>
                        <input
                            type="password"
                            name='password'
                            minlenght='10'
                            required
                            placeholder="Contraseña actual"
                            {...register3("password", {
                               
                            })} />
                    </label>
                    <label>
                        <input
                            type="password"
                            name='Newpassword'
                            minlenght='10'
                            required
                            placeholder="Nueva Contraseña"
                            {...register3("Newpassword", {
                                
                            })} />
                    </label>
                   <label>
                        <input
                            type="password"
                            name='Confirmpassword'
                            minlenght='10'
                            required
                            placeholder="Confirmar la nueva contraseña"
                            {...register3("Confirmpassword", {
                                required: true
                            })} />
                        </label>
                    <button type="submit" className="buttonProfile">
                        Guardar
                    </button>
                </form>
            </div>
            <div className='divInside divDelete'>
                    <h4>
                        Eliminar cuenta
                    </h4>
                    <div className='divText'>
                    <p> ¿Seguro quieres eliminar tu cuenta de ITenseño? </p> 
                   <p> Al eliminar la cuenta, toda tu información, tus clases y los datos asociados a tu cuenta se eliminarán.Esta acción no se puede deshacer.
                    </p> 
                    <p className='deleteText'>Quiero eliminar mi cuenta</p>
                    </div>                 
            </div>
            </div>}
        </div>
    )
}
 export default Profile;