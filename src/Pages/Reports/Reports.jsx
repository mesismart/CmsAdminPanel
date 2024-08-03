import React, { useState } from "react";
import { Button } from "@mui/material";
import useCounter from "../../CustomHooks/CounterHook";

export default function Report() {
  const { value, addClicked, minetClicked, resetCount } = useCounter(0);

  return (
    <div className=" justify-center items-center">
      <Button onClick={minetClicked} variant="contained">
        -
      </Button>
      <span className="mx-10">{value}</span>
      <Button onClick={addClicked} variant="contained">
        +
      </Button>
    </div>
  );
}
