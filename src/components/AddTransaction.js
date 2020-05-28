import React, { useState, useContext } from "react"

import { GlobalContext } from "../context/GlobalState"

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext)
  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")
  return (
    <>
      <h3>Add new transaction</h3>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault()
          addTransaction({ text, amount })
        }}
      >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative for expenses and positive for incomes)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
