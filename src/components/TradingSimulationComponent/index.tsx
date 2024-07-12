import React from "react";
import useTradingSimulationStore from "@/store/tradingSimulation.store";
import { TradingSimulationFormDataType } from "@/types/TradingSimulation.type";
import FormInput from "../common/FormInput";

const TradingSimulationComponent = () => {
  const { setFormData } = useTradingSimulationStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      [e.target.name]: Number(e.target.value),
    } as TradingSimulationFormDataType);
  };

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-center mb-7 font-semibold xs:text-sm sm:text-lg text-gray-700">
        Trading Simulation
      </h3>

      <FormInput
        label="Amount of AVAX Deposited By The User"
        name="amountOfAVAXDepositedByTheUser"
        handleChange={handleChange}
      />

      <FormInput
        label="Change in AVAX Price"
        name="changeInAVAXPrice"
        handleChange={handleChange}
      />
    </div>
  );
};

export default TradingSimulationComponent;
