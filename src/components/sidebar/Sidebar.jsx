import SidebarMenu from "./SidebarMenu"
import StoreCredit from "./StoreCredit"
import StoreDetails from "./StoreDetails"
import "../../styles/sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <StoreDetails />
      <SidebarMenu />
      <div className="separator"></div>
      <StoreCredit />
    </aside>
  )
}

export default Sidebar
