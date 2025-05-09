import React from "react";

const NotFound = () => {
  return <>
    <div className="page_404">
      <div className="container-fluid containerError_page">
        <div className="row">
          <div className="col-sm-12 col-sm-offset-1  text-center" >
            <div className="four_zero_four_bg" >
              <h1 className="text-center ">404</h1>
            </div>
            <div className="contant_box_404" >
              <h3 className="h2">Look like you're lost</h3>
              <p>the page you are looking for not avaible!</p>
              <a className="link_404" href="/">Go to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default NotFound;
