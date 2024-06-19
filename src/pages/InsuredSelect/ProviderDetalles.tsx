import React, { ReactNode, useState, createContext } from "react";
import { useLocation } from "react-router-dom";

interface DetallesProps {
  children: ReactNode;
}

export type DetallesContextType = {
  asegurados: any;
};

export const DetallesContexto: React.Context<DetallesContextType> =
  createContext({} as DetallesContextType);

const ProviderDetalles: React.FC<DetallesProps> = ({ children }) => {
  const location = useLocation();
  const asegurados = location.state?.data || { polizas: [] };

  //------------------------------ Servicios ------------------------------
  //-----------------------------------------------------------------------

  //------------------------------- Alertas -------------------------------
  //-----------------------------------------------------------------------

  return (
    <DetallesContexto.Provider
      value={{
        asegurados,
      }}
    >
      {children}
    </DetallesContexto.Provider>
  );
};

export default ProviderDetalles;
