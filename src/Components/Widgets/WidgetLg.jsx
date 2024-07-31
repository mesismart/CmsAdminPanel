import React from "react";
import "./WidgetLg.css";

import { transactions } from "../../datas";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton" + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amout</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {transactions.map((transactions) => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="images/Profile/prof2.jfif"
                className="widgetLgImg"
                alt=""
              />
              <span className="widgetLgName">alexanra</span>
            </td>
            <td className="widgetLgDate">5 Jun 2022</td>
            <td className="widgetLgAmount">20$</td>
            <td className="widgetLgStatus">
              <Button className="approved"></Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
