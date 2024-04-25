import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/slice";

// 資料庫
const store = configureStore({
  reducer: {
    //這裡的「counter」要跟資料庫中的「counter」名稱一樣
    counter:counterSlice,
  },
});

export default store;
