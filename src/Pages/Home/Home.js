import React from "react";
import Feature from "../../Components/features/Feature";
import Widget from "../../Components/Widgets/Widget";
import Chart from "../../Components/Chart/Chart";
import { xAxisData } from "../../datas";
import WidgetLg from "../../Components/Widgets/WidgetLg";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title={"Month Sale"} data={xAxisData} dataKey={"sale"} />
      <div className="homeWidgets">
        <Widget />
        <WidgetLg />
      </div>
      <h1 className="w-10 h-6  shadow-2xl mb-10 border-2">mmiiiii</h1>
    </div>
  );
}
