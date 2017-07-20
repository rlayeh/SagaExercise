import { createSelector } from 'reselect';

const selectExampleDomain = () => (state) => state.exampleReducer;

const makeSelectHelloMessage = () => createSelector(
  selectExampleDomain(),
  (substate) => {
    return substate.helloMessage;
  }
);

export {
  makeSelectHelloMessage,
};
