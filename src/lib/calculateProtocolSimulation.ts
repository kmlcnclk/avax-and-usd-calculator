import {
  ProtocolSimulationCalculatedType,
  ProtocolSimulationCalculateSetters,
  ProtocolSimulationFormDataType,
} from "@/types/ProtocolSimulation.type";

export function calculateProtocolSimulation(
  formData: ProtocolSimulationFormDataType,
  calculated: ProtocolSimulationCalculatedType,
  calculatedSetters: ProtocolSimulationCalculateSetters
) {
  // B2*B3
  //   calculatedSetters.setTotalValueOfAVAXCollateralOfTheProtocol(
  //     formData.avaxPrice * formData.amountOfAVAXDepositedIntoTheProtocol
  //   );
  // =B4/B6
  //   calculatedSetters.setCollateralizationRatio(
  //     calculated.totalValueOfAVAXCollateralOfTheProtocol /
  //       formData.amountOfAUSDInCirculation
  //   );
  // =IF(B12>100%;B6;B4)
  //   if (calculated.collateralizationRatio > 100) {
  //     calculatedSetters.setAUSDMarketCap(formData.amountOfAUSDInCirculation);
  //   } else {
  //     calculatedSetters.setAUSDMarketCap(
  //       calculated.totalValueOfAVAXCollateralOfTheProtocol
  //     );
  //   }
  // =IF(B4 > B5 ;1 ; B4/B6)
  //   if (
  //     calculated.totalValueOfAVAXCollateralOfTheProtocol >
  //     calculated.aUSDMarketCap
  //   ) {
  //     calculatedSetters.setAUSDPrice(1);
  //   } else {
  //     calculatedSetters.setAUSDPrice(
  //       calculated.totalValueOfAVAXCollateralOfTheProtocol /
  //         formData.amountOfAUSDInCirculation
  //     );
  //   }
  // =IF (B4- (B6*1) > 0 ;B4-B5 ; 0)
  //   if (
  //     calculated.totalValueOfAVAXCollateralOfTheProtocol -
  //       formData.amountOfAUSDInCirculation * 1 >
  //     0
  //   ) {
  //     calculatedSetters.setXAVAXMarketCap(
  //       calculated.totalValueOfAVAXCollateralOfTheProtocol -
  //         calculated.aUSDMarketCap
  //     );
  //   } else {
  //     calculatedSetters.setXAVAXMarketCap(0);
  //   }
  // =IF (B4 >= B5; B8/B9; 0)
  //   if (
  //     calculated.totalValueOfAVAXCollateralOfTheProtocol >=
  //     calculated.aUSDMarketCap
  //   ) {
  //     calculatedSetters.setXAVAXPrice(
  //       calculated.xAVAXMarketCap / formData.amountOfXAVAXInCirculation
  //     );
  //   } else {
  //     calculatedSetters.setXAVAXPrice(0);
  //   }
  // =IF (B8 <= 0 ; "Infinite" ; ((B5+B8)/B8))
  //   if (calculated.xAVAXMarketCap <= 0) {
  //     calculatedSetters.setLeverage(Infinity);
  //   } else {
  //     calculatedSetters.setLeverage(
  //       (calculated.aUSDMarketCap + calculated.xAVAXMarketCap) /
  //         calculated.xAVAXMarketCap
  //     );
  //   }
}
