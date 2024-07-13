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
    <div className="flex bg-gray-200 xs:p-5 sm:p-10 rounded-lg shadow-lg lg:space-x-5 xs:space-x-0 lg:space-y-0 xs:space-y-7 lg:flex-row xs:flex-col ">
      <div className="w-full bg-slate-100 p-4 rounded-xl shadow-lg xs:space-y-4 sm:space-y-1">
        <h3 className="text-center mb-7 font-semibold xs:text-sm sm:text-lg text-gray-700">
          Protocol Simulation
        </h3>

        <CalculatedResultDiv
          title="Total Value of AVAX Collateral of the Protocol"
          value={`$${calculatedProtocolSimulation.totalValueOfAVAXCollateralOfTheProtocol.toFixed(
            2
          )}`}
        />
        <CalculatedResultDiv
          title="aUSD Market Cap"
          value={`${calculatedProtocolSimulation.aUSDMarketCap.toFixed(2)}`}
        />
        <CalculatedResultDiv
          title="aUSD Price"
          value={`$${calculatedProtocolSimulation.aUSDPrice.toFixed(2)}`}
        />
        <CalculatedResultDiv
          title="xAVAX Market Cap"
          value={`$${calculatedProtocolSimulation.xAVAXMarketCap.toFixed(2)}`}
        />
        <CalculatedResultDiv
          title="xAVAX Price"
          value={`$${calculatedProtocolSimulation.xAVAXPrice.toFixed(2)}`}
        />

        <CalculatedResultDiv
          title="Leverage"
          value={`${calculatedProtocolSimulation.leverage.toFixed(2)}`}
        />
        <CalculatedResultDiv
          title="Collateralization Ratio"
          value={`${
            calculatedProtocolSimulation.collateralizationRatio * 100
          }%`}
        />
      </div>

      <div className="w-full bg-slate-100 p-4 rounded-xl shadow-lg xs:space-y-4 sm:space-y-1 ">
        <h3 className="text-center mb-7 font-semibold xs:text-sm sm:text-lg text-gray-700">
          Trading Simulation
        </h3>

        <CalculatedResultDiv
          title="xAVAX Minted"
          value={`${calculatedTradingSimulation.xAVAXMinted.toFixed(2)}`}
        />
        <CalculatedResultDiv
          title="Value of the xAVAX Position of the User"
          value={`$${calculatedTradingSimulation.valueOfTheXAVAXPositionOfTheUser.toFixed(
            2
          )}`}
        />
        <CalculatedResultDiv
          title="New xAVAX Price"
          value={`$${calculatedTradingSimulation.newXAVAXPrice.toFixed(2)}`}
        />
        <CalculatedResultDiv
          title="New Value of the xAVAX Position of the User"
          value={`$${calculatedTradingSimulation.newValueOfTheXAVAXPositionOfTheUser.toFixed(
            2
          )}`}
        />
        <CalculatedResultDiv
          title="Amount of AVAX User Have"
          value={`${calculatedTradingSimulation.amountOfAVAXUserHave.toFixed(
            2
          )}`}
        />

        <CalculatedResultDiv
          title="Increase/Decrease in Dollar Value"
          value={`${(
            calculatedTradingSimulation.increaseDecreaseInDollarValue * 100
          ).toFixed(2)}%`}
        />
        <CalculatedResultDiv
          title="Increase/Decrease in AVAX Value"
          value={`${(
            calculatedTradingSimulation.increaseDecreaseInAVAXValue * 100
          ).toFixed(2)}%`}
        />
      </div>
    </div>
  );
};

export default CalculatedResultComponent;
