
import React, { useContext, useEffect} from 'react'
import DatosContext from '../context/DatosProvider'



export const DatosAlumno = () => {

  const context=useContext(DatosContext);
  const {modal, setModal}=context;
  
  // useEffect(() => {
  //   setModal(modal)
  // }, [modal, setModal])
  

  const handleChange=(e)=>{
    setModal({
      ...modal,
      [e.target.name]:e.target.value
    })
   
    
  }

  return (
    <>
              <h3 className='modal-grid'>ID: <span>{modal.key}</span> </h3>
              <h3 className='modal-grid'>Nombre: 
                    <form>
                        <input 
                        type='text'
                        name='nombre'
                        value={modal.nombre}
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
                        value={modal.apellidoP}
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
                        value={modal.apellidoM}
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
                        value={modal.email}
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
                        value={modal.telefono}
                        autoComplete='off'
                        onChange={handleChange}
                        />
                    </form>
              </h3>
              <h3 className='modal-grid'>Deuda: 
                    <form>
                        <input 
                        type='text'
                        name='total'
                        value={modal.total}
                        autoComplete='off'
                        onChange={handleChange}          
                        />
                    </form>
              </h3>
              <h3 className='modal-grid'>Debe: 
                    <form>
                        <input 
                        type='text'
                        name='deuda'
                        value={modal.deuda}
                        autoComplete='off'
                        onChange={handleChange}          
                        />
                    </form>
              </h3>
    </>
  )
}
