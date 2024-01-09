import Transactions from "../Transaction/Transactions"

import StickyHeader from "../header/StickyHeader"
import Overview from "../overview/Overview"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <StickyHeader />
      <section className="p-8">
        <Overview />
        <Transactions />
      </section>
    </div>
  )
}

export default Dashboard
