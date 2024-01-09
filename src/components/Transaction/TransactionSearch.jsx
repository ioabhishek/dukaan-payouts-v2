import { Icons } from "../Icons"

const TransactionSearch = () => {
  return (
    <div className="search_field">
      <Icons.search className="search_icon w-[14px] h-[14px]" />
      <input
        type="search"
        className="search_input"
        placeholder="Search by order ID..."
      />
    </div>
  )
}

export default TransactionSearch
