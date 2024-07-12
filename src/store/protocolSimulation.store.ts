import {
  ProtocolSimulationCalculatedType,
  ProtocolSimulationCalculateSetters,
  ProtocolSimulationFormDataType,
} from "@/types/ProtocolSimulation.type";
import { create } from "zustand";

export type ProtocolSimulationState = {
  formData: ProtocolSimulationFormDataType;
  calculated: ProtocolSimulationCalculatedType;
};

type Action = {
  setFormData: (value: ProtocolSimulationState["formData"]) => void;
  updateAllCalculations: () => void;
} & ProtocolSimulationCalculateSetters;

const calculateAUSDMarketCap = (
  calculated: ProtocolSimulationCalculatedType,
  formData: ProtocolSimulationFormDataType
) => {
  return calculated.collateralizationRatio % 100 > 0
    ? formData.amountOfAUSDInCirculation
    : calculated.totalValueOfAVAXCollateralOfTheProtocol;
};

const calculateAUSDPrice = (
  calculated: ProtocolSimulationCalculatedType,
  formData: ProtocolSimulationFormDataType
) => {
  return calculated.totalValueOfAVAXCollateralOfTheProtocol >
    calculated.aUSDMarketCap
    ? 1
    : calculated.totalValueOfAVAXCollateralOfTheProtocol /
        formData.amountOfAUSDInCirculation;
};

const calculateXAVAXMarketCap = (
  calculated: ProtocolSimulationCalculatedType,
  formData: ProtocolSimulationFormDataType
) => {
  return calculated.totalValueOfAVAXCollateralOfTheProtocol -
    formData.amountOfAUSDInCirculation >
    0
    ? calculated.totalValueOfAVAXCollateralOfTheProtocol -
        calculated.aUSDMarketCap
    : 0;
};

const calculateXAVAXPrice = (
  calculated: ProtocolSimulationCalculatedType,
  formData: ProtocolSimulationFormDataType
) => {
  return calculated.totalValueOfAVAXCollateralOfTheProtocol >=
    calculated.aUSDMarketCap
    ? calculated.xAVAXMarketCap / formData.amountOfXAVAXInCirculation
    : 0;
};

const calculateLeverage = (calculated: ProtocolSimulationCalculatedType) => {
  return calculated.xAVAXMarketCap <= 0
    ? Infinity
    : (calculated.aUSDMarketCap + calculated.xAVAXMarketCap) /
        calculated.xAVAXMarketCap;
};

const calculateCollateralizationRatio = (
  calculated: ProtocolSimulationCalculatedType,
  formData: ProtocolSimulationFormDataType
) => {
  return (
    calculated.totalValueOfAVAXCollateralOfTheProtocol /
    formData.amountOfAUSDInCirculation
  );
};

const calculateTotalValueOfAVAXCollateralOfTheProtocol = (
  formData: ProtocolSimulationFormDataType
) => {
  return formData.avaxPrice * formData.amountOfAVAXDepositedIntoTheProtocol;
};

const useProtocolSimulationStore = create<ProtocolSimulationState & Action>(
  (set, get) => ({
    formData: {
      avaxPrice: 0,
      amountOfAVAXDepositedIntoTheProtocol: 0,
      amountOfAUSDInCirculation: 0,
      amountOfXAVAXInCirculation: 0,
    },
    calculated: {
      aUSDMarketCap: 0,
      aUSDPrice: 0,
      xAVAXMarketCap: 0,
      xAVAXPrice: 0,
      leverage: 0,
      collateralizationRatio: 0,
      totalValueOfAVAXCollateralOfTheProtocol: 0,
    },

    setFormData: (value: ProtocolSimulationState["formData"]) =>
      set((state) => ({
        formData: {
          ...state.formData,
          ...value,
        },
      })),

    updateAllCalculations: () => {
      const { formData } = get();

      const totalValueOfAVAXCollateralOfTheProtocol =
        calculateTotalValueOfAVAXCollateralOfTheProtocol(formData);
      const collateralizationRatio =
        totalValueOfAVAXCollateralOfTheProtocol /
        formData.amountOfAUSDInCirculation;
      const aUSDMarketCap = calculateAUSDMarketCap(
        {
          ...get().calculated,
          collateralizationRatio,
          totalValueOfAVAXCollateralOfTheProtocol,
        },
        formData
      );
      const aUSDPrice = calculateAUSDPrice(
        {
          ...get().calculated,
          aUSDMarketCap,
          totalValueOfAVAXCollateralOfTheProtocol,
        },
        formData
      );
      const xAVAXMarketCap = calculateXAVAXMarketCap(
        {
          ...get().calculated,
          aUSDMarketCap,
          totalValueOfAVAXCollateralOfTheProtocol,
        },
        formData
      );
      const xAVAXPrice = calculateXAVAXPrice(
        {
          ...get().calculated,
          xAVAXMarketCap,
          aUSDMarketCap,
          totalValueOfAVAXCollateralOfTheProtocol,
        },
        formData
      );
      const leverage = calculateLeverage({
        ...get().calculated,
        xAVAXMarketCap,
        aUSDMarketCap,
      });

      set({
        calculated: {
          totalValueOfAVAXCollateralOfTheProtocol,
          collateralizationRatio,
          aUSDMarketCap,
          aUSDPrice,
          xAVAXMarketCap,
          xAVAXPrice,
          leverage,
        },
      });
    },
  })
);

export default useProtocolSimulationStore;
