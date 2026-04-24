import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBilling, IDeveloperInfo, IPlan, ITopUp } from "./type";
import { RootState } from "@/redux/store";

interface InitialState {
  plans: IPlan[];
  topUps: ITopUp[];
  billings: IBilling[];
  developer: IDeveloperInfo[];
}

const initialState: InitialState = {
  plans: [],
  topUps: [],
  billings: [],
  developer: []
};

export const preferencesSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    savePlans: (state, action: PayloadAction<IPlan[]>) => {
      state.plans = action.payload;
    },

    saveTopUps: (state, action: PayloadAction<ITopUp[]>) => {
      state.topUps = action.payload;
    },

    saveBillings: (state, action: PayloadAction<IBilling[]>) => {
      state.billings = action.payload;
    },

    saveDeveloperInfo: (state, action: PayloadAction<IDeveloperInfo[]>) => {
      state.developer = action.payload;
    }
  }
});

export const { savePlans, saveTopUps, saveBillings, saveDeveloperInfo } =
  preferencesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectPlans = (state: RootState) => state.preferences.plans;
export const selectTopUps = (state: RootState) => state.preferences.topUps;
export const selectBillings = (state: RootState) => state.preferences.billings;
export const selectDeveloperInfo = (state: RootState) =>
  state.preferences.developer;

// preferences Reducer
export const appReducer = preferencesSlice.reducer;
