import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import data from '../utilities/Data'
import { LinkTechnologie } from '../components/LinkTechnologie'
import { Link } from 'react-router-dom'



function Profile({ props }) {

    const { register, errors, handleSubmit } = useForm()



    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
        
    }

    return (
        <div className='divProfile'>
            <div className='divInfo'>
            <h3 className='nameProfile'>Hola,{}!</h3>
            <div className='divInfoData'>
                <h5> INFORMACION PERSONAL</h5>
                <Link style={{ textDecoration: 'none', color: 'black', borderTop:'1px solid #D9D9D9'}}>Tus clases</Link>
                <Link style={{ textDecoration: 'none', color: 'black', borderTop:'1px solid #D9D9D9'}}>Salir</Link>
                <Link>XXXXX</Link>
            </div>
            </div>        
            <div className='divProfileData'>
            <h3>INFORMACION PERSONAL</h3> 
            <div className='divInside divBasicInformation'>
                <h3>Información Básica</h3>
                <img src='./public/img/profile.png' />
                <h5>Editar</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='username'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Nombre y Apellido'
                            {...register("name", { required: true })} />
                    </label>
                    <label>
                        <input
                            type="email"
                            name='email'
                            placeholder='Correo Electronico'
                            {...register("email", { required: true })} />
                    </label>
                    <label>
                        <input
                            type="text"
                            name='RolIT'
                            placeholder='Rol IT'
                            {...register("RolIT", { required: true })} />
                    </label>
                    <label>
                        <input
                            type="text"
                            name='XXX'
                            placeholder='XXX'
                            {...register("XXX", { required: true })} />
                    </label>
                    <button type="submit" className="buttonProfile">
                        Guardar
                    </button>
                </form>
            </div>
            <div className='divTechnologies'>
                <h4>Elige tus principales tecnologías</h4>
                <div className="section-technologies__list">
                    {data.map(item => (<LinkTechnologie key={item.id} title={item.name} />))}
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
                <form>
                    <label>
                        <textarea name="textarea" rows="4" cols="60" placeholder="Escribe aquí..."/>
                    </label>
                
                </form>
                <button type="submit" className="buttonProfile">
                        Guardar
                </button>
            </div>
            </div>
            <div className='divInside divPassword'>
                <h4>
                    Configuración de la contraseña
                </h4>
                <form>
                    <label>
                        <input
                            type="password"
                            name='password'
                            minlenght='10'
                            required
                            placeholder="Contraseña actual"
                            {...register("password", {
                                required: true
                            })} />
                    </label>
                    <label>
                        <input
                            type="password"
                            name='Newpassword'
                            minlenght='10'
                            required
                            placeholder="Nueva Contraseña"
                            {...register("Newpassword", {
                                required: true
                            })} />
                    </label>
                    <label>
                        <input
                            type="password"
                            name='Confirmpassword'
                            minlenght='10'
                            required
                            placeholder="Confirmar la nueva contraseña"
                            {...register("Confirmpassword", {
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
            </div>
        </div>
    )
}
 export default Profile;