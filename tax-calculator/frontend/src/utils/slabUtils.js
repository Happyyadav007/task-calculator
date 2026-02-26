export function getSlabRows(salary) {
  const rows = [];
  if (salary <= 250000) {
    rows.push({ label: '0 - 2.5L', amount: salary, rate: '0%', tax: 0 });
    return { rows, surcharge: 0 };
  }
  rows.push({ label: '0 - 2.5L', amount: 250000, rate: '0%', tax: 0 });
  if (salary > 250000) {
    const amt = Math.min(salary - 250000, 250000);
    rows.push({ label: '2.5L - 5L', amount: amt, rate: '10%', tax: Math.round(amt * 0.1) });
  }
  if (salary > 500000) {
    const amt = Math.min(salary - 500000, 500000);
    rows.push({ label: '5L - 10L', amount: amt, rate: '20%', tax: Math.round(amt * 0.2) });
  }
  if (salary > 1000000) {
    const amt = salary - 1000000;
    rows.push({ label: 'Above 10L', amount: amt, rate: '25%', tax: Math.round(amt * 0.25) });
  }
  const slabTax = rows.reduce((s, r) => s + r.tax, 0);
  const surcharge = slabTax > 50000 ? Math.round((slabTax - 50000) * 0.05) : 0;
  return { rows, surcharge };
}
