import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ICount = number;
interface ICounterSliceProps {
  count: ICount;
}
const initialState: ICounterSliceProps = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    incrementByOne: (state) => {
      state.count += 1;
    },
    changeByAmount: (state, action: PayloadAction<ICount>) => {
      state.count += action.payload;
    },

    decrementByOne: (state) => {
      state.count -= 1;
    },
  },
});
export const { changeByAmount, decrementByOne, reset, incrementByOne } =
  counterSlice.actions;
