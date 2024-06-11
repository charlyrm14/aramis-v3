import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchPolizas } from "@store/PolizaAseguradora/polizaSlice";

const Reportes: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state?.poliza);

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchPolizas());
  //   }
  // }, [status, dispatch]);

  return (
    <div>
      <h1>Reportes</h1>
      {status === "loading" && <p>Cargando...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <ul>
          {data &&
            data?.polizas.map((poliza: any) => (
              <li key={poliza.fc_numero_poliza}>
                {poliza.fi_numero_cliente} - {poliza.fi_numero_producto} -{" "}
                {poliza.fc_numero_poliza}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Reportes;
