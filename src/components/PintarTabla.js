import React, { useState } from 'react'
import {  Table } from 'antd';
import { Modal} from 'antd';
import 'antd/dist/antd.css';
import {AppModal} from '../helpers/AppModal'
//import { useDatos } from '../hooks/useDatos';




export const PintarTabla = ({data}) => {



//Tipo de contenido
const [contenido, setContenido] = useState(1)
  //LLama el modal

  const [isModalVisible, setIsModalVisible] = useState(false);

  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setContenido(1)
    console.log(contenido)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setContenido(1)
    console.log(contenido)
  };

  //Pinta la tabla
const [modal, setModal] = useState({})

const { Column} = Table;
const rowEvents=e=>{
    setModal(e)
    showModal()
}



  return (
    <>
            <Table dataSource={data} onRow={(record, rowIndex) => {

                return {
                  onClick:(e) => {
                  rowEvents(record);
                  }, 
                  
                };
              }}
            >
              <Column title="Número" key="key" dataIndex="key" />
              <Column title="Nombre(s)" dataIndex="firstName" key="firstName" />
              <Column title="Apellido Paterno" dataIndex="apellidoPaterno" key="apellidoPaterno" />
              <Column title="Apellido Materno" dataIndex="apellidoMaterno" key="apellidoMaterno" />
              <Column title="Email" dataIndex="email" key="email" />
              <Column title="Telefono" dataIndex="telefono" key="telefono" />
              <Column title="Deuda en MXN" dataIndex="debt" key="debt" />
            
          </Table>
          <Modal title="Students Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

              <AppModal data={modal} cont={contenido}/>
          </Modal>
          
    </>
         
  )
}
