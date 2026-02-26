import React, { useState } from 'react';
import { Header } from '../components/layout';
import { InputSection, ResultsTable } from '../components/calculator';
import { calculateTax } from '../services/taxApi';

function CalculatorPage() {
  const [numEmployees, setNumEmployees] = useState('');
  const [totalSalary, setTotalSalary] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const handleCalc = async () => {
    setErr(null);
    const n = parseInt(numEmployees, 10);
    const total = parseFloat(totalSalary);
    if (!n || n < 1 || !total || total < 0) {
      setErr('enter valid employee count and total pay');
      return;
    }
    setLoading(true);
    try {
      const data = await calculateTax({ numEmployees: n, totalSalary: total });
      setResult(data);
    } catch (e) {
      setErr(e.message || 'something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const onReset = () => {
    setResult(null);
    setErr(null);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <InputSection
          numEmployees={numEmployees}
          totalSalary={totalSalary}
          onNumEmployeesChange={setNumEmployees}
          onTotalSalaryChange={setTotalSalary}
          error={err}
          loading={loading}
          onCalculate={handleCalc}
          onReset={onReset}
          showReset={!!result}
        />
        {result && result.employees && result.employees.length > 0 && (
          <>
            <p className="total-line">
              total tax outgo: <strong>{formatNum(result.totalTax)}</strong>
            </p>
            <ResultsTable employees={result.employees} />
          </>
        )}
      </main>
    </div>
  );
}

function formatNum(x) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(x);
}

export default CalculatorPage;
