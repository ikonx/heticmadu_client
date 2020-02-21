/**
 *  receive array of values to filter, map on it and chose the key to check the filterValues
 *
 * @param {*} _valuesToFilter
 * @param {string} _fieldKey
 * @param {any[]} _filterValues
 * @returns {any[]}
 */

export const filterTags = (
  _valuesToFilter: any,
  _fieldKey: string,
  _filterValues: any[],
): any[] => {
  const res = _valuesToFilter.filter((item: any) => {
    const result = item.tags
      ? item.tags.filter((tag: any) => {
          return _filterValues.includes(tag.tag);
        })
      : [];
    return result.length > 0 && item;
  });
  return res;
};
