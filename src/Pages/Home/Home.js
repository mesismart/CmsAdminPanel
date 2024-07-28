import React from "react";
import Feature from "../../Components/features/Feature";
import Widget from "../../Components/Widgets/Widget";
import Chart from "../../Components/Chart/Chart";
import { xAxisData } from "../../datas";

export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title={"Month Sale"} data={xAxisData} dataKey={"sale"} />
      <div className="homeWidgets">
        <Widget />
      </div>
    </div>
  );
}
