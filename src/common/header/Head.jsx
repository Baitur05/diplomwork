import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +996 553 788 791</label>
            <i className="fa fa-envelope"></i>
            <label> daniel.karimov@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ"s</label>
            <label>Жардам?</label>
            <span>🏳️</span>
            <label>Кыргызча</label>
            <span>🏳️</span>
            <label>Орусча</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
