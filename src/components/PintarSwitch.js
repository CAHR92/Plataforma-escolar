import React, { useContext } from "react";
import { Switch } from "antd";
import DatosContext from "../context/DatosProvider";

export const PintarSwitch = ({ record, index }) => {
  const context = useContext(DatosContext);
  const { setSwitch1 } = context;

  function onChange(checked) {
    setSwitch1({
      ...index,
      deuda: checked,
    });
  }

  return <Switch checked={record} onChange={onChange} />;
};
