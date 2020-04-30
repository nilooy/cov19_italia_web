import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer footer-left">Made with &#10084; by Niloy</div>
      <div className="footer footer-right">
        <a
          target="_blank"
          className="text-white"
          href="https://github.com/theprogboy/cov19_italia_api"
        >
          Api{" "}
          <img
            width="20"
            src="https://image.flaticon.com/icons/svg/1051/1051326.svg"
            alt=""
          />
        </a>{" "}
        Datasource:{" "}
        <a
          target="_blank"
          className="text-white"
          href="https://github.com/pcm-dpc/COVID-19"
        >
          Protezione Civile
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
