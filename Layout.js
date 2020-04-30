import Head from "next/head";
import React, { Fragment } from "react";

const Layout = (props) => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <title>Covid19 italia</title>
      <link
        rel="shortcut icon"
        href="https://image.flaticon.com/icons/svg/2659/2659980.svg"
      />
    </Head>
    {props.children}
  </Fragment>
);

export default Layout;
