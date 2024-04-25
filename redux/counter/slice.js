import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// 資料庫中的「切片」，把資料庫想成圓形的蛋糕，然後切成一塊一塊的
// 把一整塊的資料庫切成其中一個「切片」
export const counterSlice = createSlice({
  // 一個切片裡面會有名字、初始狀態、reducer(裡面放你想要怎麼更改state的方法)
  name: "counter", // 切片的名稱
  initialState, // 切片包含的 state
  reducer: {
    // 切片要做的事情(函式)
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
  },
});

// 這裡的 increment 和 decrement 是 actions 裡面的東東
// 不是 reducer 裡面的東東
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
