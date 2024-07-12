"use client";

import React, { useState } from "react";

type FormDataType = {
  amountOfAVAXDepositedByTheUser: number;
  changeInAVAXPrice: number;
};

const TradingSimulationComponent = () => {
  const [formData, setFormData] = useState<FormDataType>({
    amountOfAVAXDepositedByTheUser: 0,
    changeInAVAXPrice: 0,
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
        <h3>Trading Simulation</h3>
        <div>
          <label>Amount of AVAX Deposited By The User</label>

          <input
            type="text"
            name="amountOfAVAXDepositedByTheUser"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Change in AVAX Price</label>

          <input type="text" name="changeInAVAXPrice" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default TradingSimulationComponent;
