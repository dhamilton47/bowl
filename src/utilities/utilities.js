export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US').format(new Date(date));
}

export function myFunction(date) {
  console.log( typeof date);
  var d = new Date(date);
  console.log(typeof d);
  n = d.toLocaleDateString()
  return n;
}
export function reformatDate(date) {
  const year = Date.getYear(date);
  const month = Date.getMonth(date);
  const day = Date.getDay(date);

  console.log(date, year, month, day);
}