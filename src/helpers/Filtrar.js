
import { useDatos } from "../hooks/useDatos"


export const Filtrar = (name) => {
  
  const usuarios = useDatos();
  const nombre=usuarios.filter(n=> n.firstName===name);
  
  

  return  nombre
}
