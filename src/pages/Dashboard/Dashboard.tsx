import React, { useState } from "react";
import ProviderDetalles from "./ProviderDetalles";
//Components
import Input from "@components/Input/Input";
import AppLoader from "@components/AppLoader/AppLoader";

const Dashboard = () => {
  const { dataValues } = ProviderDetalles();

  return (
    <div className="card rounded-0 border-0 bgi-no-repeat bgi-position-x-end bgi-size-cover">
      <div className="card-body container-xxl pt-10 pb-8">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="fw-semibold me-3">Buscar asegurado</h1>
        </div>
        <div className="d-flex flex-column">
          <div className="d-lg-flex justify-content-center align-lg-items-center">
            <div className="rounded d-flex flex-column flex-lg-row align-items-lg-center bg-body p-5 w-xxl-850px h-lg-60px me-lg-10 my-5 border border-primary">
              <div className="row flex-grow-1 mb-5 mb-lg-0">
                <div className="col-lg-6 d-flex align-items-center mb-3 mb-lg-0">
                  <i className="ki-outline ki-magnifier fs-1 text-gray-500 me-1"></i>

                  <Input
                    type="text"
                    className="form-control-flush"
                    placeHolder="Ejemplo: Juan Perez"
                    onChange={dataValues.valueChange}
                  />
                </div>

                <div className="col-lg-6 d-flex align-items-center mb-5 mb-lg-0">
                  <div className="bullet bg-secondary d-none d-lg-block h-30px w-2px me-5"></div>

                  <i className="ki-outline ki-user fs-1 text-gray-500 me-1"></i>

                  <select
                    className="form-select border-0 flex-grow-1"
                    data-control="select2"
                    data-placeholder="Category"
                    data-hide-search="true"
                    name="tipo_busqueda"
                    value={dataValues.search}
                    onChange={dataValues.searchChange}
                  >
                    <option value="nombre">Nombre</option>
                    <option value="rfc">RFC</option>
                    <option value="poliza_aseguradora">
                      Póliza aseguradora
                    </option>
                  </select>
                </div>
              </div>

              <div className="min-w-150px text-end">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    dataValues.btnSearch();
                  }}
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
        {dataValues.status === "loading" && <AppLoader />}
      </div>
    </div>
  );
};

export default Dashboard;
