/*
 *
 * Campaigns actions
 *
 */

import {
  TABLE_INITIALIZE,
  TABLE_NEW_DATA,
  TABLE_PAGE_CHANGED,
  TABLE_PAGE_SIZE_CHANGED,
  TABLE_FILTER_CHANGED,
  TABLE_FILTER_TEXT_CHANGED,
  TABLE_SORT_CHANGED,
  TABLE_ROW_CHECKED_CHANGED,
  TABLE_SELECT_ALL_CHANGED,
  TABLE_DESTROY_STATE,
  TABLE_SET_FILTER
} from './constants';

export const tableInitialize = (tableName, initialData, columns, configs, filterValue) => ({
  type: TABLE_INITIALIZE,
  payload: {
    tableName,
    initialData,
    columns,
    configs,
    filterValue,
  },
});

export const tableNewData = (tableName, data) => ({
  type: TABLE_NEW_DATA,
  payload: {
    tableName,
    data,
  },
});

export const tablePageChanged = (tableName, page) => ({
  type: TABLE_PAGE_CHANGED,
  payload: {
    tableName,
    page,
  },
});

export const tablePageSizeChanged = (tableName, pageSize) => ({
  type: TABLE_PAGE_SIZE_CHANGED,
  payload: {
    tableName,
    pageSize,
  },
});

export const tableFilterChanged = (tableName, filter) => ({
  type: TABLE_FILTER_CHANGED,
  payload: {
    tableName,
    filter,
  },
});

export const tableFilterTextChanged = (tableName, filterText) => ({
  type: TABLE_FILTER_TEXT_CHANGED,
  payload: {
    tableName,
    filterText,
  },
});

export const tableSortChanged = (tableName, sortKey) => ({
  type: TABLE_SORT_CHANGED,
  payload: {
    tableName,
    sortKey,
  },
});

export const tableRowCheckedChanged = (tableName, row) => ({
  type: TABLE_ROW_CHECKED_CHANGED,
  payload: {
    tableName,
    row,
  },
});

export const tableSelectAllChanged = (tableName) => ({
  type: TABLE_SELECT_ALL_CHANGED,
  payload: {
    tableName,
  },
});

export const tableDestroyState = (tableName) => ({
  type: TABLE_DESTROY_STATE,
  payload: {
    tableName,
  },
});

export const tableSetFilter = (tableName, filterValue) => ({
  type: TABLE_SET_FILTER,
  payload: {
    tableName,
    filterValue,
  },
});