import React from 'react';
import EmployeeRow from './EmployeeRow';

function ResultsTable({ employees }) {
  return (
    <section className="results-section">
      <div className="table-wrap">
        <table className="results-table">
          <thead>
            <tr>
              <th>employee #</th>
              <th>tax outgo</th>
              <th>take home</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <EmployeeRow key={emp.index} emp={emp} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ResultsTable;
