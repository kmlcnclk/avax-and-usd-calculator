"use client";

import React from "react";
import ProtocolSimulationComponent from "../ProtocolSimulationComponent";
import TradingSimulationComponent from "../TradingSimulationComponent";
import useProtocolSimulationStore from "@/store/protocolSimulation.store";
import useTradingSimulationStore from "@/store/tradingSimulation.store";
import CalculatedResultComponent from "../CalculatedResultComponent";

function TaskComponent() {
  const {
    updateAllCalculations: updateAllCalculationsProtocolSimulation,
    calculated: calculatedProtocolSimulation,
  } = useProtocolSimulationStore();

  const {
    updateAllCalculations: updateAllCalculationsTradingSimulation,
    calculated: calculatedTradingSimulation,
  } = useTradingSimulationStore();

  const submitFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateAllCalculationsProtocolSimulation();
    updateAllCalculationsTradingSimulation();
  };

  return (
    <div className="space-y-6 flex justify-center items-center flex-col">
      <form
        onSubmit={submitFunc}
        className="flex justify-center items-center flex-col bg-gray-200 xs:p-5 sm:p-10 rounded-lg shadow-lg space-y-5 xs:w-full lg:w-min"
      >
        <div className="flex justify-center xs:space-y-7 lg:space-y-0 xs:space-x-0 lg:space-x-10 lg:flex-row xs:flex-col w-full">
          <ProtocolSimulationComponent />
          <TradingSimulationComponent />
        </div>

        <button type="submit" className="custom-button">
          Calculate
        </button>
      </form>

      {calculatedProtocolSimulation.xAVAXPrice &&
      calculatedTradingSimulation.xAVAXMinted ? (
        <CalculatedResultComponent
          {...{ calculatedProtocolSimulation, calculatedTradingSimulation }}
        />
      ) : null}
    </div>
  );
}

export default TaskComponent;
