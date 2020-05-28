import React, { useContext } from "react"

import { GlobalContext } from "../context/GlobalState"

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const income = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, curr) => (acc += curr >= 0 ? curr : 0), 0)
  const expenses = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, curr) => (acc += curr < 0 ? curr : 0), 0)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+ ${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">- ${Math.abs(expenses)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
