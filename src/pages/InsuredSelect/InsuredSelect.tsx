import { useLocation } from "react-router-dom";

const InsuredSelect = () => {
  const location = useLocation();
  const data = location.state?.data || { polizas: [] };

  return (
    <div
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      <div className="container-xxl" id="kt_content_container">
        <div className="card border-0 ">
          <div className="card-header border-0 pt-6">
            <div className="card-title">
              <div className="d-flex align-items-center position-relative my-1">
                <i className="ki-outline ki-magnifier fs-3 position-absolute ms-5"></i>
                <input
                  type="text"
                  data-kt-customer-table-filter="search"
                  className="form-control form-control-solid w-250px ps-13"
                  placeholder="Filtar resultados"
                />
              </div>
            </div>
            <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
              <a
                href="#"
                className="btn btn-primary d-flex justify-content-between align-items-center gap-5"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_nuevo_asegurado"
              >
                Nuevo asegurado
              </a>
            </div>
          </div>
          <div className="card-body pt-0 table-responsive">
            <table
              className="table align-middle table-row-dashed fs-6 gy-5"
              id="kt_customers_table"
            >
              <thead>
                <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                  <th className="min-w-125px">Nombre</th>
                  <th className="min-w-125px">RFC</th>
                  <th className="min-w-125px">Fecha nacimiento</th>
                  <th className="text-end min-w-70px">Acciones</th>
                </tr>
              </thead>
              <tbody className="fw-semibold text-gray-600">
                {data.polizas.map((asegurado: any, index: number) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex justify-content-start flex-column">
                          <p className="text-gray-800 fw-bold mb-1 fs-6">
                            {asegurado.fc_nombre_asegurado}
                          </p>
                          <span className="text-gray-500 fw-semibold d-block fs-7">
                            {asegurado.fc_email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-gray-600 mb-1">{asegurado.fc_rfc}</p>
                    </td>
                    <td>
                      <div className="badge badge-light-success">
                        {`${asegurado.fi_fecha_nacimiento.slice(
                          6,
                          8
                        )}/${asegurado.fi_fecha_nacimiento.slice(
                          4,
                          6
                        )}/${asegurado.fi_fecha_nacimiento.slice(0, 4)}`}
                      </div>
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-primary btn-flex btn-center btn-active-light-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_verbal_id"
                      >
                        Seleccionar
                        <i className="ki-outline ki-right fs-5 ms-1"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuredSelect;
