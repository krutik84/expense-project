import "./chartbars.css";
import React from "react";
const chartbars = (props) => {
    let Fillheight = "0%";
    if (props.MaxValue > 0){
        Fillheight = Math.round((props.value/props.MaxValue)*100)+"%";
    }
    
    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:Fillheight}}></div>
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </div>
    )
}
export default chartbars;