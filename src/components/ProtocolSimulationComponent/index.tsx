import useProtocolSimulationStore from "@/store/protocolSimulation.store";
import { ProtocolSimulationFormDataType } from "@/types/ProtocolSimulation.type";
import React from "react";

const ProtocolSimulationComponent = () => {
  const { setFormData } = useProtocolSimulationStore();

  const handleChange = (e: any) => {
    setFormData({
      [e.target.name]: Number(e.target.value),
    } as ProtocolSimulationFormDataType);
  };

  return (
    <div>
      <h3>Protocol Simulation</h3>
      <div>
        <label>Avax Price</label>

        <input type="text" name="avaxPrice" onChange={handleChange} required />
      </div>

      <div>
        <label>Amount of AVAX Deposited Into The Protocol</label>

        <input
          type="text"
          name="amountOfAVAXDepositedIntoTheProtocol"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Amount of aUSD In Circulation</label>

        <input
          type="text"
          name="amountOfAUSDInCirculation"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Amount of xAVAX In Circulation</label>

        <input
          type="text"
          name="amountOfXAVAXInCirculation"
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default ProtocolSimulationComponent;
