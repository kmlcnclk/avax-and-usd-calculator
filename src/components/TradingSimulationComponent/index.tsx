import useTradingSimulationStore from "@/store/tradingSimulation.store";
import { TradingSimulationFormDataType } from "@/types/TradingSimulation.type";
import React from "react";

const TradingSimulationComponent = () => {
  const { setFormData } = useTradingSimulationStore();

  const handleChange = (e: any) => {
    setFormData({
      [e.target.name]: Number(e.target.value),
    } as TradingSimulationFormDataType);
  };

  return (
    <div>
      <h3>Trading Simulation</h3>
      <div>
        <label>Amount of AVAX Deposited By The User</label>

        <input
          type="text"
          name="amountOfAVAXDepositedByTheUser"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Change in AVAX Price</label>

        <input
          type="text"
          name="changeInAVAXPrice"
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default TradingSimulationComponent;
