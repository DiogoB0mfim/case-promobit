const months = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ"
];

export const dateFormat = (param) => {
  const month = months[param.slice(5, 7) - 1]
  const date = param.slice(8) + "/" + month + "/" + param.slice(0, 4);

  return date;
};
