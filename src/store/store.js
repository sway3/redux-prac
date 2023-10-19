import { createStore, combineReducers } from 'redux';

export const INCREMENT = 'increment';

const initialCounterState = { counter: 0, showCounter: true };

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case 'increase':
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case 'decrement':
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case 'toggle':
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    default:
      return state;
  }
};

const initialAuthState = { isAuthenticated: false };

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'login':
      return {
        isAuthenticated: true,
      };
    case 'logout':
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const initialTodoState = { todos: [] };

const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case 'add':
      return {
        todos: [...state.todos, action.todo],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer);

export default store;
