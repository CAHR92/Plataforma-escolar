import { createContext, useState } from "react";
import { LocalStorage } from "../helpers/LocalStorage";

const DatosContext= createContext();

const DatosProvider=({children})=>{

    const data=LocalStorage();
    const [datacopy, setDatacopy] = useState(data);
    const [modal, setModal] = useState({})
    const [filtro, setFiltro] = useState(datacopy);


    return (
        <DatosContext.Provider
            value={{
                data,
                datacopy,
                setDatacopy,
                modal,
                setModal,
                filtro,
                setFiltro
            }}
        >
            {children}
        </DatosContext.Provider>
    )
}
export {DatosProvider}
export default DatosContext