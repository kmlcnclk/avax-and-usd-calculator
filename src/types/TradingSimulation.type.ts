export type TradingSimulationFormDataType = {
  amountOfAVAXDepositedByTheUser: number;
  changeInAVAXPrice: number;
};

export type TradingSimulationCalculatedType = {
  xAVAXMinted: number;
  valueOfTheXAVAXPositionOfTheUser: number;
  newXAVAXPrice: number;
  newValueOfTheXAVAXPositionOfTheUser: number;
  amountOfAVAXUserHave: number;
  increaseDecreaseInDollarValue: number;
  increaseDecreaseInAVAXValue: number;
};

export type TradingSimulationCalculateSetters = {};
