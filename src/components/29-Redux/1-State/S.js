// define states
count: 0;
const initialState = { count: 0 };
const initialState2 = { users: [{ name: "anisul islam" }] };

// define constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// dispatch(Action)


// {
//   type: INCREMENT,
// }
// {
//   type: DECREMENT,
// }
// {
//   type: ADD_USER,
//   payload: {
//     name: "rafiqul islam",
//   }
// }



// crate reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

// 4. store - getState(), dispatch(), subscribe()

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());