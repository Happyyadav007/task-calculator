import React from 'react';

function InputSection({ numEmployees, totalSalary, onNumEmployeesChange, onTotalSalaryChange, error, loading, onCalculate, onReset, showReset }) {
  return (
    <section className="input-section">
      <div className="input-grid">
        <label>
          no of employees
          <input
            type="number"
            min="1"
            value={numEmployees}
            onChange={(e) => onNumEmployeesChange(e.target.value)}
            disabled={loading}
          />
        </label>
        <label>
          total yearly pay of all (₹)
          <input
            type="number"
            min="0"
            step="1000"
            value={totalSalary}
            onChange={(e) => onTotalSalaryChange(e.target.value)}
            disabled={loading}
          />
        </label>
      </div>
      {error && <div className="error-msg">{error}</div>}
      <div className="btn-row">
        <button type="button" className="btn btn-primary" onClick={onCalculate} disabled={loading}>
          {loading ? <span className="spinner" /> : 'calculate'}
        </button>
        {showReset && (
          <button type="button" className="btn btn-ghost" onClick={onReset}>
            reset
          </button>
        )}
      </div>
    </section>
  );
}

export default InputSection;
