import React from "react";

function Container(props){

    return(
        <div className="container-wrapper">
            { props.children}
        </div>
    )
}
export default Container;