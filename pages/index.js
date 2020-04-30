import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import LeftSideBar from "../components/LeftSideBar";
import Map from "../components/Map";
import RightSideBar from "../components/RightSideBar";
import Layout from "../Layout";

const Index = () => {
  const [state, setState] = useState([]);

  const [darkMode, setDarkMode] = useState(true);

  const getDarkMode = () => {
    if(localStorage.getItem("darkMode") == "true") setDarkMode(true);
    else if(localStorage.getItem("darkMode") == "false") setDarkMode(false);
    else setDarkMode(true);
  };

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", !darkMode);

    setDarkMode(!darkMode);
  };

  useEffect(() => {
    getDarkMode();
    getData("province");
  }, []);

  const getData = (route) => {
    axios.get(process.env.API_URL + route).then((res) => {
      let data = res.data;

      data = data.filter(
        (item) =>
          item.denominazione_provincia != "In fase di definizione/aggiornamento"
      );

      setState(data);
    });
  };

  return (
    <Layout>
      <main className="container-fluid position-absolute h-100 bg-light">
        <div className="row position-absolute w-100 h-100">
          <section className="col-md-2 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
            <LeftSideBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </section>

          <section className="col-md-8 px-0 border-right border-left border-gray position-relative h-100">
            <Map darkMode={darkMode} cordinates={state} />
            <Footer />
          </section>

          <section
            className={
              "col-md-2 position-relative d-flex flex-wrap h-100 align-items-start align-content-between px-1 py-1 " +
              (darkMode ? "darkMode" : "")
            }
            style={{ overflowY: "scroll" }}
          >
            <RightSideBar darkMode={darkMode} getData={getData} data={state} />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
