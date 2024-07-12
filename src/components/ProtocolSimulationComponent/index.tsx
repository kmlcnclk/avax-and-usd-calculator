import useProtocolSimulationStore from "@/store/protocolSimulation.store";
import { ProtocolSimulationFormDataType } from "@/types/ProtocolSimulation.type";
import React from "react";
import FormInput from "../common/FormInput";

const ProtocolSimulationComponent = () => {
  const { setFormData } = useProtocolSimulationStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      [e.target.name]: Number(e.target.value),
    } as ProtocolSimulationFormDataType);
  };

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-center mb-7 font-semibold xs:text-sm md:text-lg text-gray-700">
        Protocol Simulation
      </h3>

      <FormInput
        label="Avax Price"
        name="avaxPrice"
        handleChange={handleChange}
      />

      <FormInput
        label="Amount of AVAX Deposited Into The Protocol"
        name="amountOfAVAXDepositedIntoTheProtocol"
        handleChange={handleChange}
      />

      <FormInput
        label="Amount of aUSD In Circulation"
        name="amountOfAUSDInCirculation"
        handleChange={handleChange}
      />

      <FormInput
        label="Amount of xAVAX In Circulation"
        name="amountOfXAVAXInCirculation"
        handleChange={handleChange}
      />
    </div>
  );
};

export default ProtocolSimulationComponent;
