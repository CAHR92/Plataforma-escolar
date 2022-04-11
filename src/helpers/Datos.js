

export const Datos = (students) => {
    
    let usuarios=[];
    usuarios= students.map((datos,index)=>{
        const{name,lastName,secondLastName,email,phoneNumber,debt,balance}=datos;
        const {total}=balance.payments
        const usuario={
            id:index,
            nombre: name,
            apellidoP:lastName,
            apellidoM:secondLastName,
            email:email,
            telefono:phoneNumber,
            deuda:debt,
            total:total
        }
        return usuario
    })
    
    localStorage.setItem('datos',JSON.stringify({usuarios}))
    return usuarios;
  
}
