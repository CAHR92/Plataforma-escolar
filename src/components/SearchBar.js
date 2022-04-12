import React, { useEffect, useState } from 'react'
import { Filtrar } from '../helpers/Filtrar';
import { PintarTabla } from './PintarTabla';


export const SearchBar = ({data, setDatacopy}) => {
  

  const [filtro, setFiltro] = useState(data);

  useEffect(() => {
    //const newdata=JSON.parse(localStorage.getItem('datos'));
    if(filtro.length===0){
      setFiltro(data)
    }
  
    
  }, [filtro,data])

  useEffect(() => {
    //const newdata=JSON.parse(localStorage.getItem('datos'));
   
      setFiltro(data)
    
  
    
  }, [data])
  
  const hanldeChange= e=>{
    const name=e.target.value;
    const nombre =Filtrar(name,data);
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
        
       
         <PintarTabla data={filtro} setFiltro={setFiltro} setDatacopy={setDatacopy}/>
      
        
    </>
  )
}
