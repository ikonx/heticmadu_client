export const filterType = (
  _array: any,
  _category: string,
  __value: string,
): any[] => {
  const res = _array.filter((item: any) => item[_category] === __value);
  return res;
};
