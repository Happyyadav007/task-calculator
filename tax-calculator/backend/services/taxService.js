// Slab rules: 0-2.5L = 0%, 2.5-5L = 10%, 5-10L = 20%, 10L+ = 25%. If tax > 50k, extra 5% on (tax - 50k).
const EXEMPT = 250000;
const SLAB2_END = 500000;
const SLAB3_END = 1000000;
const SURCHARGE_CAP = 50000;

function taxForOne(income) {
  if (income <= EXEMPT) return 0;
  let t = 0;
  t += Math.min(income - EXEMPT, SLAB2_END - EXEMPT) * 0.1;
  if (income > SLAB2_END) t += Math.min(income - SLAB2_END, SLAB3_END - SLAB2_END) * 0.2;
  if (income > SLAB3_END) t += (income - SLAB3_END) * 0.25;
  if (t > SURCHARGE_CAP) t += (t - SURCHARGE_CAP) * 0.05;
  return Math.round(t);
}

// Split total pay equally so total tax is minimised (best for this slab structure).
function splitPay(n, total) {
  const base = Math.floor(total / n);
  const rem = total % n;
  const out = [];
  for (let i = 0; i < n; i++) out.push(i < rem ? base + 1 : base);
  return out;
}

function runCalculation(numEmployees, totalSalary) {
  const salaries = splitPay(numEmployees, totalSalary);
  const employees = salaries.map((sal, i) => {
    const tax = taxForOne(sal);
    return { index: i + 1, salary: sal, tax, takeHome: sal - tax };
  });
  const totalTax = employees.reduce((s, e) => s + e.tax, 0);
  return { employees, totalTax, totalTakeHome: totalSalary - totalTax };
}

module.exports = { taxForOne, splitPay, runCalculation };
