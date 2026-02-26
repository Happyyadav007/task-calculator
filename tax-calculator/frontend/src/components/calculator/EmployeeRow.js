import React from 'react';

function fmt(n) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
}

function EmployeeRow({ emp }) {
  return (
    <tr>
      <td>{emp.index}</td>
      <td className="num">{fmt(emp.tax)}</td>
      <td className="num">{fmt(emp.takeHome)}</td>
    </tr>
  );
}

export default EmployeeRow;
