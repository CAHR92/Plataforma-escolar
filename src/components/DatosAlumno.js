import { Button } from 'antd'
import React from 'react'

export const DatosAlumno = ({data, hanldeEdit}) => {

  return (
    <>
              <nav className='navi'>
                <div className='btn-nav'>
                  <Button className='ant-btn-primary ' onClick={hanldeEdit}>Editar</Button>
                  <Button className='ant-btn-primary '>Borrar</Button>
                </div>
              </nav>

              <h3 className='modal-grid'>ID: <span>{data.key}</span> </h3>
              <h3 className='modal-grid'>Nombre: <span>{data.firstName}</span> </h3>
              <h3 className='modal-grid'>Apellido Paterno: <span>{data.apellidoPaterno}</span> </h3>
              <h3 className='modal-grid'>Apellido Materno:<span>{data.apellidoMaterno}</span> </h3>
              <h3 className='modal-grid'>Email:<span>{data.email}</span> </h3>
              <h3 className='modal-grid'>Telefono: <span>{data.telefono}</span> </h3>
              <h3 className='modal-grid'>Deuda: <span>{data.debt}</span></h3>
          </>
  )
}
