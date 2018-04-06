import { createSelector } from 'reselect';

/**
 * Direct selector to the full state domain
 */
const selectFullDomain = (state) => state.get('full');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Full
 */

const makeSelectFull = () => createSelector(
  selectFullDomain,
  (substate) => substate.toJS()
);

export default makeSelectFull;
export {
  selectFullDomain,
};
