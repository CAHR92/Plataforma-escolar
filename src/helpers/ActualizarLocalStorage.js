

export const ActualizarLocalStorage = (modal,n,filtro) => {
    
    const {key}=modal;
    //console.log(modal)
    let usuarios=[];

    //console.log(n)
    if(n===1){
        usuarios=filtro.map((dat)=>{
            
            return dat.key===key ? modal : dat; 
        })
        
    }
    

    if(n===2){
        usuarios = filtro.filter((usr)=> usr.key !== key);
      
    
    }
  
    localStorage.setItem('datos',JSON.stringify({usuarios}))

  return (
    usuarios
  )
}
