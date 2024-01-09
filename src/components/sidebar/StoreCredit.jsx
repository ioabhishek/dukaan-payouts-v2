import { Icons } from "../Icons"

const StoreCredit = () => {
  return (
    <div className="credits">
      <div className="credits_icon">
        <Icons.pocket />
      </div>
      <div className="credits_texts">
        <span className="credits_title">Available credits</span>
        <span className="credits_amount">222.10</span>
      </div>
    </div>
  )
}

export default StoreCredit
