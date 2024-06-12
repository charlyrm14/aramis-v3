import { useContext } from "react";
import { DetallesContexto, DetallesContextType } from "../ProviderDetalles";
//Components
import Input from "@components/Input/Input";
import AppLoader from "@components/AppLoader/AppLoader";
import Title from "@components/Title/Title";

const Search = () => {
  const {
    valueChange,
    search,
    searchChange,
    btnSearch,
    status,
  }: DetallesContextType = useContext(DetallesContexto);
  return (
    <>
      <Title title="Buscar asegurado" />
      <div className="d-flex flex-column">
        <div className="d-lg-flex justify-content-center align-lg-items-center">
          <div className="rounded d-flex flex-column flex-lg-row align-items-lg-center bg-body p-5 w-xxl-850px h-lg-60px me-lg-10 my-5">
            <div className="row flex-grow-1 mb-5 mb-lg-0">
              <div className="col-lg-6 d-flex align-items-center mb-3 mb-lg-0">
                <i className="ki-outline ki-magnifier fs-1 text-gray-500 me-1"></i>
                <Input
                  type="text"
                  className="form-control-flush flex-grow-1"
                  placeHolder="Ingresa datos"
                  onChange={valueChange}
                />
              </div>
              <div className="col-lg-6 d-flex align-items-center mb-5 mb-lg-0">
                <div className="bullet bg-secondary d-none d-lg-block h-30px w-2px me-5"></div>
                <i className="ki-outline ki-element-11 fs-1 text-gray-500 me-1"></i>
                <select
                  className="form-select border-0 flex-grow-1"
                  data-control="select2"
                  data-placeholder="Category"
                  data-hide-search="true"
                  value={search}
                  onChange={searchChange}
                >
                  <option value="nombre">Nombre</option>
                  <option value="rfc">RFC</option>
                  <option value="poliza_aseguradora">Póliza aseguradora</option>
                </select>
              </div>
            </div>

            <div className="min-w-150px text-end">
              <button
                className="btn btn-dark"
                onClick={() => {
                  btnSearch();
                }}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
      {status === "loading" && <AppLoader />}
    </>
  );
};

export default Search;
