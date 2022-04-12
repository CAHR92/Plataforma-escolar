
import React, { useEffect} from 'react'



export const DatosAlumno = ({data,setModal}) => {

  
  
  useEffect(() => {
    setModal(data)
  }, [data, setModal])
  

  const handleChange=(e)=>{
    setModal({
      ...data,
      [e.target.name]:e.target.value
    })
   
    
  }

  return (
    <>
              <h3 className='modal-grid'>ID: <span>{data.key}</span> </h3>
              <h3 className='modal-grid'>Nombre: 
                    <form>
                        <input 
                        type='text'
                        name='nombre'
                        value={data.nombre}
                        autoComplete='off'
                        onChange={handleChange}   
                        />
                    </form>
              </h3>
              <h3 className='modal-grid'>Apellido Paterno: 
                    <form>
                        <input 
                        type='text'
                        name='apellidoP'
                        value={data.apellidoP}
                        autoComplete='off'
                        onChange={handleChange}
                        />
                    </form>
              </h3>
              <h3 className='modal-grid'>Apellido Materno:
                    <form>
                        <input 
                        type='text'
                        name='apellidoM'
                        value={data.apellidoM}
                        autoComplete='off'
                        onChange={handleChange} 
                        />
                    </form>
              </h3>
              <h3 className='modal-grid'>Email:
                    <form>
                        <input 
                        type='text'
                        name='email'
                        value={data.email}
                        autoComplete='off'
                        onChange={handleChange}
                        />
                    </form>
              </h3>
              <h3 className='modal-grid'>Telefono:
                <form>
                        <input 
                        type='text'
                        name='telefono'
                        value={data.telefono}
                        autoComplete='off'
                        onChange={handleChange}
                        />
                    </form>
              </h3>
              <h3 className='modal-grid'>Deuda: 
                    <form>
                        <input 
                        type='text'
                        name='deuda'
                        value={data.total}
                        autoComplete='off'
                        onChange={handleChange}          
                        />
                    </form>
              </h3>
              <h3 className='modal-grid'>Debe: 
                    <form>
                        <input 
                        type='text'
                        name='debe'
                        value={data.deuda}
                        autoComplete='off'
                        onChange={handleChange}          
                        />
                    </form>
              </h3>
    </>
  )
}
