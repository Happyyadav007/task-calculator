# task-calculator

Calculator that takes number of employees and total yearly pay, then works out how to split the pay so total tax is as low as possible. Shows each employee’s tax and take-home.

## how it runs

- **Backend** (Express, Node): port **3000**
- **Frontend** (React): port **5000**

Frontend talks to the backend via a proxy, so you open the app at http://localhost:5000.

## how to run

1. **Backend**

   ```bash
   cd backend
   npm install
   npm run dev
   ```

   Server runs on http://localhost:3000.

2. **Frontend**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   App runs on http://localhost:5000. Use this URL in the browser.

## tech

- Backend: Node.js, Express
- Frontend: React, CSS
