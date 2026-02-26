const taxService = require('../services/taxService');

function calculate(req, res) {
  const n = Number(req.body.numEmployees);
  const total = Number(req.body.totalSalary);

  if (!Number.isInteger(n) || n < 1) {
    return res.status(400).json({ error: 'give a valid number of employees (1 or more)' });
  }
  if (!Number.isFinite(total) || total < 0) {
    return res.status(400).json({ error: 'total pay must be 0 or more' });
  }

  const result = taxService.runCalculation(n, total);
  res.json(result);
}

module.exports = { calculate };
