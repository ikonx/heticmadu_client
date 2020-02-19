/**
 *  receive array of values to filter, map on it and chose the key to check the filterValues
 *
 * @param {*} _valuesToFilter
 * @param {string} _fieldKey
 * @param {any[]} _filterValues
 * @returns {any[]}
 */

export const filterPrice = (
  _valuesToFilter: any,
  _fieldKey: string,
  _filterValues: any[],
): any[] => {
  const res = _valuesToFilter.filter((item: any) =>
    _filterValues.includes(item[_fieldKey]),
  );
  return res;
};
