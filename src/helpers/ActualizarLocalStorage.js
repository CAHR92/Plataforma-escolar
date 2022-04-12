

export const ActualizarLocalStorage = ({modal,n,data}) => {
    
    const {key}=modal;
    console.log(modal)
    let usuarios=[];

    console.log(n)
    if(n===1){
        usuarios=data.map((dat)=>{
            
            return dat.key===key ? modal : dat; 
        })
        
    }
    

    if(n===2){
        usuarios = data.filter((usr)=> usr.key !== key);
      
    
    }
  
    localStorage.setItem('datos',JSON.stringify({usuarios}))

  return (
    usuarios
  )
}
