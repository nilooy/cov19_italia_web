import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Clock from "react-live-clock";
import CardStat from "./CardStat";

const LeftSideBar = (props) => {
  const [state, setState] = useState({
    nuovi_positivi: 0,
    totale_casi: 0,
    deceduti: 0,
    casi_testati: 0,
    tamponi: 0,
    terapia_intensiva: 0,
    data: Date.now(),
  });

  const [toolTip, setToolTip] = useState(false);

  useEffect(() => {
    axios.get(process.env.API_URL + "stats").then((res) => {
      const resData = res.data[0];

      setState({
        nuovi_positivi: resData.nuovi_positivi,
        totale_casi: resData.totale_casi,
        deceduti: resData.deceduti,
        casi_testati: resData.casi_testati,
        tamponi: resData.tamponi,
        terapia_intensiva: resData.terapia_intensiva,
        "l'ultimo_aggiornamento": formatDate(resData.data),
      });

      showToolTip();
    });
  }, []);

  const showToolTip = () => {
    if (localStorage.getItem("darkMode") === null) {
      setTimeout(() => {
        setToolTip(true);
        setTimeout(() => {
          setToolTip(false);
        }, 5000);
      }, 4000);
    }
  };

  const makeUpperCase = (text) => {
    let splitedText = text.split("_");
    let result = "";

    for (let i = 0; i < splitedText.length; i++) {
      result += " " + splitedText[i][0].toUpperCase() + splitedText[i].slice(1);
    }

    return result;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("it-IT", { timeZone: "UTC" });
  };

  return (
    <Fragment>
      <div
        className={
          "border-bottom border-gray w-100 px-2 d-flex align-items-center  justify-content-between " +
          (props.darkMode ? "darkMode" : "")
        }
        style={{ height: 90 }}
      >
        <div style={{ width: "100%" }}>
          <div className="header-title">
            <img
              className="logo_anim"
              src="https://image.flaticon.com/icons/svg/2659/2659980.svg"
              alt="cov19"
            />
            <span className="h5 mb-0 mx-2 font-weight-bold">Statistica</span>

            <span
              className="lightIcon tooltip-c"
              onClick={props.toggleDarkMode}
            >
              <img
                src={
                  !props.darkMode
                    ? "https://image.flaticon.com/icons/svg/841/841641.svg"
                    : "https://image.flaticon.com/icons/png/512/841/841539.png"
                }
                width="20"
                alt="flaticon"
              />
              <span
                className={"tooltiptext " + (toolTip ? "tooltiptext-show" : "")}
              >
                Passare alla modalità luce
              </span>
            </span>
          </div>

          <p style={{ textAlign: "center" }}>
            <Clock
              format={"D/MM/YYYY:HH:mm:ss"}
              ticking={true}
              timezone={"Europe/Rome"}
            />
          </p>
        </div>
      </div>
      <div
        className={
          "w-100 d-flex flex-wrap align-items-start align-content-start position-relative customScrollbar " +
          (props.darkMode ? "bg-dark" : "")
        }
        style={{ height: "calc(100% - 90px)", overflowY: "auto" }}
      >
        {Object.keys(state).map((key, index) => (
          <CardStat
            title={makeUpperCase(key)}
            text={state[key]}
            key={index}
            dateField={key == "l'ultimo_aggiornamento" ? true : false}
            darkMode={props.darkMode}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default LeftSideBar;
