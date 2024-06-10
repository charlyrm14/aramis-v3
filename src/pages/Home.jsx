export default function Home() {
  return (
    <>
      {/**begin::Content*/}
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        {/**begin::Container*/}
        <div className="container-xxl" id="kt_content_container">
          {/**begin::Row*/}
          <div className="row g-5 gx-xl-10 mb-5 mb-xl-10">
            {/**begin::Col*/}
            <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
              {/**begin::Card widget 20*/}
              <div
                className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10"
                style={{
                  backgroundColor: "#F1416C",
                  backgroundImage: `url('../public/media/patterns/vector-1.png')`,
                }}
              >
                {/**begin::Header*/}
                <div className="card-header pt-5">
                  {/**begin::Title*/}
                  <div className="card-title d-flex flex-column">
                    {/**begin::Amount*/}
                    <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">
                      9
                    </span>
                    {/**end::Amount*/}
                    {/**begin::Subtitle*/}
                    <span className="text-white opacity-75 pt-1 fw-semibold fs-6">
                      Llamadas el día d ehoy
                    </span>
                    {/**end::Subtitle*/}
                  </div>
                  {/**end::Title*/}
                </div>
                {/**end::Header*/}
                {/**begin::Card body*/}
                <div className="card-body d-flex align-items-end pt-0">
                  {/**begin::Progress*/}
                  <div className="d-flex align-items-center flex-column mt-3 w-100">
                    <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                      <span>3 ventas realizadas hoy</span>
                      <span>20%</span>
                    </div>
                    <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                      <div
                        className="bg-white rounded h-8px"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  {/**end::Progress*/}
                </div>
                {/**end::Card body*/}
              </div>
              {/**begin::Card widget 20*/}
              {/**begin::Card widget 7*/}
              <div className="card card-flush h-md-50 mb-5 mb-xl-10 shadow">
                {/**begin::Header*/}
                <div className="card-header pt-5">
                  {/**begin::Title*/}
                  <div className="card-title d-flex flex-column">
                    {/**begin::Amount*/}
                    <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
                      80
                    </span>
                    {/**end::Amount*/}
                    {/**begin::Subtitle*/}
                    <span className="text-gray-500 pt-1 fw-semibold fs-6">
                      Llamadas en el mes
                    </span>
                    {/**end::Subtitle*/}
                  </div>
                  {/**end::Title*/}
                </div>
                {/**end::Header*/}
                {/**begin::Card body*/}
                <div className="card-body d-flex flex-column justify-content-end pe-0">
                  {/**begin::Title*/}
                  <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">
                    Compañeros en línea
                  </span>
                  {/**end::Title*/}
                  {/**begin::Users group*/}
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
                        +42
                      </span>
                    </a>
                  </div>
                  {/**end::Users group*/}
                </div>
                {/**end::Card body*/}
              </div>
              {/**end::Card widget 7*/}
            </div>
            {/**end::Col*/}
            {/**begin::Col*/}
            <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
              {/**begin::Card widget 17*/}
              <div className="card card-flush h-md-50 mb-5 mb-xl-10 shadow">
                {/**begin::Header*/}
                <div className="card-header pt-5">
                  {/**begin::Title*/}
                  <div className="card-title d-flex flex-column">
                    {/**begin::Info*/}
                    <div className="d-flex align-items-center">
                      {/**begin::Currency*/}
                      <span className="fs-4 fw-semibold text-gray-500 me-1 align-self-start">
                        $
                      </span>
                      {/**end::Currency*/}
                      {/**begin::Amount*/}
                      <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
                        69,700
                      </span>
                      {/**end::Amount*/}
                      {/**begin::Badge*/}
                      <span className="badge badge-light-success fs-base">
                        <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>
                        2.2%
                      </span>
                      {/**end::Badge*/}
                    </div>
                    {/**end::Info*/}
                    {/**begin::Subtitle*/}
                    <span className="text-gray-500 pt-1 fw-semibold fs-6">
                      Tus ventas en abril
                    </span>
                    {/**end::Subtitle*/}
                  </div>
                  {/**end::Title*/}
                </div>
                {/**end::Header*/}
                {/**begin::Card body*/}
                <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center shadow">
                  {/**begin::Chart*/}
                  <div className="d-flex flex-center me-5 pt-2">
                    <div
                      id="kt_card_widget_17_chart"
                      style={{ minWidth: "70px", minHeight: "70px" }}
                      data-kt-size="70"
                      data-kt-line="11"
                    ></div>
                  </div>
                  {/**end::Chart*/}
                  {/**begin::Labels*/}
                  <div className="d-flex flex-column content-justify-center flex-row-fluid">
                    {/**begin::Label*/}
                    <div className="d-flex fw-semibold align-items-center">
                      {/**begin::Bullet*/}
                      <div className="bullet w-8px h-3px rounded-2 bg-success me-3"></div>
                      {/**end::Bullet*/}
                      {/**begin::Label*/}
                      <div className="text-gray-500 flex-grow-1 me-4">Hoy</div>
                      {/**end::Label*/}
                      {/**begin::Stats*/}
                      <div className="fw-bolder text-gray-700 text-xxl-end">
                        $7,660
                      </div>
                      {/**end::Stats*/}
                    </div>
                    {/**end::Label*/}
                    {/**begin::Label*/}
                    <div className="d-flex fw-semibold align-items-center my-3">
                      {/**begin::Bullet*/}
                      <div className="bullet w-8px h-3px rounded-2 bg-primary me-3"></div>
                      {/**end::Bullet*/}
                      {/**begin::Label*/}
                      <div className="text-gray-500 flex-grow-1 me-4">Ayer</div>
                      {/**end::Label*/}
                      {/**begin::Stats*/}
                      <div className="fw-bolder text-gray-700 text-xxl-end">
                        $2,820
                      </div>
                      {/**end::Stats*/}
                    </div>
                    {/**end::Label*/}
                    {/**begin::Label*/}
                    <div className="d-flex fw-semibold align-items-center">
                      {/**begin::Bullet*/}
                      <div
                        className="bullet w-8px h-3px rounded-2 me-3"
                        style={{ backgroundColor: "#E4E6EF" }}
                      ></div>
                      {/**end::Bullet*/}
                      {/**begin::Label*/}
                      <div className="text-gray-500 flex-grow-1 me-4">
                        Lunes
                      </div>
                      {/**end::Label*/}
                      {/**begin::Stats*/}
                      <div className="fw-bolder text-gray-700 text-xxl-end">
                        $45,257
                      </div>
                      {/**end::Stats*/}
                    </div>
                    {/**end::Label*/}
                  </div>
                  {/**end::Labels*/}
                </div>
                {/**end::Card body*/}
              </div>
              {/**end::Card widget 17*/}
              {/**begin::List widget 26*/}
              <div className="card card-flush h-lg-50 shadow">
                {/**begin::Header*/}
                <div className="card-header pt-5">
                  {/**begin::Title*/}
                  <h3 className="card-title text-gray-800 fw-bold">
                    Enlaces externos
                  </h3>
                  {/**end::Title*/}
                  {/**begin::Toolbar*/}
                  <div className="card-toolbar">
                    {/**begin::Menu*/}
                    <button
                      className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      <i className="ki-outline ki-dots-square fs-1 text-gray-500 me-n1"></i>
                    </button>
                    {/**end::Menu*/}
                  </div>
                  {/**end::Toolbar*/}
                </div>
                {/**end::Header*/}
                {/**begin::Body*/}
                <div className="card-body pt-5">
                  {/**begin::Item*/}
                  <div className="d-flex flex-stack">
                    {/**begin::Section*/}
                    <a href="#" className="text-primary fw-semibold fs-6 me-2">
                      My Wallet
                    </a>
                    {/**end::Section*/}
                    {/**begin::Action*/}
                    <button
                      type="button"
                      className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                    >
                      <i className="ki-outline ki-exit-right-corner fs-2"></i>
                    </button>
                    {/**end::Action*/}
                  </div>
                  {/**end::Item*/}
                  {/**begin::Separator*/}
                  <div className="separator separator-dashed my-3"></div>
                  {/**end::Separator*/}
                  {/**begin::Item*/}
                  <div className="d-flex flex-stack">
                    {/**begin::Section*/}
                    <a href="#" className="text-primary fw-semibold fs-6 me-2">
                      Back Office
                    </a>
                    {/**end::Section*/}
                    {/**begin::Action*/}
                    <button
                      type="button"
                      className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                    >
                      <i className="ki-outline ki-exit-right-corner fs-2"></i>
                    </button>
                    {/**end::Action*/}
                  </div>
                  {/**end::Item*/}
                  {/**begin::Separator*/}
                  <div className="separator separator-dashed my-3"></div>
                  {/**end::Separator*/}
                  {/**begin::Item*/}
                  <div className="d-flex flex-stack">
                    {/**begin::Section*/}
                    <a href="#" className="text-primary fw-semibold fs-6 me-2">
                      Gmail
                    </a>
                    {/**end::Section*/}
                    {/**begin::Action*/}
                    <button
                      type="button"
                      className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                    >
                      <i className="ki-outline ki-exit-right-corner fs-2"></i>
                    </button>
                    {/**end::Action*/}
                  </div>
                  {/**end::Item*/}
                </div>
                {/**end::Body*/}
              </div>
              {/**end::LIst widget 26*/}
            </div>
            {/**end::Col*/}
            {/**begin::Col*/}
            <div className="col-xxl-6">
              {/**begin::Engage widget 10*/}
              <div className="card card-flush h-md-100 shadow">
                {/**begin::Body*/}
                <div
                  className="card-body d-flex flex-column justify-content-between mt-9 bgi-no-repeat bgi-size-cover bgi-position-x-center pb-0"
                  style={{
                    backgroundPosition: "100% 50%",
                    backgroundImage: `url('../public/media/stock/900x600/42.png')`,
                  }}
                >
                  {/**begin::Wrapper*/}
                  <div className="mb-10">
                    {/**begin::Title*/}
                    <div className="fs-2hx fw-bold text-gray-800 text-center mb-13">
                      <span className="me-2">
                        Esto es lo que has logrado durante este mes, ¡siéntete
                        orgulloso!
                        <br />
                        <span className="position-relative d-inline-block text-danger">
                          <a href="#" className="text-danger opacity-75-hover">
                            ¡Felicidades!
                          </a>
                          {/**begin::Separator*/}
                          <span className="position-absolute opacity-15 bottom-0 start-0 border-4 border-danger border-bottom w-100"></span>
                          {/**end::Separator*/}
                        </span>
                      </span>
                    </div>
                    {/**end::Title*/}
                    {/**begin::Action*/}
                    <div className="text-center">
                      <a
                        href="#"
                        className="btn btn-sm btn-dark fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_upgrade_plan"
                      >
                        Mis estadisticas
                      </a>
                    </div>
                    {/**begin::Action*/}
                  </div>
                  {/**begin::Wrapper*/}
                  {/**begin::Illustration*/}
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
                  {/**end::Illustration*/}
                </div>
                {/**end::Body*/}
              </div>
              {/**end::Engage widget 10*/}
            </div>
            {/**end::Col*/}
          </div>
          {/**begin::Row*/}
        </div>
        {/**end::Row*/}
      </div>
      {/**end::Container*/}
    </>
  );
}
