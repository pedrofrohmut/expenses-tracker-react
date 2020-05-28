export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const { text, amount } = action.payload
      const newTransaction = {
        id: Math.floor(Math.random() * 100000),
        text,
        amount
      }
      return {
        ...state,
        transactions: state.transactions.concat(newTransaction)
      }
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        )
      }
    default:
      return state
  }
}
