import React, { useEffect, useState } from 'react'
import { Filtrar } from '../helpers/Filtrar';
import { PintarTabla } from './PintarTabla';


export const SearchBar = ({data}) => {
  

  const [filtro, setFiltro] = useState(data);

  useEffect(() => {
    if(filtro.length===0){
      setFiltro(data)
    }
  
    
  }, [filtro,data])
  
  const hanldeChange= e=>{
    const name=e.target.value;
    const nombre =Filtrar(name);
    setFiltro(nombre);
  }
  
  return (
    <>
        <div className='buscar'>

            <label>Buscar</label>
            <input 
            type='text'
            className='bar'
            placeholder='Nombre del Alumno'
            autoComplete='off'
            onChange={(e)=>hanldeChange(e)}
            />
        </div>
       
         <PintarTabla data={filtro}/>
      
        
    </>
  )
}
