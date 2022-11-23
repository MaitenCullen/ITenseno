import React from 'react'
import { useForm } from 'react-hook-form'
import data from '../mock/Data'
import { LinkTechnologie } from '../components/LinkTechnologie'

const Profile = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }
  return (

    <div className='divProfile'>
        <div className='divBasicInformation'>
            <h3>Información Básica</h3>
            <img src='./public/img/profile.png'/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='username'>
                    <input
                     type="text"
                     name="name"
                     placeholder='Nombre y Apellido'
                     {...register("name", {required: true})}
                    />
                </label>
                <label>
                    <input
                    type="email"
                    name='email'
                    placeholder='Correo Electronico'
                    {...register("email", {required: true})}
                    />
                </label>
                <label>
                    <input
                    type="RolIT"
                    name='RolIT'
                    placeholder='Rol IT'
                    {...register("RolIT", {required: true})}
                    />
                </label>
             <button type="submit" className="btn btn-primary">
                    Guardar
            </button>
            <div className="section-technologies__list">
            {data.map(item => (<LinkTechnologie key={item.id} title={item.name}/>))}
        </div>
            </form>
        </div>
    </div>
  )
}
 export default Profile;