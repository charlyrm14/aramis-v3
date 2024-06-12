import ProviderDetalles from "./ProviderDetalles";
//Components
import { ToastContainer } from "react-toastify";
//Views
import Search from "./Search/Search";
import Graphics from "./Graphics/Graphics";

const Dashboard = () => {
  return (
    <ProviderDetalles>
      <div className="card rounded-0 shadow-none border-0 bgi-no-repeat bgi-position-x-end bgi-size-cover" style={{ backgroundColor: "#383133", backgroundSize: "auto 100%", backgroundImage: `url('../public/media/misc/taieri.svg')`}}>
        <div className="card-body container-xxl pt-10 pb-8">
          <Search />
          <Graphics />
          <ToastContainer />
        </div>
      </div>
    </ProviderDetalles>
  );
};

export default Dashboard;
