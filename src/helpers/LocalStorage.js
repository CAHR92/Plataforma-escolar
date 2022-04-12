
import { useDatos } from '../hooks/useDatos';
import { Datos } from './Datos';


export const LocalStorage = () => {

  //Guarda la información del students.json en el  local
    const jsonData=require('../students.json');
    const {students}=jsonData;
    Datos(students);
    
    const data= useDatos();
  return data;
      
  
}
