import { Icons } from "../Icons"

const StoreDetails = () => {
  return (
    <div className="store_details">
      <img src="/store_logo.png" alt="" className="store_logo" />
      <div className="store_info">
        <span className="store_name">Nishyan</span>
        <a href="" className="store_link">
          Visit store
        </a>
      </div>
      <Icons.chevron className="store_arrow" />
    </div>
  )
}

export default StoreDetails
