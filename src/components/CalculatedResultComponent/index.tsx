import React from "react";
import { ProtocolSimulationCalculatedType } from "@/types/ProtocolSimulation.type";
import { TradingSimulationCalculatedType } from "@/types/TradingSimulation.type";
import CalculatedResultDiv from "../common/CalculatedResultDiv";

type Props = {
  calculatedProtocolSimulation: ProtocolSimulationCalculatedType;
  calculatedTradingSimulation: TradingSimulationCalculatedType;
};

const CalculatedResultComponent: React.FC<Props> = ({
  calculatedProtocolSimulation,
  calculatedTradingSimulation,
}: Props) => {
  return (
    <div className="flex bg-gray-200 p-10 rounded-lg shadow-lg lg:space-x-5 xs:space-x-0 lg:space-y-0 xs:space-y-7 lg:flex-row xs:flex-col ">
      <div className="space-y-1 w-full">
        <h3 className="text-center mb-7 font-semibold xs:text-sm sm:text-lg text-gray-700">
          Protocol Simulation
        </h3>

        <CalculatedResultDiv
          title="Total Value of AVAX Collateral of the Protocol"
          value={
            calculatedProtocolSimulation.totalValueOfAVAXCollateralOfTheProtocol
          }
        />
        <CalculatedResultDiv
          title="aUSD Market Cap"
          value={calculatedProtocolSimulation.aUSDMarketCap}
        />
        <CalculatedResultDiv
          title="aUSD Price"
          value={calculatedProtocolSimulation.aUSDPrice}
        />
        <CalculatedResultDiv
          title="xAVAX Market Cap"
          value={calculatedProtocolSimulation.xAVAXMarketCap}
        />
        <CalculatedResultDiv
          title="xAVAX Price"
          value={calculatedProtocolSimulation.xAVAXPrice}
        />

        <CalculatedResultDiv
          title="Leverage"
          value={calculatedProtocolSimulation.leverage}
        />
        <CalculatedResultDiv
          title="Collateralization Ratio"
          value={calculatedProtocolSimulation.collateralizationRatio}
        />
      </div>

      <div className="space-y-1 w-full">
        <h3 className="text-center mb-7 font-semibold xs:text-sm sm:text-lg text-gray-700">
          Trading Simulation
        </h3>

        <CalculatedResultDiv
          title="xAVAX Minted"
          value={calculatedTradingSimulation.xAVAXMinted}
        />
        <CalculatedResultDiv
          title="Value of the xAVAX Position of the User"
          value={calculatedTradingSimulation.valueOfTheXAVAXPositionOfTheUser}
        />
        <CalculatedResultDiv
          title="New xAVAX Price"
          value={calculatedTradingSimulation.newXAVAXPrice}
        />
        <CalculatedResultDiv
          title="New Value of the xAVAX Position of the User"
          value={
            calculatedTradingSimulation.newValueOfTheXAVAXPositionOfTheUser
          }
        />
        <CalculatedResultDiv
          title="Amount of AVAX User Have"
          value={calculatedTradingSimulation.amountOfAVAXUserHave}
        />

        <CalculatedResultDiv
          title="Increase/Decrease in Dollar Value"
          value={calculatedTradingSimulation.increaseDecreaseInDollarValue}
        />
        <CalculatedResultDiv
          title="Increase/Decrease in AVAX Value"
          value={calculatedTradingSimulation.increaseDecreaseInAVAXValue}
        />
      </div>
    </div>
  );
};

export default CalculatedResultComponent;
