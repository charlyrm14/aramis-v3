import { Link } from "react-router-dom";

export default function Aside () {
    return (
        <div id="kt_aside" className="aside overflow-visible overflow-lg-auto" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
            {/** begin::Logo*/}
            <div className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-8" id="kt_aside_logo">
                <a href="#">
                    <img alt="Logo" src="https://aramis.insuranceservices.mx/apple-touch-icon.png" className="h-55px" />
                </a>
            </div>
            {/** end::Logo*/}
            {/** begin::Nav*/}
            <div className="aside-nav d-flex flex-column align-lg-center flex-column-fluid w-100 pt-5 pt-lg-0" id="kt_aside_nav">
                {/** begin::Primary menu*/}
                <div className="hover-scroll-y scroll-ms my-2 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu" data-kt-scroll-offset="5px">
                    {/** begin::Menu*/}
                    <div id="kt_aside_menu" className="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-semibold fs-6" data-kt-menu="true">
                        {/** begin:Menu item*/}
                        <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item here show py-2">
                            {/** begin:Menu link*/}
                            <Link to="/">
                                <span className="menu-link menu-center">
                                    <span className="menu-icon me-0">
                                        <i className="ki-outline ki-home-2 fs-2x"></i>
                                    </span>
                                </span>
                            </Link>
                            {/** end:Menu link*/}
                        </div>
                        {/** end:Menu item*/}
                        {/** begin:Menu item*/}
                        <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item py-2">
                            {/** begin:Menu link*/}
                            <Link to="/reportes">
                                <span className="menu-link menu-center">
                                    <span className="menu-icon me-0">
                                        <i className="ki-outline ki-notification-status fs-2x"></i>
                                    </span>
                                </span>
                            </Link>
                            {/** end:Menu link*/}
                        </div>
                        {/** end:Menu item*/}
                    </div>
                    {/** end::Menu*/}
                </div>
                {/** end::Primary menu*/}
            </div>
            {/** end::Nav*/}
            {/** begin::Footer*/}
            <div className="aside-footer d-flex flex-column align-items-center flex-column-auto" id="kt_aside_footer">
                {/** begin::Menu*/}
                <div className="mb-7">
                <button
                    type='button'
                    className='btn btm-sm btn-icon btn-color-white btn-active-color-primary btn-active-light'
                    data-kt-menu-trigger='click'
                    data-kt-menu-overflow='true'
                    data-kt-menu-placement='top-start'
                    data-bs-toggle='tooltip'
                    data-bs-placement='right'
                    data-bs-dismiss='click'
                    title='Quick actions'>
                        <i className="ki-outline ki-notification-status fs-1"></i>
                    </button>
                    {/** begin::Menu 2*/}
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                        {/** begin::Menu item*/}
                        <div className="menu-item px-3">
                            <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Acciones rápidas</div>
                        </div>
                        {/** end::Menu item*/}
                        {/** begin::Menu separator*/}
                        <div className="separator mb-3 opacity-75"></div>
                        {/** end::Menu separator*/}
                        {/** begin::Menu item*/}
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">Mi perfil</a>
                        </div>
                        {/** end::Menu item*/}

                        {/** begin::Menu separator*/}
                        <div className="separator mt-3 opacity-75"></div>
                        {/** end::Menu separator*/}
                        {/** begin::Menu item*/}
                        <div className="menu-item px-3">
                            <div className="menu-content px-3 py-3">
                                <a className="btn btn-primary btn-sm px-4" href="#">Cerrar sesión</a>
                            </div>
                        </div>
                        {/** end::Menu item*/}
                    </div>
                    {/** end::Menu 2*/}
                </div>
                {/** end::Menu*/}
            </div>
            {/** end::Footer*/}
        </div>
    )
}