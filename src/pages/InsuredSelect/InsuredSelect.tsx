import ProviderDetalles from "./ProviderDetalles";
//Components
import { ToastContainer } from "react-toastify";
//Views
import Insured from "./Insured/Insured";

const InsuredSelect = () => {
  return (
    <ProviderDetalles>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div className="container-xxl" id="kt_content_container">
          <div className="card border-0 ">
            <Insured />
            <ToastContainer />
          </div>
        </div>
      </div>
    </ProviderDetalles>
  );
};

export default InsuredSelect;
