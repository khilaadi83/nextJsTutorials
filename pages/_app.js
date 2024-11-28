import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;