import React, { useState } from "react";

export default function useCounter(number = 0) {
  const [value, SetValue] = useState(number);

  const addClicked = () => {
    console.log("add clicked");
    SetValue((prev) => prev + 1);
  };

  const minetClicked = () => {
    console.log("minet clicked");
    SetValue((prev) => prev - 1);
  };

  const resetCount = () => {
    console.log("resetCount clicked");
    SetValue((prev) => prev - 1);
  };

  return { value, addClicked, minetClicked, resetCount };
}
