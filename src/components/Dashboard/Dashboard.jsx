import React from "react";
import NavBar from "../navbar/index"
const Dashboard = ( {children} ) => {
    return (
        <div>
            <NavBar />
            <div>{children}</div>
        </div>
    )
}

export default Dashboard