import React, { ReactNode, useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

//Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DetallesProps {
  children: ReactNode;
}

export type DetallesContextType = {
  asegurados: any;
};

export const DetallesContexto: any = createContext({});

const ProviderDetalles: React.FC<DetallesProps> = ({ children }) => {
  const location = useLocation();
  const asegurados = location.state?.data || { polizas: [] };

  const btnSearch = async () => {};
  //------------------------------ Servicios ------------------------------
  //-----------------------------------------------------------------------

  //------------------------------- Alertas -------------------------------
  //-----------------------------------------------------------------------

  return (
    <DetallesContexto.Provider value={{ asegurados }}>
      {children}
    </DetallesContexto.Provider>
  );
};

export default ProviderDetalles;
