import React, { Fragment, useState } from "react";

const RightSideBar = (props) => {
  const [state, setState] = useState("province");

  const showProvince = (province, index) => (
    <div
      key={index}
      className="d-flex border-bottom border-gray w-100 px-1 font-weight-bold text-secondary align-items-center"
    >
      <span className="pl-3" style={{ fontSize: "12px" }}>
        {province.denominazione_provincia || province.denominazione_regione}
      </span>
      <div className="pl-2" style={{ width: 30, height: 30 }}>
        <div className="badge badge-info">{province.totale_casi}</div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <div
        className="border-bottom border-gray px-2 row"
        style={{ margin: "0 auto" }}
      >
        <span
          className={
            "col-md-6 col-sm-12 h5 text-dark font-weight-bold btn " +
            (state === "province" ? "btn-info" : "btn-outline-info")
          }
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.getData("province");
            setState("province");
          }}
        >
          Provincia
        </span>
        <span
          className={
            "col-md-6 col-sm-12 h5 text-dark font-weight-bold btn " +
            (state === "regione" ? "btn-info" : "btn-outline-info")
          }
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.getData("regione");
            setState("regione");
          }}
        >
          Regione
        </span>
      </div>

      <div
        className="w-100 d-flex flex-wrap align-items-start align-content-start position-relative"
        style={{ height: "calc(100% - 90px)", overflowY: "auto" }}
      >
        {props.data.map((item, index) => showProvince(item, index))}
      </div>
    </Fragment>
  );
};

export default RightSideBar;
