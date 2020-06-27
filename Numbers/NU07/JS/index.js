/**
 * Calculate the monthly payments of a fixed term mortgage
 * over given Nth terms at a given interest rate
 * @param {Number} amount How much do you have to pay
 * @param {Number} rate Percertage to pay, 10% = 0.1
 * @param {Number} time Months
 * @returns {Number} Mortage to pay monthly
 */
const mortageCalculator = (amount = 0, rate = 0.1, time = 12) => {
  if (amount < 0 || time <= 0 || rate < 0) throw Error("Invalida data!");
  if (amount === 0) return 0;

  return;
};

console.assert(mortageCalculator(0) == 0);
