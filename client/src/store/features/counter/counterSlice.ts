import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {
    builder.addCase(asyncChangeByAmount.pending, () => {
      console.log("Loading...");
    });
    builder.addCase(
      asyncChangeByAmount.fulfilled,
      (state, action: PayloadAction<ICount>) => {
        console.log("Done!");
        state.count += action.payload;
      }
    );
  },
});

export const asyncChangeByAmount = createAsyncThunk(
  "counter/changeByAmount",
  async (amount: ICount) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return amount;
  }
);

export const { changeByAmount, decrementByOne, reset, incrementByOne } =
  counterSlice.actions;
