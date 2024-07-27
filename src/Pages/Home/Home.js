import React from "react";
import Feature from "../../Components/features/Feature";
import Widget from "../../Components/Widgets/Widget";

export default function Home() {
  return (
    <div className="home">
      <Feature />
      <div className="homeWidgets">
        <Widget />
      </div>
    </div>
  );
}
