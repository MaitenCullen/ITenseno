import React from 'react'
import { useForm } from 'react-hook-form'


const Profile = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }
  return (

    <div className='divProfile'>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
             placeholder="Ingrese nombre de usuario"
             className="form-control mb-2"
             name="usuario"
             ref={register({
                 required: {
                     value: true, 
                     message: 'Nombre es requerido'
                     }, 
                 maxLength: {
                     value: 5, 
                     message: 'No más de 5 carácteres!'
                     },
                 minLength: {
                     value: 2, 
                     message: 'Mínimo 2 carácteres'
                     }
             })}
            />
            <span className="text-danger text-small d-block mb-2">
            {errors?.usuario?.message}
            </span>
             <button type="submit" className="btn btn-primary">
                    Enviar
            </button>
            </form>
        </div>
    </div>
  )
}
 export default Profile;