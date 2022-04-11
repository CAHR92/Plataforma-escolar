
import { useDatos } from '../hooks/useDatos';
import { Datos } from './Datos';


export const LocalStorage = () => {
    const jsonData=require('../students.json');
    const {students}=jsonData;
    Datos(students);
    
    const data= useDatos();
  return data;
      
  
}
