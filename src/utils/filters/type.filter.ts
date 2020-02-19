/**
 *  receive array of values to filter, map on it and chose the key to check the filterValue
 *
 * @param {*} _valuesToFilter
 * @param {string} _fieldKey
 * @param {any[]} _filterValue
 * @returns {any[]}
 */

export const filterType = (
  _valuesToFilter: any,
  _fieldKey: string,
  _filterValue: string,
): any[] => {
  const res = _valuesToFilter.filter((item: any) => item[_fieldKey] === _filterValue);
  return res;
};
