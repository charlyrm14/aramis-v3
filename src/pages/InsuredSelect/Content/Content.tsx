import React, { useState } from "react";

const Content = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter((option) => option !== value)
        : [...prevSelectedOptions, value]
    );
  };

  const isExactlyTwoSelected = selectedOptions.length === 2;

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
                  isExactlyTwoSelected ? "" : "disabled"
                }`}
                data-bs-toggle="tab"
                href="#kt_tab_pane_verbal_asegurado_direccion"
                tabIndex={isExactlyTwoSelected ? undefined : -1}
              >
                Dirección
              </a>
            </li>
            <li className="nav-item mt-2">
              <a
                className={`nav-link text-active-primary ms-0 me-10 py-5 ${
                  isExactlyTwoSelected ? "" : "disabled"
                }`}
                data-bs-toggle="tab"
                href="#kt_tab_pane_verbal_asegurado_fechas"
                tabIndex={isExactlyTwoSelected ? undefined : -1}
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
                    name="numero_rfc"
                    value="casa"
                    id="kt_modal_two_factor_authentication_option_1"
                    onChange={handleCheckboxChange}
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
                    value="celular"
                    id="kt_modal_two_factor_authentication_option_2"
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
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
                        SAHF821021
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
                    onChange={handleCheckboxChange}
                    disabled={!isExactlyTwoSelected}
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
                      <span className="text-muted fw-semibold fs-6">
                        Calle: RUBENS, 33, S/N Estado: SAN JUAN BENITO JUAREZ
                      </span>
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
                    onChange={handleCheckboxChange}
                    disabled={!isExactlyTwoSelected}
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
                    onChange={handleCheckboxChange}
                    disabled={!isExactlyTwoSelected}
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
                      <span className="text-muted fw-semibold fs-6">
                        1982-10-21
                      </span>
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
