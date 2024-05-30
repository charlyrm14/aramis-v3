export default function Reportes() {
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
          <div className="row gy-5 g-xl-10">
            {/**begin::Col*/}
            <div className="col-xl-6 mb-xl-10">
              {/**begin::Table widget 2*/}
              <div className="card h-md-100">
                {/**begin::Header*/}
                <div className="card-header align-items-center border-0">
                  {/**begin::Title*/}
                  <h3 className="fw-bold text-gray-900 m-0">
                    Productos más vendidos
                  </h3>
                  {/**end::Title*/}
                  {/**begin::Menu*/}
                  <button
                    className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                    data-kt-menu-overflow="true"
                  >
                    <i className="ki-outline ki-dots-square fs-1"></i>
                  </button>
                  {/**end::Menu*/}
                </div>
                {/**end::Header*/}
                {/**begin::Body*/}
                <div className="card-body pt-2">
                  {/**begin::Nav*/}
                  <ul className="nav nav-pills nav-pills-custom mb-3">
                    {/**begin::Item*/}
                    <li className="nav-item mb-3 me-3 me-lg-6">
                      {/**begin::Link*/}
                      <a
                        className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden active w-80px h-85px py-4"
                        data-bs-toggle="pill"
                        href="#kt_stats_widget_2_tab_1"
                      >
                        {/**begin::Icon*/}
                        <div className="nav-icon">
                          <img
                            alt=""
                            src="../public/media/svg/products-categories/t-shirt.svg"
                            className=""
                          />
                        </div>
                        {/**end::Icon*/}
                        {/**begin::Subtitle*/}
                        <span className="nav-text text-gray-700 fw-bold fs-6 lh-1">
                          AXXA
                        </span>
                        {/**end::Subtitle*/}
                        {/**begin::Bullet*/}
                        <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                        {/**end::Bullet*/}
                      </a>
                      {/**end::Link*/}
                    </li>
                    {/**end::Item*/}
                    {/**begin::Item*/}
                    <li className="nav-item mb-3 me-3 me-lg-6">
                      {/**begin::Link*/}
                      <a
                        className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4"
                        data-bs-toggle="pill"
                        href="#kt_stats_widget_2_tab_2"
                      >
                        {/**begin::Icon*/}
                        <div className="nav-icon">
                          <img
                            alt=""
                            src="../public/media/svg/products-categories/gaming.svg"
                            className=""
                          />
                        </div>
                        {/**end::Icon*/}
                        {/**begin::Subtitle*/}
                        <span className="nav-text text-gray-700 fw-bold fs-6 lh-1">
                          ZURICH
                        </span>
                        {/**end::Subtitle*/}
                        {/**begin::Bullet*/}
                        <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                        {/**end::Bullet*/}
                      </a>
                      {/**end::Link*/}
                    </li>
                    {/**end::Item*/}
                    {/**begin::Item*/}
                    <li className="nav-item mb-3 me-3 me-lg-6">
                      {/**begin::Link*/}
                      <a
                        className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4"
                        data-bs-toggle="pill"
                        href="#kt_stats_widget_2_tab_3"
                      >
                        {/**begin::Icon*/}
                        <div className="nav-icon">
                          <img
                            alt=""
                            src="../public/media/svg/products-categories/watch.svg"
                            className=""
                          />
                        </div>
                        {/**end::Icon*/}
                        {/**begin::Subtitle*/}
                        <span className="nav-text text-gray-600 fw-bold fs-6 lh-1">
                          CHUBB
                        </span>
                        {/**end::Subtitle*/}
                        {/**begin::Bullet*/}
                        <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                        {/**end::Bullet*/}
                      </a>
                      {/**end::Link*/}
                    </li>
                    {/**end::Item*/}
                  </ul>
                  {/**end::Nav*/}
                  {/**begin::Tab Content*/}
                  <div className="tab-content">
                    {/**begin::Tap pane*/}
                    <div
                      className="tab-pane fade show active"
                      id="kt_stats_widget_2_tab_1"
                    >
                      {/**begin::Table container*/}
                      <div className="table-responsive">
                        {/**begin::Table*/}
                        <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                          {/**begin::Table head*/}
                          <thead>
                            <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                              <th className="ps-0 w-50px">PRODUCTO</th>
                              <th className="min-w-125px"></th>
                              <th className="text-end min-w-100px">
                                ASEGURADORA
                              </th>
                              <th className="pe-0 text-end min-w-100px">
                                TOTAL VENDIDOS
                              </th>
                            </tr>
                          </thead>
                          {/**end::Table head*/}
                          {/**begin::Table body*/}
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../public/media/stock/ecommerce/210.png"
                                  className="w-50px ms-n1"
                                  alt=""
                                />
                              </td>
                              <td className="ps-0">
                                <a
                                  href="apps/ecommerce/catalog/edit-product.html"
                                  className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                >
                                  TRAVEL SPORTS
                                </a>
                                <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                  Item: #XDG-2347
                                </span>
                              </td>
                              <td className="text-end pe-0">
                                <span className="text-gray-800 fw-bold d-block fs-6">
                                  TRAVEL
                                </span>
                              </td>
                              <td className="text-end pe-0">
                                <span className="text-gray-800 fw-bold d-block fs-6">
                                  45
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../public/media/stock/ecommerce/215.png"
                                  className="w-50px ms-n1"
                                  alt=""
                                />
                              </td>
                              <td className="ps-0">
                                <a
                                  href="apps/ecommerce/catalog/edit-product.html"
                                  className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                >
                                  ESCUDO FAMILIAR
                                </a>
                                <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                  Item: #XDG-1321
                                </span>
                              </td>
                              <td className="text-end pe-0">
                                <span className="text-gray-800 fw-bold d-block fs-6">
                                  TRAVEL
                                </span>
                              </td>
                              <td className="text-end pe-0">
                                <span className="text-gray-800 fw-bold d-block fs-6">
                                  60
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../public/media/stock/ecommerce/209.png"
                                  className="w-50px ms-n1"
                                  alt=""
                                />
                              </td>
                              <td className="ps-0">
                                <a
                                  href="apps/ecommerce/catalog/edit-product.html"
                                  className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                >
                                  TRAVEL ANNUAL
                                </a>
                              </td>
                              <td className="text-end pe-0">
                                <span className="text-gray-800 fw-bold d-block fs-6">
                                  TRAVEL
                                </span>
                              </td>
                              <td className="text-end pe-0">
                                <span className="text-gray-800 fw-bold d-block fs-6">
                                  120
                                </span>
                              </td>
                            </tr>
                          </tbody>
                          {/**end::Table body*/}
                        </table>
                        {/**end::Table*/}
                      </div>
                      {/**end::Table container*/}
                    </div>
                    {/**end::Tap pane*/}
                  </div>
                  {/**end::Tab Content*/}
                </div>
                {/**end: Card Body*/}
              </div>
              {/**end::Table widget 2*/}
            </div>
            {/**end::Col*/}
            {/**begin::Col*/}
            <div className="col-xl-6 mb-5 mb-xl-10">
              {/**begin::Chart widget 4*/}
              <div className="card card-flush overflow-hidden h-md-100">
                {/**begin::Header*/}
                <div className="card-header py-5">
                  {/**begin::Title*/}
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold text-gray-900">
                      Ventas este mes
                    </span>
                    <span className="text-gray-500 mt-1 fw-semibold fs-6">
                      todos los productos
                    </span>
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
                      <i className="ki-outline ki-dots-square fs-1"></i>
                    </button>
                    {/**end::Menu*/}
                  </div>
                  {/**end::Toolbar*/}
                </div>
                {/**end::Header*/}
                {/**begin::Card body*/}
                <div className="card-body d-flex justify-content-between flex-column pb-1 px-0">
                  {/**begin::Info*/}
                  <div className="px-9 mb-5">
                    {/**begin::Statistics*/}
                    <div className="d-flex align-items-center mb-2">
                      {/**begin::Currency*/}
                      <span className="fs-4 fw-semibold text-gray-500 align-self-start me-1">
                        $
                      </span>
                      {/**end::Currency*/}
                      {/**begin::Value*/}
                      <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                        3,706
                      </span>
                      {/**end::Value*/}
                      {/**begin::Label*/}
                      <span className="badge badge-light-success fs-base">
                        <i className="ki-outline ki-arrow-down fs-5 text-success ms-n1"></i>
                        4.5%
                      </span>
                      {/**end::Label*/}
                    </div>
                    {/**end::Statistics*/}
                    {/**begin::Description*/}
                    <span className="fs-6 fw-semibold text-gray-500">
                      Total de ventas este mes
                    </span>
                    {/**end::Description*/}
                  </div>
                  {/**end::Info*/}
                  {/**begin::Chart*/}
                  <div
                    id="kt_charts_widget_4"
                    className="min-h-auto ps-4 pe-6"
                    style={{ height: "300px" }}
                  ></div>
                  {/**end::Chart*/}
                </div>
                {/**end::Card body*/}
              </div>
              {/**end::Chart widget 4*/}
            </div>
            {/**end::Col*/}
          </div>
          {/**end::Row*/}
        </div>
      </div>
    </>
  );
}
