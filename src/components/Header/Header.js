import React from "react";

const Header = () => {
  return (
    <div className=" bg-light">
      <div>
        <h1
          className="text-center py-3"
          style={{
            fontSize: "1.7rem",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Covid-19 Estimator
        </h1>
      </div>
    </div>
  );
};

export default Header;
