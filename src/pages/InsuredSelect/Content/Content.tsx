import React, { useState } from "react";

interface ContentProps {
  aseguradoData?: any;
}

const Content: React.FC<ContentProps> = ({ aseguradoData }) => {
  console.log("aseguradoData", aseguradoData);
  const [selectedNumeroRFC, setSelectedNumeroRFC] = useState<string[]>([]);
  const [selectedDireccion, setSelectedDireccion] = useState<string | null>(
    null
  );

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
      setSelectedDireccion(value);
    }
  };

  const RFCSelected = selectedNumeroRFC.length >= 2;
  const DireccionSelected = selectedDireccion !== null;

  return (
    <>
      <div className="mb-5">
        <div className="mh-375px me-n7 pe-7">
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
            <li className="nav-item mt-2">
              <a
                className="nav-link text-active-primary ms-0 me-10 py-5 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_verbal_asegurado_numero_rfc"
              >
                Número y RFC
              </a>
            </li>
            <li className="nav-item mt-2">
              <a
                className={`nav-link text-active-primary ms-0 me-10 py-5 ${
                  RFCSelected ? "" : "disabled"
                }`}
                data-bs-toggle="tab"
                href="#kt_tab_pane_verbal_asegurado_direccion"
                tabIndex={RFCSelected ? undefined : -1}
              >
                Dirección
              </a>
            </li>
            <li className="nav-item mt-2">
              <a
                className={`nav-link text-active-primary ms-0 me-10 py-5 ${
                  DireccionSelected ? "" : "disabled"
                }`}
                data-bs-toggle="tab"
                href="#kt_tab_pane_verbal_asegurado_fechas"
                tabIndex={DireccionSelected ? undefined : -1}
              >
                Fecha
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="kt_tab_pane_verbal_asegurado_numero_rfc"
          role="tabpanel"
        >
          <div className="my-5">
            <div className="mb-15">
              <div className="pb-10">
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="numero_rfc_0"
                    value="casa"
                    id="kt_modal_two_factor_authentication_option_1"
                    onChange={(event) => checkboxChange(event, "numeroRFC")}
                  />
                  <label
                    className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-5"
                    htmlFor="kt_modal_two_factor_authentication_option_1"
                  >
                    <i className="ki-outline ki-phone fs-3x me-4"></i>
                    <span className="d-block fw-semibold text-start">
                      <span className="text-gray-900 fw-bold d-block fs-3">
                        Casa
                      </span>
                      <span className="text-muted fw-semibold fs-6">
                        {aseguradoData.fc_telefono_casa}
                      </span>
                    </span>
                  </label>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="numero_rfc"
                    value="celular"
                    id="kt_modal_two_factor_authentication_option_2"
                    onChange={(event) => checkboxChange(event, "numeroRFC")}
                  />
                  <label
                    className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-5"
                    htmlFor="kt_modal_two_factor_authentication_option_2"
                  >
                    <i className="ki-outline ki-phone fs-3x me-4"></i>
                    <span className="d-block fw-semibold text-start">
                      <span className="text-gray-900 fw-bold d-block fs-3">
                        Celular
                      </span>
                      <span className="text-muted fw-semibold fs-6">
                        +(52) 55 9900 0099
                      </span>
                    </span>
                  </label>
                </div>
                <div className="my-2">
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="numero_rfc"
                    value="fc_rfc"
                    id="kt_modal_two_factor_authentication_option_3"
                    onChange={(event) => checkboxChange(event, "numeroRFC")}
                  />
                  <label
                    className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-5"
                    htmlFor="kt_modal_two_factor_authentication_option_3"
                  >
                    <i className="ki-outline ki-user fs-3x me-4"></i>
                    <span className="d-block fw-semibold text-start">
                      <span className="text-gray-900 fw-bold d-block fs-3">
                        RFC
                      </span>
                      <span className="text-muted fw-semibold fs-6">
                        {aseguradoData.fc_rfc}
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="kt_tab_pane_verbal_asegurado_direccion"
          role="tabpanel"
        >
          <div className="my-5">
            <div className="mb-15">
              <div className="pb-10">
                <div className="my-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="direccion"
                    value="a"
                    id="kt_modal_two_factor_authentication_option_4"
                    onChange={(event) => checkboxChange(event, "direccion")}
                    disabled={!RFCSelected}
                  />
                  <label
                    className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-5"
                    htmlFor="kt_modal_two_factor_authentication_option_4"
                  >
                    <i className="ki-outline ki-geolocation-home fs-3x me-4"></i>
                    <span className="d-block fw-semibold text-start">
                      <span className="text-gray-900 fw-bold d-block fs-3">
                        A
                      </span>
                      {aseguradoData && aseguradoData.fc_direccion && (
                        <span className="text-muted fw-semibold fs-6">
                          {`${aseguradoData.fc_direccion} ${
                            aseguradoData.fc_complemento
                              ? aseguradoData.fc_complemento
                              : ""
                          } ${aseguradoData.fc_numero} ${
                            aseguradoData.fc_ciudad
                          } ${aseguradoData.fc_colonia}`}
                        </span>
                      )}
                    </span>
                  </label>
                </div>
                <div className="my-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="direccion"
                    value="b"
                    id="kt_modal_two_factor_authentication_option_5"
                    onChange={(event) => checkboxChange(event, "direccion")}
                    disabled={!RFCSelected}
                  />
                  <label
                    className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-5"
                    htmlFor="kt_modal_two_factor_authentication_option_5"
                  >
                    <i className="ki-outline ki-geolocation-home fs-3x me-4"></i>
                    <span className="d-block fw-semibold text-start">
                      <span className="text-gray-900 fw-bold d-block fs-3">
                        B
                      </span>
                      <span className="text-muted fw-semibold fs-6">
                        CP: 77518, Ciudad: CIUDAD DE MEXICO, Estado: Ciudad de
                        México
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="kt_tab_pane_verbal_asegurado_fechas"
          role="tabpanel"
        >
          <div className="my-5">
            <div className="mb-15">
              <div className="pb-10">
                <div className="my-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="fd_fecha_nacimiento"
                    value="a"
                    id="kt_modal_two_factor_authentication_option_6"
                    onChange={(event) => checkboxChange(event, "direccion")}
                    disabled={!RFCSelected || !DireccionSelected}
                  />
                  <label
                    className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-5"
                    htmlFor="kt_modal_two_factor_authentication_option_6"
                  >
                    <i className="ki-outline ki-calendar fs-3x me-4"></i>
                    <span className="d-block fw-semibold text-start">
                      <span className="text-gray fw-bold d-block fs-3">
                        FECHA DE NACIMIENTO
                      </span>
                      {aseguradoData && aseguradoData.fi_fecha_nacimiento && (
                        <span className="text-muted fw-semibold fs-6">
                          {`${aseguradoData.fi_fecha_nacimiento.slice(
                            6,
                            8
                          )}/${aseguradoData.fi_fecha_nacimiento.slice(
                            4,
                            6
                          )}/${aseguradoData.fi_fecha_nacimiento.slice(0, 4)}`}
                        </span>
                      )}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
