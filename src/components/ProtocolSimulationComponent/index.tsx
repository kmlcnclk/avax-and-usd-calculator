"use client";

import React, { useState } from "react";

type FormDataType = {
  avaxPrice: number;
  amountOfAVAXDepositedIntoTheProtocol: number;
  amountOfAUSDInCirculation: number;
  amountOfXAVAXInCirculation: number;
};

const ProtocolSimulationComponent = () => {
  const [formData, setFormData] = useState<FormDataType>({
    avaxPrice: 0,
    amountOfAVAXDepositedIntoTheProtocol: 0,
    amountOfAUSDInCirculation: 0,
    amountOfXAVAXInCirculation: 0,
  });

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  console.log(formData);

  return (
    <div>
      <form>
        <h3>Protocol Simulation</h3>
        <div>
          <label>Avax Price</label>

          <input type="text" name="avaxPrice" onChange={handleChange} />
        </div>

        <div>
          <label>Amount of AVAX Deposited Into The Protocol</label>

          <input
            type="text"
            name="amountOfAVAXDepositedIntoTheProtocol"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Amount of aUSD In Circulation</label>

          <input
            type="text"
            name="amountOfAUSDInCirculation"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Amount of xAVAX In Circulation</label>

          <input
            type="text"
            name="amountOfXAVAXInCirculation"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ProtocolSimulationComponent;
