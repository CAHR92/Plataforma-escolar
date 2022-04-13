import React, { useContext, useState } from 'react'
import {  Table } from 'antd';
import { Modal} from 'antd';
import 'antd/dist/antd.css';
import { ActualizarLocalStorage } from '../helpers/ActualizarLocalStorage';
import { DatosAlumno } from './DatosAlumno';
import DatosContext from '../context/DatosProvider';






export const PintarTabla = () => {


  //LLama el modal

 const context=useContext(DatosContext);

 const {modal, setModal, filtro, setDatacopy}=context;
 const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleEdit = () => {
    const n=1;
    setDatacopy(ActualizarLocalStorage({modal, n,filtro}))
    setIsModalVisible(false);
    
  };

  const handleBorrar = () => {
    const n=2;
    setDatacopy(ActualizarLocalStorage({modal, n,filtro}))
    setIsModalVisible(false);
    
  };

  //Pinta la tabla


const { Column} = Table;
const rowEvents=e=>{
    setModal(e)
    showModal()
}



  return (
    <>
            <Table dataSource={filtro} onRow={(record, rowIndex) => {

                return {
                  onClick:(e) => {
                  rowEvents(record);
                  }, 
                  
                };
              }}
            >
              <Column title="Número" key="key" dataIndex="key" />
              <Column title="Nombre(s)" dataIndex="nombre" key="nombre" />
              <Column title="Apellido Paterno" dataIndex="apellidoP" key="apellidoP" />
              <Column title="Apellido Materno" dataIndex="apellidoM" key="apellidoM" />
              <Column title="Email" dataIndex="email" key="email" />
              <Column title="Telefono" dataIndex="telefono" key="telefono" />
              <Column title="Deuda en MXN" dataIndex="total" key="total" />
              <Column title="Debe" dataIndex="deuda" key="deuda" />
            
          </Table>
          <Modal 
            title="Students Modal" 
            visible={isModalVisible} 
            onOk={handleEdit} 
            onCancel={handleBorrar} 
            okText='Guardar'
            cancelText='Borrar Alumno'
            >

              <DatosAlumno />
          </Modal>
          
    </>
         
  )
}
