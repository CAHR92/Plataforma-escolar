

export const useDatos = () => {
    //Sacar datos del LocalStorage
    const {usuarios}=JSON.parse(localStorage.getItem('datos'));
    let data=usuarios.map(dat => {
    const {key,nombre,apellidoM,apellidoP,email,telefono,total,deuda}=dat;
    

    const data = 
          { 
            key: key,
            nombre:nombre,
            apellidoP:apellidoP,
            apellidoM:apellidoM,
            email:email,
            telefono:telefono,
            deuda:deuda,
            total:total

            }
      
    return data;  
  })

  return data;
}
