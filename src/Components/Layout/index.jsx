import Navbar from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
