const Graphics = () => {
  return (
    <div
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      <div className="container-xxl" id="kt_content_container">
        <div className="row g-5 gx-xl-10 mb-5 mb-xl-10">
          <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
            <div
              className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10"
              style={{ backgroundColor: "#F1416C" }}
            >
              <div className="card-header pt-5">
                <div className="card-title d-flex flex-column">
                  <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">
                    7
                  </span>
                  <span className="text-white opacity-75 pt-1 fw-semibold fs-6">
                    Llamadas el día de hoy
                  </span>
                </div>
              </div>
              <div className="card-body d-flex align-items-end pt-0">
                <div className="d-flex align-items-center flex-column mt-3 w-100">
                  <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                    <span>3 ventas concretadas</span>
                    <span>72%</span>
                  </div>
                  <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                    <div
                      className="bg-white rounded h-8px"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow={72}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-flush h-md-50 mb-5 mb-xl-10">
              <div className="card-header pt-5">
                <div className="card-title d-flex flex-column">
                  <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
                    37
                  </span>
                  <span className="text-gray-500 pt-1 fw-semibold fs-6">
                    Asegurados nuevos en el mes
                  </span>
                </div>
              </div>
              <div className="card-body d-flex flex-column justify-content-end pe-0">
                <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">
                  120 asegurados nuevos hoy
                </span>
                <div className="symbol-group symbol-hover flex-nowrap">
                  <div
                    className="symbol symbol-35px symbol-circle"
                    data-bs-toggle="tooltip"
                    title="Alan Warden"
                  >
                    <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                      A
                    </span>
                  </div>
                  <div
                    className="symbol symbol-35px symbol-circle"
                    data-bs-toggle="tooltip"
                    title="Michael Eberon"
                  >
                    <img alt="Pic" src="../public/media/avatars/300-11.jpg" />
                  </div>
                  <div
                    className="symbol symbol-35px symbol-circle"
                    data-bs-toggle="tooltip"
                    title="Susan Redwood"
                  >
                    <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                      S
                    </span>
                  </div>
                  <div
                    className="symbol symbol-35px symbol-circle"
                    data-bs-toggle="tooltip"
                    title="Melody Macy"
                  >
                    <img alt="Pic" src="../public/media/avatars/300-2.jpg" />
                  </div>
                  <div
                    className="symbol symbol-35px symbol-circle"
                    data-bs-toggle="tooltip"
                    title="Perry Matthew"
                  >
                    <span className="symbol-label bg-danger text-inverse-danger fw-bold">
                      P
                    </span>
                  </div>
                  <div
                    className="symbol symbol-35px symbol-circle"
                    data-bs-toggle="tooltip"
                    title="Barry Walter"
                  >
                    <img alt="Pic" src="../public/media/avatars/300-12.jpg" />
                  </div>
                  <a
                    href="#"
                    className="symbol symbol-35px symbol-circle"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_view_users"
                  >
                    <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bold">
                      +30
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
            <div className="card card-flush h-md-50 mb-5 mb-xl-10">
              <div className="card-header pt-5">
                <div className="card-title d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <span className="fs-4 fw-semibold text-gray-500 me-1 align-self-start">
                      $
                    </span>
                    <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
                      69,700
                    </span>
                    <span className="badge badge-light-success fs-base">
                      <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>
                      2.2%
                    </span>
                  </div>
                  <span className="text-gray-500 pt-1 fw-semibold fs-6">
                    Tus ventas en abril
                  </span>
                </div>
              </div>
              <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                <div className="d-flex flex-center me-5 pt-2">
                  <div
                    id="kt_card_widget_17_chart"
                    style={{ minWidth: "70px", minHeight: "70px" }}
                    data-kt-size="70"
                    data-kt-line="11"
                  ></div>
                </div>
                <div className="d-flex flex-column content-justify-center flex-row-fluid">
                  <div className="d-flex fw-semibold align-items-center">
                    <div className="bullet w-8px h-3px rounded-2 bg-success me-3"></div>
                    <div className="text-gray-500 flex-grow-1 me-4">Hoy</div>
                    <div className="fw-bolder text-gray-700 text-xxl-end">
                      $7,660
                    </div>
                  </div>
                  <div className="d-flex fw-semibold align-items-center my-3">
                    <div className="bullet w-8px h-3px rounded-2 bg-primary me-3"></div>
                    <div className="text-gray-500 flex-grow-1 me-4">Ayer</div>
                    <div className="fw-bolder text-gray-700 text-xxl-end">
                      $2,820
                    </div>
                  </div>
                  <div className="d-flex fw-semibold align-items-center">
                    <div
                      className="bullet w-8px h-3px rounded-2 me-3"
                      style={{ backgroundColor: "#E4E6EF" }}
                    ></div>
                    <div className="text-gray-500 flex-grow-1 me-4">Lunes</div>
                    <div className="fw-bolder text-gray-700 text-xxl-end">
                      $45,257
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-flush h-lg-50">
              <div className="card-header pt-5">
                <h3 className="card-title text-gray-800 fw-bold">
                  Enlaces externos
                </h3>
              </div>
              <div className="card-body pt-5">
                <div className="d-flex flex-stack">
                  <a href="#" className="text-primary fw-semibold fs-6 me-2">
                    My Wallet
                  </a>
                  <button
                    type="button"
                    className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                  >
                    <i className="ki-outline ki-exit-right-corner fs-2"></i>
                  </button>
                </div>
                <div className="separator separator-dashed my-3"></div>
                <div className="d-flex flex-stack">
                  <a href="#" className="text-primary fw-semibold fs-6 me-2">
                    Reportes
                  </a>
                  <button
                    type="button"
                    className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                  >
                    <i className="ki-outline ki-exit-right-corner fs-2"></i>
                  </button>
                </div>
                <div className="separator separator-dashed my-3"></div>
                <div className="d-flex flex-stack">
                  <a href="#" className="text-primary fw-semibold fs-6 me-2">
                    Mi correo
                  </a>
                  <button
                    type="button"
                    className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                  >
                    <i className="ki-outline ki-exit-right-corner fs-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="card card-flush h-md-100">
              <div
                className="card-body d-flex flex-column justify-content-between mt-9 bgi-no-repeat bgi-size-cover bgi-position-x-center pb-0"
                style={{ backgroundPosition: "100% 50%" }}
              >
                <div className="mb-10">
                  <div className="fs-2hx fw-bold text-gray-800 text-center mb-13">
                    <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">
                      7
                    </span>
                    <br />
                    <span className="position-relative d-inline-block text-danger">
                      <a
                        href="pages/user-profile/overview.html"
                        className="text-danger opacity-75-hover"
                      >
                        ¡Felicidades!
                      </a>
                      <span className="position-absolute opacity-15 bottom-0 start-0 border-4 border-danger border-bottom w-100"></span>
                    </span>
                  </div>
                  <div className="text-center">
                    <a
                      href="#"
                      className="btn btn-sm btn-dark fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_upgrade_plan"
                    >
                      Mis recompensas
                    </a>
                  </div>
                </div>
                <img
                  className="mx-auto h-150px h-lg-200px theme-light-show"
                  src="../public/media/illustrations/misc/upgrade.svg"
                  alt=""
                />
                <img
                  className="mx-auto h-150px h-lg-200px theme-dark-show"
                  src="../public/media/illustrations/misc/upgrade-dark.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-5 gx-xl-10">
          <div className="col-md-12">
            <div className="card card-flush overflow-hidden h-xl-100">
              <div className="card-header py-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold text-gray-900">
                    Estadísticas
                  </span>
                  <span className="text-gray-500 mt-1 fw-semibold fs-6">
                    Reporte por estado
                  </span>
                </h3>
              </div>
              <div className="card-body pt-0">
                <div
                  id="kt_charts_widget_24"
                  className="min-h-auto"
                  style={{ height: "300px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
