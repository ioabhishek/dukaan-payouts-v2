import { Icons } from "../Icons"
import "../../styles/overview.css"

const Overview = () => {
  return (
    <div className="overview_wrap">
      <div className="overview_top">
        <h2 className="overview_title">Overview</h2>
        <div className="select_wrap">
          <select name="" id="" className="select_timeframe">
            <option value="">Last Month</option>
          </select>
          <Icons.ad_dark />
        </div>
      </div>

      <div className="overview_cards">
        <div className="overview_card">
          <p className="overview_ctitle">Online orders</p>
          <p className="orders_count">231</p>
        </div>
        <div className="overview_card">
          <p className="overview_ctitle">Amount received</p>
          <p className="orders_count">₹23,92,312.19</p>
        </div>
      </div>
    </div>
  )
}

export default Overview
