
import Chart from "../chart/chart";
const expensechart = (props) =>{
    const chartdatapoints = [
        {label:"jan" ,value:0},
        {label:"fab" ,value:0},
        {label:"mar" ,value:0},
        {label:"apr" ,value:0},
        {label:"may" ,value:0},
        {label:"jun" ,value:0},
        {label:"jul" ,value:0},
        {label:"aug" ,value:0},
        {label:"sep" ,value:0},
        {label:"oct" ,value:0},
        {label:"nev" ,value:0},
        {label:"dec" ,value:0}
    ] ;
    for(const expense of props.expenses){
        const expmonth = expense.date.getMonth();
        chartdatapoints[expmonth].value += expense.amount;
    }   
    return <Chart dataPoints={chartdatapoints} />

}
export default expensechart;