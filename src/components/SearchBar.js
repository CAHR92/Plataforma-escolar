import React, { useContext, useEffect} from 'react'
import DatosContext from '../context/DatosProvider';
import { Filtrar } from '../helpers/Filtrar';
import { PintarTabla } from './PintarTabla';


export const SearchBar = () => {
  
  const context=useContext(DatosContext);
  const{filtro, setFiltro,datacopy }=context;
  

  useEffect(() => {
    //const newdata=JSON.parse(localStorage.getItem('datos'));
    if(filtro.length===0){
      setFiltro(datacopy)
    }
  
    
  }, [filtro,datacopy,setFiltro])

  useEffect(() => {
    //const newdata=JSON.parse(localStorage.getItem('datos'));
   
      setFiltro(datacopy)
    
  }, [datacopy, setFiltro])
  
  const hanldeChange= e=>{
    const name=e.target.value;
    const nombre =Filtrar(name,datacopy);
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
        
       
         <PintarTabla />
      
        
    </>
  )
}
