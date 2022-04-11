import React, { useState } from 'react';
import { DatosAlumno } from '../components/DatosAlumno';
import { EditaDatos } from '../components/EditaDatos';


export const AppModal = ({data, cont}) => {
  const [cont1, setcont1] = useState(cont)
  console.log(cont1)

  const hanldeEdit=()=>{
    setcont1(2)
  }

const handleSave=()=>{
  setcont1(1)
}




  
  return (
    <div className='modal'>

        
        {(cont1===1) && 
          <DatosAlumno data={data} hanldeEdit={hanldeEdit} />
         }

          {(cont1===2) && 
            <EditaDatos handleSave={handleSave} />
          }
       

        
       
      
      
    </div>
  );
}


