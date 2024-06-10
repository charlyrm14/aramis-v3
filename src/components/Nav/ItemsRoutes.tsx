import React from "react";
import { Link } from "react-router-dom";

interface ItemsRoutesProps {
  route: string;
  icon: string;
}

const ItemsRoutes: React.FC<ItemsRoutesProps> = ({ route, icon }) => {
  return (
    <div
      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
      data-kt-menu-placement="right-start"
      className="menu-item py-2"
    >
      {/** begin:Menu link*/}
      <Link to={route}>
        <span className="menu-link menu-center">
          <span className="menu-icon me-0">
            <i className={`ki-outline fs-2x ${icon}`}></i>
          </span>
        </span>
      </Link>
      {/** end:Menu link*/}
    </div>
  );
};

export default ItemsRoutes;
