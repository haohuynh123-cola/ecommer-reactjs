import React from "react";
import Routing from "./routing/Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./hook/ScrollToTop";
function App() {
      return (
            <>
                  <ScrollToTop />
                  <Routing admin={true}></Routing>
                  <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                  />
            </>
      );
}

export default App;
