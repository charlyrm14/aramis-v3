const Header = () => {
  return (
    <div id="kt_header" className="header align-items-stretch">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        <div
          className="d-flex align-items-center d-lg-none ms-n3 me-1"
          title="Show aside menu"
        >
          <div
            className="btn btn-icon btn-active-color-primary w-40px h-40px"
            id="kt_aside_toggle"
          >
            <i className="ki-outline ki-abstract-14 fs-1"></i>
          </div>
        </div>
        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <a href="#" className="d-lg-none">
            <img
              alt="Logo"
              src="https://aramis.insuranceservices.mx/apple-touch-icon.png"
              className="h-25px"
            />
          </a>
        </div>
        <div className="d-flex align-items-center" id="kt_header_wrapper">
          <div
            className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 pb-5 pb-lg-0"
            data-kt-swapper="true"
            data-kt-swapper-mode="prepend"
            data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_wrapper'}"
          >
            <h1 className="text-gray-900 fw-bold my-1 fs-3 lh-1">Inicio</h1>
          </div>
        </div>
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          <div className="d-flex align-items-stretch" id="kt_header_nav">
            <div
              className="header-menu align-items-stretch"
              data-kt-drawer="true"
              data-kt-drawer-name="header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="{default:'200px', '300px': '250px'}"
              data-kt-drawer-direction="end"
              data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
            >
              <div
                className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-state-primary menu-title-gray-600 menu-arrow-gray-500 fw-semibold fs-6 my-5 my-lg-0 px-2 px-lg-0 align-items-stretch"
                id="#kt_header_menu"
                data-kt-menu="true"
              >
                <div
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title">My Wallet</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-0 me-lg-2"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title">Reportes</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-stretch justify-self-end flex-shrink-0">
            <div className="d-flex align-items-center ms-1 ms-lg-3">
              <div
                className="btn btn-icon btn-active-light-primary position-relative btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                id="kt_drawer_chat_toggle"
              >
                <i className="ki-outline ki-message-text-2 fs-1"></i>
                <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
              </div>
            </div>
            <div className="d-flex align-items-center ms-1 ms-lg-3">
              <a
                href="#"
                className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
              >
                <i className="ki-outline ki-night-day theme-light-show fs-1"></i>
                <i className="ki-outline ki-moon theme-dark-show fs-1"></i>
              </a>
              <div
                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                data-kt-menu="true"
                data-kt-element="theme-mode-menu"
              >
                <div className="menu-item px-3 my-0">
                  <a
                    href="#"
                    className="menu-link px-3 py-2"
                    data-kt-element="mode"
                    data-kt-value="light"
                  >
                    <span className="menu-icon" data-kt-element="icon">
                      <i className="ki-outline ki-night-day fs-2"></i>
                    </span>
                    <span className="menu-title">Light</span>
                  </a>
                </div>
                <div className="menu-item px-3 my-0">
                  <a
                    href="#"
                    className="menu-link px-3 py-2"
                    data-kt-element="mode"
                    data-kt-value="dark"
                  >
                    <span className="menu-icon" data-kt-element="icon">
                      <i className="ki-outline ki-moon fs-2"></i>
                    </span>
                    <span className="menu-title">Dark</span>
                  </a>
                </div>
                <div className="menu-item px-3 my-0">
                  <a
                    href="#"
                    className="menu-link px-3 py-2"
                    data-kt-element="mode"
                    data-kt-value="system"
                  >
                    <span className="menu-icon" data-kt-element="icon">
                      <i className="ki-outline ki-screen fs-2"></i>
                    </span>
                    <span className="menu-title">System</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="d-flex align-items-center ms-1 ms-lg-3"
              id="kt_header_user_menu_toggle"
            >
              <div
                className="cursor-pointer symbol symbol-30px symbol-md-40px"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
              >
                <img src="../public/media/avatars/300-1.jpg" alt="user" />
              </div>
              <div
                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                data-kt-menu="true"
              >
                <div className="menu-item px-3">
                  <div className="menu-content d-flex align-items-center px-3">
                    <div className="symbol symbol-50px me-5">
                      <img alt="Logo" src="../public/media/avatars/300-1.jpg" />
                    </div>
                    <div className="d-flex flex-column">
                      <div className="fw-bold d-flex align-items-center fs-5">
                        Juan P
                        <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                          Pro
                        </span>
                      </div>
                      <a
                        href="#"
                        className="fw-semibold text-muted text-hover-primary fs-7"
                      >
                        juan@correo.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="separator my-2"></div>
                <div className="menu-item px-5">
                  <a href="#" className="menu-link px-5">
                    Mi perfil
                  </a>
                </div>
                <div className="separator my-2"></div>
                <div className="menu-item px-5">
                  <a href="#" className="menu-link px-5">
                    Cerrar sesión{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
