

export const Datos = (students) => {
    //Guarda los datos en el local storage
    
    let usuarios=[];
    usuarios= students.map((datos,index)=>{
        const{name,lastName,secondLastName,email,phoneNumber,debt,balance}=datos;
        const {total}=balance.payments
        const usuario={
            key:index+1,
            nombre: name,
            apellidoP:lastName,
            apellidoM:secondLastName,
            email:email,
            telefono:phoneNumber,
            deuda:debt.toString(),
            total:total.toString()
        }
        return usuario
    })
    
    localStorage.setItem('datos',JSON.stringify({usuarios}))
    return usuarios;
  
}
