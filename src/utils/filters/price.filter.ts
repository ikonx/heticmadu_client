export const filterPrice = (
  _valuesToFilter: any,
  _fieldKey: string,
  _filterValue: any[],
): any[] => {
  const res = _valuesToFilter.filter((item: any) =>
    _filterValue.includes(item[_fieldKey]),
  );
  return res;
};
