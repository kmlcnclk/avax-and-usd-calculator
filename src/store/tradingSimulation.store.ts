import {
  TradingSimulationCalculatedType,
  TradingSimulationCalculateSetters,
  TradingSimulationFormDataType,
} from "@/types/TradingSimulation.type";
import { create } from "zustand";
import useProtocolSimulationStore from "./protocolSimulation.store";

type TradingSimulationState = {
  formData: TradingSimulationFormDataType;
  calculated: TradingSimulationCalculatedType;
};

type Action = {
  setFormData: (value: TradingSimulationFormDataType) => void;
  updateAllCalculations: () => void;
} & TradingSimulationCalculateSetters;

const calculateAmountOfAVAXUserHave = (
  calculated: TradingSimulationCalculatedType,
  formData: TradingSimulationFormDataType
) => {
  // =E7/(B2+B2*E5)
  return (
    calculated.newValueOfTheXAVAXPositionOfTheUser /
    (useProtocolSimulationStore.getState().formData.avaxPrice +
      useProtocolSimulationStore.getState().formData.avaxPrice *
        (formData.changeInAVAXPrice / 100))
  );
};

const calculateIncreaseDecreaseInDollarValue = (
  calculated: TradingSimulationCalculatedType,
  formData: TradingSimulationFormDataType
) => {
  // =(E7-E4)/E4
  return (
    (calculated.newValueOfTheXAVAXPositionOfTheUser -
      calculated.valueOfTheXAVAXPositionOfTheUser) /
    calculated.valueOfTheXAVAXPositionOfTheUser
  );
};

const calculateIncreaseDecreaseInAVAXValue = (
  calculated: TradingSimulationCalculatedType,
  formData: TradingSimulationFormDataType
) => {
  // =(E8-E2)/E2
  return (
    (calculated.amountOfAVAXUserHave -
      formData.amountOfAVAXDepositedByTheUser) /
    formData.amountOfAVAXDepositedByTheUser
  );
};

const calculateNewValueOfTheXAVAXPositionOfTheUser = (
  calculated: TradingSimulationCalculatedType,
  formData: TradingSimulationFormDataType
) => {
  // =E6*E3
  return calculated.newXAVAXPrice * calculated.xAVAXMinted;
};

const calculateNewXAVAXPrice = (
  calculated: TradingSimulationCalculatedType,
  formData: TradingSimulationFormDataType
) => {
  // =((B4+B4*E5)-B5)/B9
  return (
    (useProtocolSimulationStore.getState().calculated
      .totalValueOfAVAXCollateralOfTheProtocol +
      useProtocolSimulationStore.getState().calculated
        .totalValueOfAVAXCollateralOfTheProtocol *
        (formData.changeInAVAXPrice / 100) -
      useProtocolSimulationStore.getState().calculated.aUSDMarketCap) /
    useProtocolSimulationStore.getState().formData.amountOfXAVAXInCirculation
  );
};

const calculateValueOfTheXAVAXPositionOfTheUser = (
  calculated: TradingSimulationCalculatedType,
  formData: TradingSimulationFormDataType
) => {
  // =E3*B10
  return (
    calculated.xAVAXMinted *
    useProtocolSimulationStore.getState().calculated.xAVAXPrice
  );
};

const calculateXAVAXMinted = (
  calculated: TradingSimulationCalculatedType,
  formData: TradingSimulationFormDataType
) => {
  // =(E2*B2)/B10
  return (
    (formData.amountOfAVAXDepositedByTheUser *
      useProtocolSimulationStore.getState().formData.avaxPrice) /
    useProtocolSimulationStore.getState().calculated.xAVAXPrice
  );
};

const useTradingSimulationStore = create<TradingSimulationState & Action>(
  (set, get) => ({
    formData: {
      changeInAVAXPrice: 0,
      amountOfAVAXDepositedByTheUser: 0,
    },
    calculated: {
      amountOfAVAXUserHave: 0,
      increaseDecreaseInDollarValue: 0,
      increaseDecreaseInAVAXValue: 0,
      newValueOfTheXAVAXPositionOfTheUser: 0,
      newXAVAXPrice: 0,
      valueOfTheXAVAXPositionOfTheUser: 0,
      xAVAXMinted: 0,
    },

    setFormData: (value: TradingSimulationState["formData"]) =>
      set((state) => ({
        formData: {
          ...state.formData,
          ...value,
        },
      })),

    updateAllCalculations: () => {
      const { formData } = get();

      const xAVAXMinted = calculateXAVAXMinted(get().calculated, formData);

      const valueOfTheXAVAXPositionOfTheUser =
        calculateValueOfTheXAVAXPositionOfTheUser(
          { ...get().calculated, xAVAXMinted },
          formData
        );

      const newXAVAXPrice = calculateNewXAVAXPrice(
        { ...get().calculated },
        formData
      );

      const newValueOfTheXAVAXPositionOfTheUser =
        calculateNewValueOfTheXAVAXPositionOfTheUser(
          { ...get().calculated, xAVAXMinted, newXAVAXPrice },
          formData
        );

      const amountOfAVAXUserHave = calculateAmountOfAVAXUserHave(
        { ...get().calculated, newValueOfTheXAVAXPositionOfTheUser },
        formData
      );

      const increaseDecreaseInDollarValue =
        calculateIncreaseDecreaseInDollarValue(
          {
            ...get().calculated,
            newValueOfTheXAVAXPositionOfTheUser,
            valueOfTheXAVAXPositionOfTheUser,
          },
          formData
        );

      const increaseDecreaseInAVAXValue = calculateIncreaseDecreaseInAVAXValue(
        {
          ...get().calculated,
          amountOfAVAXUserHave,
        },
        formData
      );

      set({
        calculated: {
          amountOfAVAXUserHave,
          increaseDecreaseInAVAXValue,
          increaseDecreaseInDollarValue,
          newValueOfTheXAVAXPositionOfTheUser,
          newXAVAXPrice,
          valueOfTheXAVAXPositionOfTheUser,
          xAVAXMinted,
        },
      });
    },
  })
);

export default useTradingSimulationStore;
