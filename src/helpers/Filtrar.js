



export const Filtrar = (name,data) => {
  
  
  const nombre=data.filter(n=> n.nombre===name);
  
  

  return  nombre
}
