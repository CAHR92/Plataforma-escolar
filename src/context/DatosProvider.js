import { createContext, useState } from "react";
import { LocalStorage } from "../helpers/LocalStorage";

const DatosContext= createContext();

const DatosProvider=({children})=>{

    const data=LocalStorage();
    const [datacopy, setDatacopy] = useState(data);
    const [modal, setModal] = useState()
    const [filtro, setFiltro] = useState(datacopy);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [switch1, setSwitch1] = useState({})
    const showModal = () => {
        setIsModalVisible(true);
      };


    return (
        <DatosContext.Provider
            value={{
                data,
                datacopy,
                setDatacopy,
                modal,
                setModal,
                filtro,
                setFiltro,
                isModalVisible,
                setIsModalVisible,
                showModal,
                switch1,
                setSwitch1
            }}
        >
            {children}
        </DatosContext.Provider>
    )
}
export {DatosProvider}
export default DatosContext