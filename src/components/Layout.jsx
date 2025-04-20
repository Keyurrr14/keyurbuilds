import { Outlet } from "react-router-dom";
import usePreventContextMenu from "../hooks/usePreventContextMenu";

const Layout = () => {
  usePreventContextMenu();

  return <Outlet />;
};

export default Layout;
