import { Button } from 'antd'
import React from 'react'

export const EditaDatos = ({handleSave}) => {

    const handleChange=(e)=>{
        console.log(e.target.value)
    }

  return (
    <>
                    <nav>
                        <Button className='ant-btn-primary' onClick={handleSave}>Guardar</Button>
                    </nav>
                    <form>
                        <input 
                        type='text'
                        placeholder='Nuevo Nombre'
                        autoComplete='off'
                        onChange={handleChange}
                        
                        />
                    </form>
        
    </>
  )
}
