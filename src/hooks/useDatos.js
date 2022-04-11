

export const useDatos = () => {

    const {usuarios}=JSON.parse(localStorage.getItem('datos'));
    let data=usuarios.map(dat => {
    const {id,nombre,apellidoM,apellidoP,email,telefono,total}=dat;
    const key=id+1;

    const data = 
          { 
            key: key,
            firstName:nombre,
            apellidoPaterno:apellidoP,
            apellidoMaterno:apellidoM,
            email:email,
            telefono:telefono,
            debt:total

            }
      
    return data;  
  })

  return data;
}
