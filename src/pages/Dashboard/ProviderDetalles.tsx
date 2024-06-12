import React, { ReactNode, useState, useEffect, createContext } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchPolizas } from "@store/PolizaAseguradora/polizaSlice";
import { useNavigate } from "react-router-dom";

//Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DetallesProps {
  children: ReactNode;
}

export type DetallesContextType = {
  valueChange: any;
  search: any;
  searchChange: any;
  btnSearch: any;
  status: any;
};

export const DetallesContexto: any = createContext({});

const ProviderDetalles: React.FC<DetallesProps> = ({ children }) => {
  const [value, setValue] = useState("");
  const valueChange = (value: string) => {
    setValue(value);
  };

  const [search, setSearch] = useState("nombre");
  const searchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(event.target.value);
  };

  //------------------------------ Servicios ------------------------------
  //-----------------------------------------------------------------------
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, status, error } = useAppSelector((state) => state?.poliza);

  const btnSearch = async () => {
    if (search === "poliza_aseguradora") {
      dispatch(fetchPolizas(value));
    }
  };

  //------------------------------- Alertas -------------------------------
  //-----------------------------------------------------------------------
  useEffect(() => {
    if (status === "succeeded") {
      toast.info(
        () => `${data?.message ? data?.message : "Datos encontrados"}`,
        {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      navigate("/insuredSelect", { state: { data } });
    }

    if (status === "failed") {
      toast.error(() => `${error}`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [status]);

  return (
    <DetallesContexto.Provider
      value={{ valueChange, search, searchChange, btnSearch, status }}
    >
      {children}
    </DetallesContexto.Provider>
  );
};

export default ProviderDetalles;
