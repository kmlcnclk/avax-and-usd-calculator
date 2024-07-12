export type ProtocolSimulationFormDataType = {
  avaxPrice: number;
  amountOfAVAXDepositedIntoTheProtocol: number;
  amountOfAUSDInCirculation: number;
  amountOfXAVAXInCirculation: number;
};

export type ProtocolSimulationCalculatedType = {
  totalValueOfAVAXCollateralOfTheProtocol: number;
  aUSDMarketCap: number;
  aUSDPrice: number;
  xAVAXMarketCap: number;
  xAVAXPrice: number;
  leverage: number;
  collateralizationRatio: number;
};

export type ProtocolSimulationCalculateSetters = {};
