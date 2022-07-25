// step 4: create store
  // npm install redux
  // src/store.js
  import { createStore } from "redux";
  import counterReducer from "./CounterReducer.js";
  const store = createStore(counterReducer);
  export default store;