import { Icons } from "../Icons"

const TransactionAction = () => {
  return (
    <div className="transaction_buttons">
      <button className="transaction_button sort">
        Sort
        <Icons.sort />
      </button>
      <button className="transaction_button download">
        <Icons.download />
      </button>
    </div>
  )
}

export default TransactionAction
