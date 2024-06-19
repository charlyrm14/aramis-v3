import Navigation from "@components/Navigation/Navigation";
import Header from "@components/Header/Header";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column flex-root">
      {/** begin::Page*/}
      <div className="page d-flex flex-row flex-column-fluid">
        <Navigation />
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
