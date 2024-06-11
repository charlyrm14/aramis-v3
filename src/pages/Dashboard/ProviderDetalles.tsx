import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchPolizas } from "@store/PolizaAseguradora/polizaSlice";

const ProviderDetalles = () => {
  const [value, setValue] = useState("");
  const valueChange = (value: string) => {
    setValue(value);
  };

  const [search, setSearch] = useState("nombre");
  const searchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(event.target.value);
  };

  //---------- Servicios ----------
  //-------------------------------
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state?.poliza);

  const btnSearch = async () => {
    dispatch(fetchPolizas(value));
  };

  const dataValues = {
    valueChange,
    search,
    searchChange,
    btnSearch,
    status,
  };

  return {
    dataValues,
  };
};

export default ProviderDetalles;
