"use client";

import React from "react";
import ProtocolSimulationComponent from "../ProtocolSimulationComponent";
import TradingSimulationComponent from "../TradingSimulationComponent";
import useProtocolSimulationStore from "@/store/protocolSimulation.store";
import useTradingSimulationStore from "@/store/tradingSimulation.store";

function TaskComponent() {
  const {
    updateAllCalculations: updateAllCalculationsProtocolSimulation,
    calculated: calculatedProtocolSimulation,
  } = useProtocolSimulationStore();

  const {
    updateAllCalculations: updateAllCalculationsTradingSimulation,
    calculated: calculatedTradingSimulation,
  } = useTradingSimulationStore();

  const submitFunc = (e: any) => {
    e.preventDefault();

    updateAllCalculationsProtocolSimulation();
    updateAllCalculationsTradingSimulation();
  };

  console.log(calculatedProtocolSimulation, calculatedTradingSimulation);

  return (
    <form onSubmit={submitFunc}>
      <ProtocolSimulationComponent />
      <TradingSimulationComponent />

      <button type="submit">Calculate</button>
    </form>
  );
}

export default TaskComponent;
