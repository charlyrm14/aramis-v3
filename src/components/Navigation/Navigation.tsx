import ItemsRoutes from "./ItemsRoutes";

const Navigation = () => {
  return (
    <div
      id="kt_aside"
      className="aside overflow-visible overflow-lg-auto"
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="auto"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_toggle"
    >
      <div
        className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-8"
        id="kt_aside_logo"
      >
        <a href="/">
          <img
            alt="Logo"
            src="https://aramis.insuranceservices.mx/apple-touch-icon.png"
            className="h-55px"
          />
        </a>
      </div>
      <div
        className="aside-nav d-flex flex-column align-lg-center flex-column-fluid w-100 pt-5 pt-lg-0"
        id="kt_aside_nav"
      >
        <div
          className="hover-scroll-y scroll-ms my-2 my-lg-5"
          id="kt_aside_menu_wrapper"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
          data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu"
          data-kt-scroll-offset="5px"
        >
          <div
            id="kt_aside_menu"
            className="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-semibold fs-6"
            data-kt-menu="true"
          >
            <ItemsRoutes route="/dashboard" icon="ki-home-2" />
            <ItemsRoutes route="/dashboard" icon="ki-notification-status" />
          </div>
        </div>
      </div>
      <div
        className="aside-footer d-flex flex-column align-items-center flex-column-auto"
        id="kt_aside_footer"
      >
        <div className="mb-7">
          <button
            type="button"
            className="btn btm-sm btn-icon btn-color-white btn-active-color-primary btn-active-light"
            data-kt-menu-trigger="click"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="top-start"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title="Quick actions"
          >
            <i className="ki-outline ki-notification-status fs-1"></i>
          </button>
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
            data-kt-menu="true"
          >
            <div className="menu-item px-3">
              <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                Acciones rápidas
              </div>
            </div>
            <div className="separator mb-3 opacity-75"></div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                Mi perfil
              </a>
            </div>

            <div className="separator mt-3 opacity-75"></div>
            <div className="menu-item px-3">
              <div className="menu-content px-3 py-3">
                <a className="btn btn-primary btn-sm px-4" href="#">
                  Cerrar sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
