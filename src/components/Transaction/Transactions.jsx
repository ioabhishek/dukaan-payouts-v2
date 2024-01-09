import Pagination from "../pagination/Pagination"
import TransactionTable from "./TransactionTable"
import TransactionSearch from "./TransactionSearch"
import TransactionAction from "./TransactionAction"
import "../../styles/transaction.css"

const Transactions = () => {
  return (
    <>
      <h2 className="section_title">Transactions | This Month</h2>
      <div className="transaction_wrap">
        <div className="trans_actions">
          <TransactionSearch />
          <TransactionAction />
        </div>
        <TransactionTable />
        <Pagination />
      </div>
    </>
  )
}

export default Transactions
