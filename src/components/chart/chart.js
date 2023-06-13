import "./chart.css";
import Chartbars from "./chartbars";
const chart = (props) => {
    const datapointvalue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalmaximum = Math.max(...datapointvalue);
    return(
        <div className="chart">
            {props.dataPoints.map((datapoint)=>(
                <Chartbars
                key={datapoint.label}
                value={datapoint.value}
                MaxValue={totalmaximum}
                label={datapoint.label} />
            )
            )
           }
        </div>
    )

}
export default chart;