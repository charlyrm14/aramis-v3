import React, { ReactNode, useState, createContext } from "react";
import { useLocation } from "react-router-dom";

interface DetallesProps {
  children: ReactNode;
}

export type DetallesContextType = {
  asegurados: any;
  aseguradoData: any;
  setaseguradoData: React.Dispatch<React.SetStateAction<any>>;
  RFCSelected: boolean;
  DireccionSelected: boolean;
  checkboxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    section: string
  ) => void;
  FechaSelected: boolean;
};

export const DetallesContexto: React.Context<DetallesContextType> =
  createContext({} as DetallesContextType);

const ProviderDetalles: React.FC<DetallesProps> = ({ children }) => {
  const location = useLocation();
  const asegurados = location.state?.data || { polizas: [] };

  const [aseguradoData, setaseguradoData] = useState({});
  const [selectedNumeroRFC, setSelectedNumeroRFC] = useState<string[]>([]);
  const [selectedDireccion, setSelectedDireccion] = useState<string | null>(
    null
  );
  const [selectedFecha, setSelectedFecha] = useState<string | null>(null);

  const checkboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    section: string
  ) => {
    const value = event.target.value;
    if (section === "numeroRFC") {
      setSelectedNumeroRFC((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((option) => option !== value)
          : [...prevSelected, value]
      );
    } else if (section === "direccion") {
      setSelectedDireccion(selectedDireccion === value ? null : value);
    } else if (section === "fecha_nacimiento") {
      setSelectedFecha(selectedFecha === value ? null : value);
    }
  };

  const RFCSelected = selectedNumeroRFC.length >= 2;
  const DireccionSelected = selectedDireccion !== null;
  const FechaSelected = selectedFecha !== null;

  //------------------------------ Servicios ------------------------------
  //-----------------------------------------------------------------------

  //------------------------------- Alertas -------------------------------
  //-----------------------------------------------------------------------

  return (
    <DetallesContexto.Provider
      value={{
        asegurados,
        aseguradoData,
        setaseguradoData,
        RFCSelected,
        DireccionSelected,
        FechaSelected,
        checkboxChange,
      }}
    >
      {children}
    </DetallesContexto.Provider>
  );
};

export default ProviderDetalles;
