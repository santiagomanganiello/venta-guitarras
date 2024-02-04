import React from "react";
import spinner from "./giphy.gif";

const Spinner = () => {
    return (
        <div>
        {" "}
        <img
            src={spinner}
            alt={"Loading..."}
            style={{ width: "300px", margin: "auto", padding: "20px", display: "block" }}
        />
        </div>
    );
};

export default Spinner;