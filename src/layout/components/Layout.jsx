import Aside from "./Aside"
import Header from "./Header"

export default function Layout ({ children }) {

    return (
        <div className="d-flex flex-column flex-root">
			{/** begin::Page*/}
			<div className="page d-flex flex-row flex-column-fluid">
                <Aside/>
                <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                    <Header/>
                    {children}
                </div>
            </div>
        </div>
    )
}