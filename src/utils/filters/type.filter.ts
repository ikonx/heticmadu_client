export const filterType = (
  _valuesToFilter: any,
  _fieldKey: string,
  _filterValue: string,
): any[] => {
  const res = _valuesToFilter.filter((item: any) => item[_fieldKey] === _filterValue);
  return res;
};
