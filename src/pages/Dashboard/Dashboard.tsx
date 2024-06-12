import ProviderDetalles from "./ProviderDetalles";
//Components
import { ToastContainer } from "react-toastify";
//Views
import Search from "./Search/Search";

const Dashboard = () => {
  return (
    <ProviderDetalles>
      <div className="card rounded-0 border-0 bgi-no-repeat bgi-position-x-end bgi-size-cover">
        <div className="card-body container-xxl pt-10 pb-8">
          <Search />
          <ToastContainer />
        </div>
      </div>
    </ProviderDetalles>
  );
};

export default Dashboard;
