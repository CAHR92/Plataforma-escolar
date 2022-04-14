import React, { useContext, useEffect} from "react";
import { Table } from "antd";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { ActualizarLocalStorage } from "../helpers/ActualizarLocalStorage";
import { DatosAlumno } from "./DatosAlumno";
import DatosContext from "../context/DatosProvider";
import { PintarSwitch } from "./PintarSwitch";

export const PintarTabla = () => {
  //LLama el modal

  const context = useContext(DatosContext);

  const {
    modal,
    setModal,
    filtro,
    setDatacopy,
    setIsModalVisible,
    showModal,
    isModalVisible,
    switch1
  } = context;
  useEffect(() => {
    
    const n = 1;
    setDatacopy(ActualizarLocalStorage(switch1, n, filtro));
    
  }, [switch1])
  
    

  const handleEdit = () => {
    const n = 1;
    setDatacopy(ActualizarLocalStorage(modal, n, filtro ));
    setIsModalVisible(false);
  };

  const handleBorrar = () => {
    const n = 2;
    setDatacopy(ActualizarLocalStorage(modal, n, filtro ));
    setIsModalVisible(false);
  };

  //Pinta la tabla

  const { Column } = Table;
  const rowEvents = (e) => {
    setModal(e);
    showModal();
  };
  

  return (
    <>
      <Table dataSource={filtro}>
        <Column
          title="Número"
          key="key"
          dataIndex="key"
          onCell={(record, rowIndex) => {
            return {
              onClick: (e) => {
                rowEvents(record, rowIndex);
              },
            };
          }}
        />
        <Column
          title="Nombre(s)"
          dataIndex="nombre"
          key="nombre"
          onCell={(record, rowIndex) => {
            return {
              onClick: (e) => {
                rowEvents(record, rowIndex);
              },
            };
          }}
        />
        <Column
          title="Apellido Paterno"
          dataIndex="apellidoP"
          key="apellidoP"
          onCell={(record, rowIndex) => {
            return {
              onClick: (e) => {
                rowEvents(record, rowIndex);
              },
            };
          }}
        />
        <Column
          title="Apellido Materno"
          dataIndex="apellidoM"
          key="apellidoM"
          onCell={(record, rowIndex) => {
            return {
              onClick: (e) => {
                rowEvents(record, rowIndex);
              },
            };
          }}
        />
        <Column
          title="Email"
          dataIndex="email"
          key="email"
          onCell={(record, rowIndex) => {
            return {
              onClick: (e) => {
                rowEvents(record, rowIndex);
              },
            };
          }}
        />
        <Column
          title="Telefono"
          dataIndex="telefono"
          key="telefono"
          onCell={(record, rowIndex) => {
            return {
              onClick: (e) => {
                rowEvents(record, rowIndex);
              },
            };
          }}
        />
        <Column
          title="Deuda en MXN"
          dataIndex="total"
          key="total"
          onCell={(record, rowIndex) => {
            return {
              onClick: (e) => {
                rowEvents(record, rowIndex);
              },
            };
          }}
        />
        <Column
          title="Debe"
          dataIndex="deuda"
          key="deuda"
          render={(record, index) => (
                
            <PintarSwitch record={record} index={index} />
          )}
        />
      </Table>
      <Modal
        title="Students Modal"
        visible={isModalVisible}
        onOk={handleEdit}
        onCancel={handleBorrar}
        okText="Guardar"
        cancelText="Borrar Alumno"
      >
        <DatosAlumno />
      </Modal>
    </>
  );
};
